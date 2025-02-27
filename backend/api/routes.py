from flask import Blueprint, request, jsonify
from .db import create_message, get_conversation_messages
from datetime import datetime, timezone, timedelta

est = timezone(timedelta(hours=-5))

messages_bp = Blueprint('messages', __name__)
ollama_bp = Blueprint('ollama', __name__)

@messages_bp.route('/messages', methods=['GET', 'POST'])
def messages():
    if request.method == 'GET':
        # use fields to specify which function are needed for the response
        fields = request.args.get('fields', 'all')

        if fields == 'chat-history':
            # get chat history
            data = get_conversation_messages()
            # get the convo topic for display
            # get the timestamps for sorting
            #
        return jsonify(data)
    elif request.method == 'POST':
        try:
            data = request.json
            if not data:
                return jsonify({'error': 'No JSON data received'}), 400
            
            if 'content' not in data:
                return jsonify({'error': 'Message content is required'}), 400

            message_data = create_message(
                content=data['content'],
                role='user',
                conversation_id=data.get('conversation_id', 'default'),
                timestamp=datetime.now(est).strftime("%Y-%m-%d %H:%M:%S EST")
            )
            return jsonify(message_data)
        except Exception as e:
            print(f"Error processing message: {str(e)}")  # Server-side logging
            return jsonify({'error': str(e)}), 500

@messages_bp.route('/messages/chat-history', methods=['GET'])
def chat_history():
    conversation_id = request.args.get('conversation_id', 'default')
    messages = get_conversation_messages(conversation_id)
    return jsonify(messages)

