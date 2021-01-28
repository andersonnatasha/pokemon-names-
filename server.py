from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def run_app():
    """run application"""

    return render_template('/base.hmtl')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
