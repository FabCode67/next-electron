from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Mock database (in a real app, you'd use a proper database)
users = {
    '1': {
        'name': 'John dDoe',
        'email': 'john@example.com',
        'lastLogin': datetime.now().isoformat()
    }
}

@app.route('/api/user-data', methods=['GET'])
def get_user_data():
    # For a real app, you might look up the user based on auth token
    user_id = request.args.get('id', '1')  # Default to user 1
    user = users.get(user_id)
    
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404

@app.route('/api/navigate', methods=['POST'])
def handle_navigation():
    data = request.json
    screen_name = data.get('screen')
    
    # You could perform validation or processing here
    # For example, checking if the user has permission to access the screen
    
    return jsonify({
        'success': True,
        'screen': screen_name,
        'message': f"Navigation to {screen_name} authorized"
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)