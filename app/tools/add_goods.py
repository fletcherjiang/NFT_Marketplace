from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json
import random

def add_goods():
    print("signature!!!")
    config.before_request

    goods = config.goods
    account = config.account

    IV, encrypted_data = tools.get_encrydata_nosalt('dataFile')
    decrypted_aes_key = tools.decryp_aes('encryptedAesKey')
    decrypted_data = tools.decrypt(decrypted_aes_key, encrypted_data, IV)
    data = json.loads(decrypted_data)

    my_list = ["images/items/1.jpg",
               "images/items/2.jpg",
               "images/items/3.jpg",
               "images/items/4.jpg",
               "images/items/5.jpg",
               "images/items/6.jpg",
               "images/items/7.jpg",
               "images/items/8.jpg",
               "images/items/9.jpg",
               "images/items/10.jpg",
               "images/items/11.jpg",
               "images/items/12.jpg",
               "images/items/13.jpg",
               "images/items/14.jpg",
               "images/items/15.jpg",
               "images/items/16.jpg",
               "images/items/17.jpg",
               "images/items/18.jpg",
               "images/items/19.jpg",
               "images/items/20.jpg",]

    src = random.choice(my_list)

    add_username = data['username']
    add_goods_name= data['iname']
    add_goods_price = data['iprice']
    add_goods_words = data['idesc']
    add_goods_ip = src
    print("add data",data)
    print("add_goods_price",add_goods_price)

    # result = goods.select(goods.goods_ip).where(goods.goods_ip == add_goods_ip)
    # if result:
    #     query = goods.update(is_selling=1).where(goods.goods_ip == add_goods_ip)
    #     if query.execute():
    #         print("goods.update:1")
    #         return_dict = {"message": "new_goods Successful!", "id": "1"}
    #         return return_dict
    #     else:
    #         return_dict = {"message": "Failed to save data to database.", "id": "0"}
    #         return return_dict
    # else:
    result_list = [(row.user_ip) for row
                   in account.select(account.user_ip).where(account.username == add_username)]

    add_owner_ip = result_list[0]

    new_goods = goods(goods_ip=add_goods_ip,
                      goods_name=add_goods_name,
                      goods_prices=add_goods_price,
                      goods_words=add_goods_words,
                      owner_id=add_owner_ip,
                      is_selling=1
                      )
    print(new_goods)
    if new_goods.save():
        return_dict = {"message": "new_goods Successful!", "id": "1"}
        return return_dict
    else:
        return_dict = {"message": "Failed to save data to database.", "id": "0"}
        return return_dict


    config.after_request
