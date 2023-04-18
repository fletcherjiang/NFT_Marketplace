from base64 import b64decode
from flask import Flask, request, jsonify
from Cryptodome.Signature import PKCS1_v1_5
from Cryptodome.Hash import SHA1
from Cryptodome.PublicKey import RSA
from base64 import b64decode
from flask_cors import CORS
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization, hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.exceptions import InvalidSignature
import base64
public_key_pem ='''-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4HcUMt3iGNLVYtxSc0Oe
A9JjOe0GkneCWx+7iPwsyu2f3imIIcQUMwd27K+SuybvVnXTi8gnWc9EhqYWaBya
R8Zod+pirXYROWcDDUAAA61+k1mnC7htFl7mq8a/2meFHTZNAdGa6Mk9Lqcnq1mR
T8e4WlEa408ZdE1vQc3c/ApL0KvpO3h6gOoxuLVydHpvuFTnYg61eKBYRj4kQPcU
EmhWOtxPXpQyGUifYaYCPFzCBMhKh7IH9hs7Sgh4RcxHc+Wk9jdFtY2vFf2XvD4W
PGxqCv8+p2tmblEZPpXjKKOklCHgYCjVRHlo+7zDu7ItMU0jOXysxflD4k69EHa2
sQIDAQAB
-----END PUBLIC KEY-----'''

buyapp = Flask(__name__)
CORS(buyapp)

@buyapp.route('/buy', methods=['POST'])
def buy():
    data = request.get_json()
    signature = data.get('dataFile')
    originaldata = data.get('originaldata')
    #商品信息
    print(verify_signature(signature, originaldata))
    return jsonify ({"message":"Data received and decrypted successfully!"})

def verify_signature(signature_base64, original_data):
    public_key = serialization.load_pem_public_key(
        public_key_pem.encode(),
        backend=default_backend()
    )
    signature_bytes = b64decode(signature_base64)
    original_data_bytes = original_data.encode('utf-8')

    try:
        public_key.verify(
            signature_bytes,
            original_data_bytes,
            padding.PKCS1v15(),
            hashes.SHA256()
        )
        return True
    except InvalidSignature:
        return False

if __name__ =="__main__":
    buyapp.run(host='0.0.0.0', debug=True, port=8080, ssl_context=('fullchain.pem', 'privkey.key'))


