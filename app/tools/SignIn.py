from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json

def signIn_POST():
    print("我来啦!!!")
    config.before_request

    account = config.account

    IV, encrypted_data, salt = tools.get_encrydata('dataFile')
    decrypted_aes_key = tools.decryp_aes('encryptedAesKey')
    decrypted_data = tools.decrypt(decrypted_aes_key, encrypted_data, IV)
    data = json.loads(decrypted_data)
    new_username = data['username']
    print("username,geted")



    account_salt = account.select(account.salt).where(account.username == new_username).scalar()
    print("account_salt:",account_salt)
    hashpassword = account.select(account.hashpassword).where(account.username == new_username).scalar()
    print("hashpassword",hashpassword)
    if account_salt is not None:

        return_dict = {"salt": account_salt}
        print("return_dict:", return_dict)
        return return_dict
    else:
        return_dict = {"salt":None}
        return return_dict

    config.after_request


