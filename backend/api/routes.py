from flask import Blueprint, request, jsonify
from .db import create_message
import time

messages_bp = Blueprint('messages', __name__)
ollama_bp = Blueprint('ollama', __name__)

@messages_bp.route('/messages', methods=['GET', 'POST'])
def messages():
    if request.method == 'GET':
        return jsonify({'message': 'Messages fetched successfully'})
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
                timestamp=int(time.time())
            )
            return jsonify(message_data)
        except Exception as e:
            print(f"Error processing message: {str(e)}")  # Server-side logging
            return jsonify({'error': str(e)}), 500

@ollama_bp.route('/ollama/generate', methods=['GET', 'POST'])
def generate_response():
    if request.method == 'GET':
        return jsonify({'message': 'Response generated successfully'})
    elif request.method == 'POST':
        data = request.json
        print(data)
    return jsonify({'message': 'Response generated successfully'})
