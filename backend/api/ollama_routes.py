from flask import Blueprint, request, jsonify

ollama_bp = Blueprint('ollama', __name__)

@ollama_bp.route('/ollama/generate', methods=['GET', 'POST'])
def generate_response():
    if request.method == 'GET':
        return jsonify({'message': 'Response generated successfully'})
    elif request.method == 'POST':
        data = request.json
        print(data)
    return jsonify({'message': 'Response generated successfully'})