# import os
# from flask import Flask, request,render_template, jsonify
# from flask_cors import CORS
# import google.generativeai as genai
# import logging

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)

# # Configure the Google AI API key
# genai.configure(api_key=os.environ.get("API_KEY", "AIzaSyDVmsAiMCEcXnehSB3vSFlAm4eIXvnR2e8"))

# # Create the model
# generation_config = {
#     "temperature": 1,
#     "top_p": 0.95,
#     "top_k": 64,
#     "max_output_tokens": 1024,  # Adjusting max output tokens for chat responses
#     "response_mime_type": "text/plain",
# }

# model = genai.GenerativeModel(
#     model_name="gemini-1.5-flash",
#     generation_config=generation_config,
# )

# app = Flask(__name__)
# CORS(app, resources={r"/chat": {"origins": "*"}})  # Enable CORS for specific endpoint

# @app.route('/chat', methods=['POST'])
# def chat():
#     try:
#         data = request.get_json()
#         user_input = data.get('message')

#         if not user_input:
#             return jsonify({"error": "Missing message"}), 400

#         # Generate response from the model
#         prompt = f"Provide a helpful, accurate, and brief answer to the following phishing-related question: {user_input}"

#         response = model.generate_content([prompt])
#         generated_text = response.text.strip()

#         return jsonify({"response": generated_text})

#     except Exception as e:
#         logging.error(f"Error generating response: {e}")
#         return jsonify({"error": "Internal server error"}), 500

# @app.route('/')
# def index():
#     return render_template('index.html')

# if __name__ == '__main__':
#     print("Starting Flask server...")
#     print("Available routes:")
#     for rule in app.url_map.iter_rules():
#         print(f"{rule} -> {rule.endpoint}")
#     app.run(debug=True)





from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
import os

app = Flask(__name__)

# Configure Google Generative AI
genai.configure(api_key=os.environ.get("API_KEY", "AIzaSyDVmsAiMCEcXnehSB3vSFlAm4eIXvnR2e8"))
generation_config = {
    "temperature": 0.7,
    "top_p": 0.9,
    "top_k": 40,
    "max_output_tokens": 250,  # Approximate token limit for ~200 words
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    system_instruction=(
        "You are a chatbot specializing in phishing awareness. Respond to queries "
        "in a simple and concise way, keeping answers under 200 words. "
        "At the end of each response, remind the user to 'check the report to know more about why your mail is classified as phishing mail.'"
    ),
)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    chat_session = model.start_chat(
        history=[
            {"role": "user", "parts": ["hi"]},
            {"role": "model", "parts": ["Hello! I'm here to answer phishing-related questions."]},
        ]
    )
    response = chat_session.send_message(user_message)
    return jsonify({"response": response.text})

if __name__ == '__main__':
    app.run(debug=True)
