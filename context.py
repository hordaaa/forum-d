from model import Users
from hashlib import sha3_256

class ConnectDB:

    def __init__(self, database):
        self.database = database

    def __enter__(self):
        return self.database

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(exc_type)
        return 1


def get_hashed_password(password: str) -> str:
    return sha3_256(password.encode("utf-8")).hexdigest()


def is_login(username: str, password: str) -> bool:
    return bool(Users.query.filter_by(username=username, password=password).all())


def is_not_register_user(username: str) -> bool:
    return not (bool(Users.query.filter_by(username=username).all()))


def get_user_info(username: str) -> Users:
    return Users.query.filter_by(username=username).first()