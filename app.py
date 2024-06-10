from flask import Flask, render_template, url_for, request, redirect, flash, session
from forms import RegistrationForm, LoginForm, AddPostForm
from model import Users, Posts
from database import db
from context import ConnectDB, is_login, get_hashed_password, is_not_register_user, get_user_info
from flask_login import LoginManager, login_user, login_required
from userlogin import UserLogin


app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///forumd.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "sdfsfsdfsdfsd"

login_manager = LoginManager(app)
db.init_app(app)



@login_manager.user_loader
def loag_user(user_id):
    return UserLogin().fromDB(user_id)


@app.route('/addpost', methods=("POST", "GET"))
@login_required
def addpost():
    form = AddPostForm()

    print(form.validate_on_submit())
    if request.method == "POST":
        print(request.content_type)
        print(request.access_control_request_headers)
        print(request.form)
        if form.validate_on_submit():
            with ConnectDB(db) as _database:
                post = Posts(title=request.form["title"],
                             content=request.form["content"],
                             author=session.get("_user_id"),
                             stars_count=0,
                             url="/post/"+request.form["url"])
                _database.session.add(post)
                _database.session.flush()
                _database.session.commit()
            return redirect(url_for("homepage", user=session.get("_user_id")))
        flash("неверная форма")
    return render_template("addpost.html", form=form)


@app.route('/')
def index():
    posts = Posts.query.all()

    if session.get("_user_id"):
        return render_template("index.html", user=session.get("_user_id"), posts=posts)
    return render_template("index.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("index"))


@app.route('/starpage')
@login_required
def starpage():
    return render_template("starpage.html")



@app.route('/homepage/<string:user>')
@login_required
def homepage(user):
    if session.get("_user_id") == user:
        user = get_user_info(user)
        return render_template("homepage.html", user=user)
    return "nononon"



@app.route("/login", methods=("POST", "GET"))
def login():
    form = LoginForm()
    if request.method == "POST":
        if is_login(request.form["username"], get_hashed_password(request.form["password"])):
            login_user(UserLogin().create(request.form["username"]))
            return redirect(url_for("homepage", user=request.form["username"]))
        flash("Неверная пара логин/пароль")
    return render_template("login.html", form=form)








@app.route('/registration', methods=("POST", "GET"))
def registration():
    form = RegistrationForm()
    if request.method == "POST":
        if form.validate_on_submit() and is_not_register_user(request.form["username"]):
            with ConnectDB(db) as _database:
                user = Users(username=request.form["username"],
                             password=get_hashed_password(request.form["password"]),
                             name=request.form["name"],
                             surname=request.form["surname"])
                _database.session.add(user)
                _database.session.flush()
                _database.session.commit()
            return redirect(url_for("login"))
        flash("Пользователь с таким именем уже есть")
    return render_template("registration.html", form=form)


if __name__ == '__main__':

    app.run(debug=True)
