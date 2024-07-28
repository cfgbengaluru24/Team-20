from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from deep_translator import GoogleTranslator
from langdetect import detect

app = Flask(__name__)
CORS(app, resources={r"/transcribe_text": {"origins": "http://127.0.0.1:5500"}})  # Adjust the origin to your frontend URL
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app, async_mode='eventlet', cors_allowed_origins='*')

# To store users' language preferences
user_languages = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/transcribe_text', methods=['POST'])
def transcribe_text():
    transcribed_text = request.form.get('transcribed_text')
    target_language = request.form.get('target_language')
    nickname = request.form.get('nickname')

    if not transcribed_text or not target_language:
        return jsonify({"error": "Transcribed text and target language are required."}), 400

    try:
        from_lang = detect(transcribed_text)
        translated_text = GoogleTranslator(source=from_lang, target=target_language).translate(transcribed_text)

        return jsonify({
            "transcribed_text": transcribed_text,
            "translated_text": translated_text,
            "nickname": nickname
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')



@socketio.on('send_message')
def handle_send_message(data):
    message = data['message']
    nickname = data['nickname']
    meeting_id = data['meeting_id']

    for sid, language in user_languages.items():
        try:
            translated_text = GoogleTranslator(source='auto', target=language).translate(message)
            emit('receive_message', {
                'message': message,
                'translated_text': translated_text,
                'nickname': nickname,
                'meeting_id': meeting_id
            }, room=sid)
        except Exception as e:
            emit('error_message', {'error': str(e)}, room=sid)

@socketio.on('set_language')
def handle_set_language(data):
    nickname = data['nickname']
    language = data['language']
    user_languages[request.sid] = language
    print(f"User {nickname} set their language to {language}")

if __name__ == '__main__':
    socketio.run(app, debug=True, port=5000)
