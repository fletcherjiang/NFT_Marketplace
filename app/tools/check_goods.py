from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json

def check_goods():
    print("check_goods!!!")
    config.before_request

    goods = config.goods

    IV, encrypted_data, salt = tools.get_encrydata('dataFile')
    decrypted_aes_key = tools.decryp_aes('encryptedAesKey')
    decrypted_data = tools.decrypt(decrypted_aes_key, encrypted_data, IV)
    data = json.loads(decrypted_data)

    check_user_ip = data['user_ip']

    result_list = [(row.goods_name, row.goods_price , row.goods_words) for row
                   in goods.select(goods.goods_name, goods.goods_price , goods.goods_words).where(goods.owner_id == check_user_ip)]

    print(result_list)
    return_dict = {"message": result_list, "id": 1}
    return return_dict
    config.after_request
