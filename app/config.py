from flask import Flask,session
from flask_session import Session
from flask_cors import CORS
from peewee import *
import pymysql
import config

pymysql.install_as_MySQLdb()

# 创建 Flask 应用实例
app = Flask(__name__)
CORS(app)
app.config['SESSION_TYPE'] = 'sessionStorage'
Session(app)

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

class account(Model):
    user_id = AutoField()
    user_ip = CharField(max_length=11)
    fname = CharField(max_length=20)
    lname = CharField(max_length=20)
    username = CharField(max_length=20)
    email = CharField(max_length=20)
    salt = CharField(max_length=16)
    hashpassword = CharField(max_length=64)
    PK = CharField(max_length=600)
    manei = FloatField()

    class Meta:
        database = db
        db_table = 'account'



class goods(Model):
    goods_id = AutoField()
    goods_ip = CharField(max_length=50)
    goods_name = CharField(max_length=20)
    goods_prices = IntegerField()
    goods_words = CharField(max_length=2000)
    owner_id = CharField(max_length=11)
    is_selling = BooleanField()


    class Meta:
        database = db
        db_table = 'goods'

class blocks(Model):
    id = AutoField()
    each_block_hash = CharField(max_length=257)
    each_block_info = CharField(max_length=200)

    class Meta:
        database = db
        db_table = 'blocks'







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