from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField
from wtforms.validators import DataRequired, Length


class RegistrationForm(FlaskForm):
    username = StringField("username", validators=[DataRequired("Пустое поле"), Length(min=3, max=20, message="Username должен содержать от 3 до 20 символов")])
    password = PasswordField("password", validators=[DataRequired("Пустое поле"), Length(min=5, max=30, message="Пароль должен содержать от 5 до 70 символов")])
    name = StringField("name", validators=[DataRequired("Пустое поле"), Length(min=1, max=15, message="Имя должно содержать не более 15 символов")])
    surname = StringField("surname", validators=[DataRequired("Пустое поле"), Length(min=1, max=25, message="Фамилия должна содержать не более 25 символов")])
    registration = SubmitField("registration")


class LoginForm(FlaskForm):
    username = StringField("username", validators=[DataRequired(), Length(min=3, max=20)])
    password = PasswordField("password", validators=[DataRequired(), Length(min=5, max=30)])
    login = SubmitField("login")

