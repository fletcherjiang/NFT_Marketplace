from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json

@config.app.route('/reg', methods=['POST'])
def My_Login():
    var1 = tools.login()
    return jsonify(var1)

@config.app.route('/check_input', methods=['POST'])
def check_input():
    var1 = tools.check_input()
    return jsonify(var1)

@config.app.route('/log', methods=['POST'])
def My_SignIn():
    print("000")
    var1 = tools.signIn_POST()
    return jsonify(var1)

@config.app.route('/buy', methods=['POST'])
def buy():
    var1 = tools.signature()
    return jsonify(var1)

@config.app.route('/explore_item', methods=['GET'])
def explore_item():
    var1 = tools.Get_all_item()
    return jsonify(var1)

@config.app.route('/find_item_by_id', methods=['POST'])
def my_find_item_by_id():
    var1 = tools.find_item_by_id()
    return jsonify(var1)

@config.app.route('/getmoney', methods=['POST'])
def my_getmoney():
    var1 = tools.getmoney()
    return jsonify(var1)


@config.app.route('/add_goods', methods=['POST'])
def my_add_goods():
    var1 = tools.add_goods()
    return jsonify(var1)



if __name__ == '__main__':
    config.app.run(host='0.0.0.0', debug=True, port=8080, ssl_context=('fullchain.pem', 'privkey.key'))
