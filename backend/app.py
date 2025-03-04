from flask import Flask, request, jsonify
from flask_cors import CORS
from api.routes import messages_bp
from api.ollama_routes import ollama_bp

def create_app():
    app = Flask(__name__)

    # Apply CORS globally first
    CORS(app)
    
    # Register blueprints
    app.register_blueprint(messages_bp, url_prefix='/')
    app.register_blueprint(ollama_bp, url_prefix='/')

    # Configure CORS with more specific settings
    CORS(app, resources={
        r"/*": {  # Only apply CORS to routes starting with /
            "origins": ["http://localhost:5173", "http://localhost:3000"],  # Allow both Vite and React default ports
            "methods": ["GET", "POST", "PUT", "DELETE"],  # List allowed methods
            "allow_headers": ["Content-Type", "Description", "Context"]  # List allowed headers
        }
    })

    # Basic health check endpoint
    @app.route('/', methods=['GET'])
    def health_check():
        return jsonify({'status': 'healthy'})
    
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000, host='0.0.0.0') 