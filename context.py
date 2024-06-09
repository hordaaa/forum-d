from model import Users


class ConnectDB:

    def __init__(self, database):
        self.database = database

    def __enter__(self):
        return self.database

    def __exit__(self, exc_type, exc_val, exc_tb):
        return 1


def is_login(username: str, password: str) -> bool:
    return bool(Users.query.filter_by(username=username, password=password).all())