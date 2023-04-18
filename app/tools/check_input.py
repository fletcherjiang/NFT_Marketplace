from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json

def check_input():
    print(222)
    config.before_request

    account = config.account

    IV, encrypted_data, salt = tools.get_encrydata('dataFile')
    decrypted_aes_key = tools.decryp_aes('encryptedAesKey')
    decrypted_data = tools.decrypt(decrypted_aes_key, encrypted_data, IV)
    data = json.loads(decrypted_data)
    username_new = data['username']
    hashPas_new = data['inputPasHash']
    print("hashPas_new",hashPas_new)
    result = account.select().where((account.username == username_new) & (account.hashpassword == hashPas_new))
    if result:
        return_dict = {"message": "Y", "id": "1"}
        print(return_dict)
        return return_dict
    else:
        return_dict = {"message": "N", "id": "0"}
        print(return_dict)
        return return_dict

    config.after_request