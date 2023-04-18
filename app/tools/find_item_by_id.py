from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json

def find_item_by_id():
    print("find_item_by_id!!!")
    config.before_request

    goods = config.goods

    # IV, encrypted_data, salt = tools.get_encrydata('dataFile')
    # decrypted_aes_key = tools.decryp_aes('encryptedAesKey')
    # decrypted_data = tools.decrypt(decrypted_aes_key, encrypted_data, IV)
    # data = json.loads(decrypted_data)
    data = request.get_json()
    find_item_id = data['itemId']

    result_list = [(row.goods_name, row.goods_prices , row.goods_words,row.goods_ip,row.goods_id) for row
                   in goods.select(goods.goods_name, goods.goods_prices , goods.goods_words,goods.goods_ip,goods.goods_id).where(goods.goods_id == find_item_id)]

    return result_list
    config.after_request
