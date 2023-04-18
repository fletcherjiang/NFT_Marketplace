from flask import Flask, request, jsonify
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.backends import default_backend
import base64
from flask_cors import CORS
from Cryptodome.Cipher import AES


app = Flask(__name__)
CORS(app)


def decrypt(key, encrypted_data, IV):
    unpad = lambda s: s[:-ord(s[len(s) - 1:])]
    key = key.encode('utf-8')
    IV = IV.encode('utf-8')
    data = base64.b64decode(encrypted_data)
    cipher = AES.new(key, AES.MODE_CBC, IV)

    # unpad
    text_decrypted = unpad(cipher.decrypt(data))
    print(text_decrypted)
    text_decrypted = text_decrypted.decode('utf-8')
    # print(text_decrypted)
    return text_decrypted

@app.route('/reg', methods=['POST'])
def reg():
    data = request.get_json()
    encrypted_data = data.get('dataFile')
    encrypted_aes_key = data.get('encryptedAesKey')
    salt = encrypted_data[:16]
    IV = encrypted_data[16:32]
    encrypted_data = encrypted_data[32:]
    print("salt:",salt)
    print("IV: ", IV)
    print("encrypted data: ", encrypted_data)
    # Decrypt the encrypted AES key and data here using your RSA private key
    # Load your RSA private key (replace with your own private key file)
    with open("private_key.pem", "rb") as key_file:
        private_key = serialization.load_pem_private_key(
            key_file.read(),
            password=None,
            backend=default_backend()
        )

    # Example encrypted AES key (use the one received from the client)
    encrypted_aes_key = base64.b64decode(encrypted_aes_key)

    # Decrypt the AES key
    # Using PKCS1v15 as padding standard. Actually OAEP is better.
    decrypted_aes_key = private_key.decrypt(
        encrypted_aes_key,
        padding.PKCS1v15()
    ).decode()
    print("Decrypted aes Key: ", decrypted_aes_key)

    # Get the decrypted data
    decrypted_data = decrypt(decrypted_aes_key, encrypted_data, IV)

    # Process the decrypted data (username and password) here
    print("Decrypted: ", decrypted_data)
    return jsonify({"message": "Data received and decrypted successfully!"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=8080, ssl_context='adhoc')
