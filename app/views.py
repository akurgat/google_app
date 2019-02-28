from app import app
from flask import render_template

# Route to the google search page
@app.route('/google_page')
def google_page():
    return render_template('google_page.html')