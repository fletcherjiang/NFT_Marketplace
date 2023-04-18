from flask import Flask
from flask_cors import CORS
from peewee import MySQLDatabase

# 创建 Flask 应用实例
app = Flask(__name__)
CORS(app)

# 配置 peewee 数据库连接
app.config['DATABASE'] = {
    'engine': 'peewee.MySQLDatabase',
    'name': '3334_imjyy_com',
    'user': '3334_imjyy_com',
    'password': 'StzBesh7Ls8ey8yX',
    'host': 'localhost',
    'port': 3306
}

# 创建 peewee 数据库连接
db = MySQLDatabase(app.config['DATABASE']['name'],
                         user=app.config['DATABASE']['user'],
                         password=app.config['DATABASE']['password'],
                         host=app.config['DATABASE']['host'],
                         port=app.config['DATABASE']['port'])



@app.before_request
def before_request():
    if db.connect():
        print('数据库连接成功！')
    else:
        print('数据库连接失败！')

@app.after_request
def after_request(response):
    db.close()
    return response