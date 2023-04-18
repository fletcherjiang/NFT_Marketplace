from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import json
import tools
from collections import namedtuple

def Get_all_item():
    print("signIn_POST!!!")
    config.before_request

    goods = config.goods

    # 使用namedtuples方法获取查询结果
    rows = list(goods.select(goods.goods_id, goods.goods_name,goods.goods_ip,goods.goods_prices).where(goods.is_selling == 1).namedtuples())

    # 将namedtuple转换为字典类型，并以goods_id作为key，goods_name作为value
    goods_dict = {row.goods_id: [row.goods_name, row.goods_ip, row.goods_prices] for row in rows}

    # key:value value是list 0:name 1:src 2:prices
    # 输出字典
    print(goods_dict)
    # print(goods_dict[1][0])
    # print(goods_dict[1][1])
    # print(goods_dict[1][2])

    return goods_dict

    config.after_request

if __name__ == "__main__":
    signIn_POST()




