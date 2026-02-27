from flask import Flask, request, jsonify
from flask import Flask, render_template
import requests

app = Flask(__name__)

RESEND_API_KEY = "re_YLxVsBa5_13hw9ZhML7nWZ5tbTogYtG2V"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.json

    response = requests.post(
        "https://api.resend.com/emails",
        headers={
            "Authorization": f"Bearer {RESEND_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "from": "cyberhack@resend.dev",  
            "to": "nilamanikundu2@gmail.com",
            "reply_to": data["email"],   
            "subject": f"New Message from {data['name']}",
            "html": f"""
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> {data['name']}</p>
        <p><strong>Email:</strong> {data['email']}</p>
        <p><strong>Message:</strong></p>
        <p>{data['message']}</p>
    """
        }
    )

    return jsonify({"status": response.status_code})


if __name__ == "__main__":
    app.run(debug=True)
