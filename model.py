from database import db

class Users(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=True)
    surname = db.Column(db.String(25), nullable=True)
    username = db.Column(db.String, nullable=True)
    password = db.Column(db.String, nullable=True)
    avatar = db.Column(db.LargeBinary)
    bio = db.Column(db.String(200))



class Posts(db.Model):
    __tablename__ = "posts"

    url = db.Column(db.String(30))
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=True)
    content = db.Column(db.Text, nullable=True)
    stars_count = db.Column(db.Integer, default=0)

    author = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __repr__(self):
        return f"{self.title} {self.content}"






