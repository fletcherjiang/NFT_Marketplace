# NFT_Marketplace

 *A Group Project of Computer Systems Security (COMP3
334) subject at [The Hong Kong Polytechnic University](https://www.polyu.edu.hk/), made by [JIANG Yiyang](https://github.com/fletcherjiang), [WANG lili]() and [XIONG Yifan](), 2023-06-18* 

## For Users
Visit the website [https://3334.imjyy.com/](https://3334.imjyy.com/) directly and use it without installation.

## For Developers
The minimum environment and system requirements for installation are as follows:

- Linux 4.0, CentOS 7.0, Windows 10
- Python 3.7

### Installation Steps

1. Download the original code file to the server
    ```sh
    git clone https://github.com/fletcherjiang/NFT_Marketplace
    cd NFT_Marketplace
    ```

2. Install the appropriate environment
    ```sh
    pip install -r requirement.txt
    ```

3. Go to the app directory and modify the content of `app.py`. If you run locally and on the server, you don't need to modify it, but you need to modify your own SSL certificate to replace your own.
    ```python
    vim app.py
    ```
    ```python
    config.app.run(host='0.0.0.0', debug=True, port=8080, ssl_context=('fullchain.pem', 'privkey.key'))
    ```

4. Change the database settings in `config.py`
    ```python
    vim config.py
    ```
    ```python
    app.config['DATABASE'] = {
        'engine': 'peewee.MySQLDatabase',
        'name': 'Your_database_Name',
        'user': 'Database_user_name',
        'password': '',
        'host': 'localhost',
        'port': 3306
    }
    ```

5. Run `app.py` and open https://127.0.0.1:8000 or your own URL with a browser.
    ```sh
    python app.py
    ```

