from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Configure CORS to only allow requests from your frontend domain
CORS(app, resources={
    r"/api/*": {  # Only apply CORS to routes starting with /api/
        "origins": ["http://localhost:3000"],  # List allowed origins
        "methods": ["GET", "POST", "PUT", "DELETE"],  # List allowed methods
        "allow_headers": ["Content-Type"]  # List allowed headers
    }
})

# Basic health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True, port=5000) 