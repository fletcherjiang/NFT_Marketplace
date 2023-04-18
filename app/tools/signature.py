from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json
import random
import hashlib
import time
import multiprocessing
import datetime

random = random.SystemRandom()

def hash1(ID,currentTime,nonce):
    message = str(ID) + str(currentTime) + str(nonce)
    h = hashlib.sha256(message.encode()).hexdigest()
    return h

def miner(str):
    h = ""
    leadingZero = "00000"

    while not h.startswith(leadingZero):
        nonce = random.randint(0, 2147483647)
        currentTime = int(time.time() * 1000)
        h = hash1(str, currentTime, nonce)
        miner_dict={"hash":h,"currentTime":currentTime,"nonce":nonce}
    return miner_dict


def signature():
    print("signature!!!")
    config.before_request

    account = config.account
    goods = config.goods
    blocks = config.blocks

    IV, encrypted_data = tools.get_encrydata_nosalt('dataFile')

    decrypted_aes_key = tools.decryp_aes('encryptedAesKey')
    decrypted_data = tools.decrypt(decrypted_aes_key, encrypted_data, IV)
    data = json.loads(decrypted_data)
    data_dic = data
    signature = data_dic['sign']
    product_id = data_dic['productId']
    userid = data_dic['username']
    originaldata = "{\"productId\":"+"\""+product_id+"\""+",\"username\":"+"\""+userid+"\""+"}"
    # print("Originaldata:",originaldata)
    # print("Signature:",signature)

    account_result_byname = [(row.PK) for row
                         in account.select(account.PK).where(account.username == userid)]

    print(account_result_byname)
    PK = account_result_byname[0]
    print(PK)
    if tools.verify_signature(signature, originaldata,PK):
        pass
    else:
        return_dict = {"message": "no", "id": 0}
        return return_dict
    print("签名核验结果：一眼丁真")

    miner_dict = miner(originaldata)

    originaldata = json.loads(originaldata)
    print(originaldata)
    buy_user_name = originaldata['username']
    buy_goods_id = originaldata['productId']

    sell_goods_result = [(row.goods_prices,row.owner_id) for row
                   in goods.select(goods.goods_prices,goods.owner_id).where(goods.goods_id == buy_goods_id)]
    # print(sell_goods_result)
    # print(sell_goods_result[0])
    print(sell_goods_result)
    sell_goods_prices=sell_goods_result[0][0]
    sell_owner_id=sell_goods_result[0][1]
    print("sell_owner_id",sell_owner_id)
    # print(sell_goods_prices)
    # print(type(sell_goods_prices))

    buy_user_info = [(row.manei,row.user_ip) for row
                         in account.select(account.manei,account.user_ip).where(account.username == buy_user_name)]
    buy_user_manei = buy_user_info[0][0]
    buy_user_ip = buy_user_info[0][1]

    if buy_user_manei < sell_goods_prices:
        return_dict = {"message": "manei don`t enough","id":0}
        return return_dict
    else:
        sell_user_info = [(row.manei) for row
                         in account.select(account.manei).where(account.user_ip == sell_owner_id)]

        sell_user_manei = sell_user_info[0]
        print(sell_user_manei)
        sell_user_manei = sell_user_manei +sell_goods_prices
        buy_user_manei = buy_user_manei - sell_goods_prices

        query = account.update(manei=sell_user_manei).where(account.user_ip == sell_owner_id)
        if query.execute() :
            print("account.update:sell_user_manei")

        query = account.update(manei=buy_user_manei).where(account.user_ip == buy_user_ip)
        if query.execute() :
            print("account.update:buy_user_manei")

        query = goods.update(owner_id=buy_user_ip).where(goods.goods_id == buy_goods_id)
        if query.execute() :
            print("goods.update:buy_user_ip")

        query = goods.update(is_selling=0).where(goods.goods_id == buy_goods_id)
        if query.execute():
            print("goods.is_selling:0")


        last_row = blocks.select(blocks.each_block_hash,blocks.each_block_info).order_by(blocks.id.desc()).first()

        currentTime = int(time.time() * 1000) / 1000.0  # 转换为浮点数
        formattedTime = datetime.datetime.fromtimestamp(currentTime).strftime('%Y-%m-%d %H:%M:%S')

        block_dict = {"goods_id":buy_goods_id,"buy_user_ip":buy_user_ip,
                      "sell_owner_id":sell_owner_id,"sell_goods_prices":sell_goods_prices,"tradeTime":formattedTime}

        if last_row:

            last_block_hash = last_row.each_block_hash
            # print(last_block_hash)
            # print(type(last_block_hash))
            last_block_info = last_row.each_block_info
            # print(last_block_info)
            # print(type(last_block_info))

            last_block_info = eval(last_block_info)
            # print(type(last_block_info))

            last_block_info_to_str = last_block_hash
            for value in last_block_info.values():
                value_str = str(value)
                last_block_info_to_str += value_str

            message = last_block_info_to_str
            block_hash = hashlib.sha256(message.encode()).hexdigest()

            new_block = blocks(each_block_hash=block_hash,
                               each_block_info=block_dict
                               )

            if new_block.save():
                return_dict = {"message": "success", "id": 1}
                print(return_dict)
                return return_dict
            else:
                return_dict = {"message": "Failed to save data to database.", "id": 0}
                print(return_dict)
                return return_dict

        else:
            message = "20093979D"
            block_hash = hashlib.sha256(message.encode()).hexdigest()

            new_block = blocks(each_block_hash = block_hash,
                               each_block_info = block_dict
                               )

            if new_block.save():
                return_dict = {"message": "success", "id": 1}
                print(return_dict)

                return return_dict
            else:
                return_dict = {"message": "Failed to save data to database.", "id": 0}
                print(return_dict)

                return return_dict



    config.after_request