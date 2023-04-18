from flask import Flask, request, jsonify
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.backends import default_backend
import base64
from flask_cors import CORS
from Crypto.Cipher import AES

#从服务器获取数据
def get_encrydata(encrydataName):
    data = request.get_json()
    encrypted_data = data.get(encrydataName)
    salt = encrypted_data[:16]
    IV = encrypted_data[16:32]
    encrypted_data = encrypted_data[32:]
    return IV, encrypted_data, salt

#RSA私钥解密 加密后的AES密钥
def decryp_aes(aesFileName):
    data = request.get_json()
    encrypted_aes_key = data.get(aesFileName)
    with open("../MyKey/private_key.pem", "rb") as key_file:
        private_key = serialization.load_pem_private_key(
            key_file.read(),
            password=None,
            backend=default_backend()
        )
    #print(private_key)
    # Example encrypted AES key (use the one received from the client)
    #print(encrypted_aes_key)
    encrypted_aes_key = base64.b64decode(encrypted_aes_key)

    # Decrypt the AES key
    # Using PKCS1v15 as padding standard. Actually OAEP is better.
    decrypted_aes_key = private_key.decrypt(
        encrypted_aes_key,
        padding.PKCS1v15()
    ).decode()
    #print("Decrypted aes Key: ", decrypted_aes_key)
    return decrypted_aes_key


#解密后的AES解密加密后的文章
def decrypt(key, encrypted_data, IV):
    unpad = lambda s: s[:-ord(s[len(s) - 1:])]
    key = key.encode('utf-8')
    IV = IV.encode('utf-8')
    data = base64.b64decode(encrypted_data)
    cipher = AES.new(key, AES.MODE_CBC, IV)

    # unpad
    text_decrypted = unpad(cipher.decrypt(data))
    #print(text_decrypted)
    text_decrypted = text_decrypted.decode('utf8')
    # print(text_decrypted)
    return text_decrypted


