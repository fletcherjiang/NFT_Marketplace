from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import json
import tools
from collections import namedtuple

def getmoney():
    print("signIn_POST!!!")
    config.before_request

    account = config.account
    goods = config.goods

    data = request.get_json()
    getmoney_username = data['username']

    result_list = [(row.manei,row.fname,row.lname) for row
                   in account.select(account.manei,account.fname,account.lname).where(account.username == getmoney_username)]

    result_ip = [(row.user_ip) for row
                   in account.select(account.user_ip).where(account.username == getmoney_username)]

    my_result_ip = result_ip[0]

    # 使用namedtuples方法获取查询结果
    rows = list(goods.select(goods.goods_id, goods.goods_name, goods.goods_ip, goods.goods_prices).where(
        goods.owner_id == my_result_ip).namedtuples())

    # 将namedtuple转换为字典类型，并以goods_id作为key，goods_name作为value
    goods_dict = {row.goods_id: [row.goods_name, row.goods_ip, row.goods_prices] for row in rows}

    result = [result_list,goods_dict]
    print(result)
    return result

    config.after_request

if __name__ == "__main__":
    signIn_POST()




