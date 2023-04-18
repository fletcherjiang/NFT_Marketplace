from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from flask import request, jsonify
import config
import tools
import json
import random

def login():
    config.before_request

    account = config.account

    IV, encrypted_data, salt = tools.get_encrydata('dataFile')
    decrypted_aes_key = tools.decryp_aes('encryptedAesKey')
    decrypted_data = tools.decrypt(decrypted_aes_key, encrypted_data, IV)
    data = json.loads(decrypted_data)
    username_new = data['username']
    hashPas_new = data['hashPas']
    fname_new = data['fname']
    lname_new = data['lname']
    email_new = data['email']
    PK_new = data['publicKeyPem']

    db_username = account.select().where(account.username == username_new)
    if db_username:
        return_dict = {"message": "This username has already been registered.","id": "0"}
        return return_dict
    db_email = account.select().where(account.email == email_new)
    if db_email:
        return_dict = {"message": "This email has already been registered.","id": "0"}
        return return_dict

    hex_string = "{:010x}".format(random.randrange(16 ** 10))

    new_user = account(user_ip=hex_string,
                       fname=fname_new,
                       lname=lname_new,
                       username=username_new,
                       email=email_new,
                       salt=salt,
                       hashpassword=hashPas_new,
                       PK = PK_new,
                       manei = 100000
                       )

    if new_user.save():
        return_dict = {"message": "Successful registration!","id": "1"}
        return return_dict
    else:
        return_dict = {"message": "Failed to save data to database.","id": "0"}
        return return_dict
    config.after_request

