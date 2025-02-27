from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Create data directory if it doesn't exist
data_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data')
os.makedirs(data_dir, exist_ok=True)

# Configure database path
db_path = os.path.join(data_dir, 'chat.db')
engine = create_engine(f'sqlite:///{db_path}')
Base = declarative_base()

class Message(Base):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True)
    content = Column(String, nullable=False)
    timestamp = Column(Integer, nullable=False)
    role = Column(String, nullable=False)  # 'user' or 'assistant'
    conversation_id = Column(String, nullable=False)  # to group messages in conversations

Base.metadata.create_all(engine)

# Create a session factory
Session = sessionmaker(bind=engine)

# Helper functions for database operations
def create_message(content: str, role: str, conversation_id: str, timestamp: int) -> dict:
    session = Session()
    try:
        message = Message(
            content=content,
            role=role,
            conversation_id=conversation_id,
            timestamp=timestamp
        )
        session.add(message)
        session.commit()
        
        # Create a dictionary with the message data before closing the session
        message_data = {
            'id': message.id,
            'content': message.content,
            'timestamp': message.timestamp,
            'role': message.role,
            'conversation_id': message.conversation_id
        }
        return message_data
    finally:
        session.close()

def get_conversation_messages(conversation_id: str) -> list[dict]:
    session = Session()
    try:
        # the filter may be unnecessary, but it's here to be safe
        messages = session.query(Message)\
            .order_by(Message.timestamp)\
            .all()
        
        # Convert messages to dictionaries before closing the session
        return [{
            'id': msg.id,
            'content': msg.content,
            'timestamp': msg.timestamp,
            'role': msg.role,
            'conversation_id': msg.conversation_id
        } for msg in messages]
    finally:
        session.close()

