from base64 import b64decode
from Cryptodome.Signature import PKCS1_v1_5
from Cryptodome.Hash import SHA1
from Cryptodome.PublicKey import RSA
from base64 import b64decode
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization, hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.exceptions import InvalidSignature
import base64


def verify_signature(signature_base64, original_data,public_key_pem):

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
