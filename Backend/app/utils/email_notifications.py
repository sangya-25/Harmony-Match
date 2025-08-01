import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

EMAIL_HOST = os.getenv("EMAIL_HOST")
EMAIL_PORT = int(os.getenv("EMAIL_PORT"))
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

def send_email_notification(receiver_email, receiver_name, sender_name, redirect_link):
    try:
        # Create the email
        msg = MIMEMultipart()
        msg["From"] = EMAIL_USER
        msg["To"] = receiver_email
        msg["Subject"] = "New Message Alert"

        # HTML content for the email
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset=\"UTF-8\">
          <title>New Message Alert</title>
        </head>
        <body style=\"margin: 0; padding: 0; background-color: #fff0f6; font-family: 'Segoe UI', sans-serif;\">
          <table align=\"center\" width=\"100%\" style=\"max-width: 500px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin: 40px auto; overflow: hidden;\">
            <tr>
              <td style=\"padding: 30px; text-align: center; background: linear-gradient(135deg, #fcd5ce, #f5c2e7);\">
                <h2 style=\"color: #6f42c1; margin-bottom: 10px;\">Hey {receiver_name} 👋</h2>
                <p style=\"color: #7a4f91; font-size: 15px;\">You have a new message from <strong>{sender_name}</strong> 💌</p>
                <a href=\"{redirect_link}\" style=\"display: inline-block; margin-top: 20px; padding: 12px 24px; background-color: #d8b4e2; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.1);\">
                  Open Chat 💬
                </a>
              </td>
            </tr>
            <tr>
              <td style=\"padding: 20px; text-align: center; background-color: #fbe4f1;\">
                <p style=\"font-size: 12px; color: #9c6793;\">Stay connected on Harmony Match</p>
              </td>
            </tr>
          </table>
        </body>
        </html>
        """

        # Attach the HTML content
        msg.attach(MIMEText(html_content, "html"))

        # Connect to the SMTP server
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            server.sendmail(EMAIL_USER, receiver_email, msg.as_string())

        print(f"Email sent to {receiver_email}")
    except Exception as e:
        print(f"Failed to send email: {e}")
