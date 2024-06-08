from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/starpage')
def starpage():
    return render_template("starpage.html")


@app.route('/homepage')
def homepage():
    return render_template("homepage.html")


@app.route('/registration')
def registration():
    return render_template("registration.html")


@app.route("/autorisation")
def autorisation():
    return render_template("autorisation.html")


@app.route("/<int:pos>")
def post(pos):
    return str(pos)


if __name__ == '__main__':
    app.run(debug=True)
