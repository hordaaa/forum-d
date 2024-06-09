from flask import Flask, render_template, url_for, request, redirect
from forms import RegistrationForm, LoginForm
from model import Users, Posts
from database import db
from context import ConnectDB, is_login


app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///forumd.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "sdfsfsdfsdfsd"

db.init_app(app)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/starpage')
def starpage():
    return render_template("starpage.html")


@app.route('/homepage/<string:user>')
def homepage(user):
    return render_template("homepage.html", user=user)



@app.route("/login", methods=("POST", "GET"))
def login():
    form = LoginForm()
    if request.method == "POST":
        if is_login(request.form["username"], request.form["password"]):
            return redirect(url_for("homepage", user=request.form["username"]))
    return render_template("login.html", form=form)

@app.route('/registration', methods=("POST", "GET"))
def registration():
    form = RegistrationForm()
    if request.method == "POST":
        if form.validate_on_submit():
            with ConnectDB(db) as _database:
                user = Users(username=request.form["username"],
                             password=request.form["password"],
                             name=request.form["name"],
                             surname=request.form["surname"])
                _database.session.add(user)
                _database.session.flush()
                _database.session.commit()
            return redirect(url_for("login"))

    return render_template("registration.html", form=form)


if __name__ == '__main__':

    app.run(debug=True)
