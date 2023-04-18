 function aesEncrypt(str, aesKey, iv) {
    var key = CryptoJS.enc.Utf8.parse(aesKey);
    var srcs = CryptoJS.enc.Utf8.parse(str);
    var iv = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: iv});
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

function randomHex(n) {
    let result = "";
    const characters = "0123456789abcdef";
    const charactersLength = characters.length;

    for (let i = 0; i < n; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function hashPassword(password, salt) {
    const passwordWithSalt = password + salt;
    const hashedPassword = CryptoJS.SHA256(passwordWithSalt).toString();
    return hashedPassword;
}

//log in
function encryptAndSubmit() {
    console.log('encryptAndSubmit function called');
    // RSA public key
    const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4HcUMt3iGNLVYtxSc0Oe\n" +
        "A9JjOe0GkneCWx+7iPwsyu2f3imIIcQUMwd27K+SuybvVnXTi8gnWc9EhqYWaBya\n" +
        "R8Zod+pirXYROWcDDUAAA61+k1mnC7htFl7mq8a/2meFHTZNAdGa6Mk9Lqcnq1mR\n" +
        "T8e4WlEa408ZdE1vQc3c/ApL0KvpO3h6gOoxuLVydHpvuFTnYg61eKBYRj4kQPcU\n" +
        "EmhWOtxPXpQyGUifYaYCPFzCBMhKh7IH9hs7Sgh4RcxHc+Wk9jdFtY2vFf2XvD4W\n" +
        "PGxqCv8+p2tmblEZPpXjKKOklCHgYCjVRHlo+7zDu7ItMU0jOXysxflD4k69EHa2\n" +
        "sQIDAQAB\n-----END PUBLIC KEY-----";

    // Generate random AES key
    //const aesKey = CryptoJS.lib.WordArray.random(256 / 8).toString(CryptoJS.enc.Hex);
    const aesKey = randomHex(16);
    const randIV = randomHex(16);
    const salt = randomHex(16);
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const hashPas = hashPassword(password, salt);



     // Generate an RSA key pair
    const keys = forge.pki.rsa.generateKeyPair(2048);

    // Convert the private key to PEM format
    const privateKeyPem = forge.pki.privateKeyToPem(keys.privateKey);

    // Convert the public key to PEM format
    const publicKeyPem = forge.pki.publicKeyToPem(keys.publicKey);


    // Create a download link for the private key file

    // alert(12312323);




    const data = JSON.stringify({ username, hashPas, fname, lname, email,publicKeyPem });

    //const encryptedData = CryptoJS.AES.encrypt(data, aesKey).toString();
    const encryptedData = aesEncrypt(data, aesKey, randIV);
    //Encrypt AES key using RSA
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
    const encryptedAesKey = jsEncrypt.encrypt(aesKey);
    // Send encrypted data and encrypted AES key to the server
    console.log("aesKey",aesKey);
    console.log("IV", randIV);
    const dataFile = salt + randIV + encryptedData;
    regsendDataToServer(dataFile, encryptedAesKey,privateKeyPem);

    // // Remove the download link after the download has started
    // setTimeout(() => {
    //     document.body.removeChild(downloadLink);
    //     URL.revokeObjectURL(downloadLink.href);
    //     }, 0);



    // Prevent form submission
    return false;
}


function loginencryptAndSubmit() {

    try{

      console.log('encryptAndSubmit function called');
      // RSA public key
      const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4HcUMt3iGNLVYtxSc0Oe\n" +
          "A9JjOe0GkneCWx+7iPwsyu2f3imIIcQUMwd27K+SuybvVnXTi8gnWc9EhqYWaBya\n" +
          "R8Zod+pirXYROWcDDUAAA61+k1mnC7htFl7mq8a/2meFHTZNAdGa6Mk9Lqcnq1mR\n" +
          "T8e4WlEa408ZdE1vQc3c/ApL0KvpO3h6gOoxuLVydHpvuFTnYg61eKBYRj4kQPcU\n" +
          "EmhWOtxPXpQyGUifYaYCPFzCBMhKh7IH9hs7Sgh4RcxHc+Wk9jdFtY2vFf2XvD4W\n" +
          "PGxqCv8+p2tmblEZPpXjKKOklCHgYCjVRHlo+7zDu7ItMU0jOXysxflD4k69EHa2\n" +
          "sQIDAQAB\n-----END PUBLIC KEY-----";

      // Generate random AES key
      //const aesKey = CryptoJS.lib.WordArray.random(256 / 8).toString(CryptoJS.enc.Hex);
      const aesKey = randomHex(16);
      const randIV = randomHex(16);
      const salt_0 = randomHex(16);
      // Encrypt data using AES

      const username = document.getElementById("username2").value;
      const inputPas = document.getElementById("password2").value;
// zdaoche
      const login_now = new Date();

      localStorage.setItem('username', username);
      localStorage.setItem('localtime',login_now);

      // alert(localStorage.getItem('username') );
      // alert(localStorage.getItem('localtime') );

      const hashPas = hashPassword(inputPas, salt_0);
      const data = JSON.stringify({ username,hashPas });
      //const encryptedData = CryptoJS.AES.encrypt(data, aesKey).toString();
      const encryptedData = aesEncrypt(data, aesKey, randIV);
      //Encrypt AES key using RSA
      const jsEncrypt = new JSEncrypt();
      jsEncrypt.setPublicKey(publicKey);
      const encryptedAesKey = jsEncrypt.encrypt(aesKey);
      // Send encrypted data and encrypted AES key to the server
      console.log("aesKey",aesKey);
      console.log("IV", randIV);

      const dataFile = salt_0 + randIV + encryptedData;
      //alert("The data " + dataFile);


      const salt_new= logsendDataToServer(username,jsEncrypt,inputPas,dataFile, encryptedAesKey);
      //Prevent form submission
      return false;


    } catch (error) {
        console.error("Error in loginencryptAndSubmit:", error);
        alert("Error occurred in loginencryptAndSubmit function.");
    }



}


function regsendDataToServer(dataFile, encryptedAesKey,privateKeyPem) {
    // alert(12312312312312)
    // Implement this function to send the encrypted data and encrypted AES key to your server
    console.log("Encrypted data:", dataFile);
    console.log("Encrypted AES key:", encryptedAesKey);
    // Implement this function to send the encrypted data and encrypted AES key to your server
    fetch("https://3334.imjyy.com:8080/reg", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ dataFile, encryptedAesKey })
    }).then(response => {
        console.log("Status:", response.status, "Status Text:", response.statusText);
        if (response.ok) {
            //alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        return response.json(); // Add this line
    }).then((data) => {
      console.log("Data received from server:", data);
      //alert(data);
      displayServerResponse(data,privateKeyPem);
    }).catch(error => {
        console.error("Error:", error);
        alert("Error sending data to the server.");
    });

}


function postLogin(dataFile, encryptedAesKey) {
    // Implement this function to send the encrypted data and encrypted AES key to your server
    console.log("Encrypted data:", dataFile);
    console.log("Encrypted AES key:", encryptedAesKey);
    // Implement this function to send the encrypted data and encrypted AES key to your server
    fetch("https://3334.imjyy.com:8080/check_input", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ dataFile, encryptedAesKey })
    }).then(response => {
        console.log("Status:", response.status, "Status Text:", response.statusText);
        if (response.ok) {
            //alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        return response.json(); // Add this line
    }).then((data) => {
      console.log("Data received from server:", data);
      passwordCheck(data);
      const salt = data.salt


    }).catch(error => {
        console.error("Error:", error);
        alert("Error postLogin.");
    });
}

async function logsendDataToServer(username,jsEncrypt,inputPas,dataFile, encryptedAesKey) {
  try {
    console.log("Encrypted data:", dataFile);
    console.log("Encrypted AES key:", encryptedAesKey);
    const response = await fetch("https://3334.imjyy.com:8080/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ dataFile, encryptedAesKey })
    });
    console.log("Status:", response.status, "Status Text:", response.statusText);
    if (response.ok) {
      //alert("logsendDataToServer response successfully!");
    } else {
      alert("Error logsendDataToServer response.");
    }
    const data = await response.json();
    console.log("Data received from server:", data);
    //alert("data.salt: " + data.salt);
    const salt_new_0 = data.salt;
    //alert("Slat is logsendDataToServer " + salt_new_0);
    //alert("salt_new_0 " + salt_new_0);
    logsendDataToServer_step2(username,jsEncrypt,inputPas,salt_new_0)


  } catch (error) {
    console.error("Error:", error);
    //alert("logsendDataToServer error.");
    return null; // or some other default value
  }
}

function logsendDataToServer_step2(username,jsEncrypt,inputPas,salt_new){
    console.log("salt_new data:", salt_new);
    //alert("Slat is 第1 loginencryptAndSubmit次 " + salt_new);

    console.log("salt_new data2:", salt_new);

    const inputaesKey = randomHex(16);
    const randIV2 = randomHex(16);
    //const encryptedData = CryptoJS.AES.encrypt(data, aesKey).toString();
    const inputPasHash = hashPassword(inputPas, salt_new);
    const inputdata = JSON.stringify({username, inputPasHash});
    const encryptedData_2 = aesEncrypt(inputdata, inputaesKey, randIV2);
    //Encrypt AES key using RSA
    const encryptedInputAesKey = jsEncrypt.encrypt(inputaesKey);

    // Send encrypted data and encrypted AES key to the server
    //alert("Slat is 第2 loginencryptAndSubmit次 " + salt_new);
    const saltFile = salt_new + randIV2 + encryptedData_2;
    postLogin(saltFile,encryptedInputAesKey)
}



function displayServerResponse(data,privateKeyPem) {
  const serverResponseDiv = document.getElementById("serverResponse");
  const message = data.message;
  const id = data.id;
  const jsonData = JSON.stringify(data.data, null, 2);

  if (id == 1) {
      // Create a Blob from the private key
    const privateKeyBlob = new Blob([privateKeyPem], {type: 'application/x-pem-file'});
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(privateKeyBlob);
    downloadLink.download = 'private_key.pem';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    // Remove the download link after the download has started
    setTimeout(() => {
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
        }, 0);
    serverResponseDiv.innerHTML = `
      <p style = "color: green">${message}</p>
      `;
    window.location.href = "index.php";
  } else {

    serverResponseDiv.innerHTML = `
      <p>${message}</p>
    `;

  }

}


function passwordCheck(data){
  const serverResponseDiv = document.getElementById("serverResponse_pwd");
  const message = data.message;
  const jsonData = JSON.stringify(data.data, null, 2);


  if (message == 'Y') {
    serverResponseDiv.innerHTML = `
      <p style = "color: green">Login successfully</p>
      `;
    window.location.href = "dashboard.html";
  } else {

    serverResponseDiv.innerHTML = `
      <p style = "color: #b40e0e">Password or username is wrong</p>
    `;

}


}

function signTransaction() {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = `
      <p style = "color: green">Proccesing, please wait....</p>
      `;

    const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4HcUMt3iGNLVYtxSc0Oe\n" +
        "A9JjOe0GkneCWx+7iPwsyu2f3imIIcQUMwd27K+SuybvVnXTi8gnWc9EhqYWaBya\n" +
        "R8Zod+pirXYROWcDDUAAA61+k1mnC7htFl7mq8a/2meFHTZNAdGa6Mk9Lqcnq1mR\n" +
        "T8e4WlEa408ZdE1vQc3c/ApL0KvpO3h6gOoxuLVydHpvuFTnYg61eKBYRj4kQPcU\n" +
        "EmhWOtxPXpQyGUifYaYCPFzCBMhKh7IH9hs7Sgh4RcxHc+Wk9jdFtY2vFf2XvD4W\n" +
        "PGxqCv8+p2tmblEZPpXjKKOklCHgYCjVRHlo+7zDu7ItMU0jOXysxflD4k69EHa2\n" +
        "sQIDAQAB\n-----END PUBLIC KEY-----";
    //alert("我来啦！！");
    const aesKey = randomHex(16);
    const randIV = randomHex(16);

    const username = localStorage.getItem('username');
    const sk = document.getElementById("sk").value;
    const productId = getQueryParam("item_id");
    // 将私钥从PEM格式转换为CryptoKey对象
    var data = JSON.stringify({productId,username});
    // alert("my"+data);
    try{
        // 创建 Signature 对象
        let signature=new KJUR.crypto.Signature({alg:"SHA256withRSA",prvkeypem:sk});    //!这里指定 私钥 pem!
        signature.updateString(data);
        let a = signature.sign();
        var sign = hextob64(a);
    }catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
    const buydata = JSON.stringify({ username, productId,sign });
    const encryptedData = aesEncrypt(buydata, aesKey, randIV);
    //Encrypt AES key using RSA
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
    var encryptedAesKey = jsEncrypt.encrypt(aesKey);
    // Send encrypted data and encrypted AES key to the server
    console.log("aesKey",aesKey);
    console.log("IV", randIV);
    const dataFile =  randIV + encryptedData;

    sendSignatureToServer(dataFile, encryptedAesKey);
    return false;
}

async function sendSignatureToServer(dataFile, encryptedAesKey) {
    console.log("Encrypted data:", 1);
    //alert("11111111");
    try {
        const response = await fetch("https://3334.imjyy.com:8080/buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ dataFile, encryptedAesKey })
        });
        if (response.ok) {
            //alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        const data = await response.json();
        displaybuycomplete(data);
    } catch (error) {
        console.error("Error:", error);
        alert("Error sending data to the server.");
    }
    console.log("Encrypted data:", dataFile);
}

function compare_time(){
    const login_now_last = new Date(localStorage.getItem('localtime'));
    const login_now_new = new Date();

    const diff = login_now_new.getTime() - login_now_last.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    if (diffInDays < 1) {
        console.log('less 1 day');
        return true;
    } else {
        console.log('more than 1 day');
        return false;
    }

}

function legalogin(legalogin_user){
    if (localStorage.getItem('username') == null){
        window.location.href="index.php";
    }else if (localStorage.getItem('username') == undefined){
        window.location.href="index.php";
    }else if (compare_time()) {
        document.getElementById("main-wrapper").style.display = "block";
    }else {
        window.location.href="index.php";
    }
}

function logout(){
    localStorage.clear();
    window.location.href="index.php";
}

// explore, to get item list
async function my_explore() {
    try {
        const response = await fetch("https://3334.imjyy.com:8080/explore_item");
        const data = await response.json();
        console.log(data);
        displayitem(data);
        addBuyButtonListeners();
        //alert(data)
    } catch (error) {
        console.error(error);
    }
}

async function my_item() {
  const username = localStorage.getItem('username');
try {
      const response = await fetch("https://3334.imjyy.com:8080/getmoney", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({username})
      });
      if (response.ok) {
          //alert("Data sent to the server successfully!");
      } else {
          alert("Error sending data to the server.");
      }
      const data = await response.json();
      const serverResponseDiv = document.getElementById("totalitems");
      for (const key in data[1]) {
          // alert(key + ": " + data[key]);
          console.log(key + ": " + data[key]);
          // const name=data[key][0];
          // const img=data[key][1];
          // const price=data[key][2];
          serverResponseDiv.innerHTML += `
          <div class="col-xl-3 col-lg-6 col-md-6">
               <div class="card items" data-item-id="${key}">
                    <div class="card-body">
                        <div class="items-img position-relative">
                                <img src="${data[1][key][1]}" class="img-fluid rounded mb-3" alt=""/>
                                    <a href="#categories">
                                        <img src="images/avatar/1.png" class="creator" width="50" height="50" alt=""/>
                                    </a>
                        </div>

                     <a href="#">
                          <h4 class="card-title">${data[1][key][0]}</h4>
                     </a>
                      <p></p>
                    <div class="d-flex justify-content-between">
                            <div class="text-start">
                                <p class="mb-2">Price</p>
                       </div>
            <div class="text-end">
              <p class="mb-2">
                <strong class="text-primary">${data[1][key][2]} SAR</strong>
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>`

      }

  } catch (error) {
      console.error("Error:", error);
      alert("Error sending data to the server.");
  }
}

function displayitem(data){
  const serverResponseDiv = document.getElementById("totalitems");
  for (const key in data) {
      // alert(key + ": " + data[key]);
      console.log(key + ": " + data[key]);
      // const name=data[key][0];
      // const img=data[key][1];
      // const price=data[key][2];
      serverResponseDiv.innerHTML += `
      <div class="col-xl-3 col-lg-6 col-md-6">
           <div class="card items" data-item-id="${key}">
                <div class="card-body">
                    <div class="items-img position-relative">
                            <img src="${data[key][1]}" class="img-fluid rounded mb-3" alt=""/>
                                <a href="#categories">
                                    <img src="images/avatar/1.png" class="creator" width="50" height="50" alt=""/>
                                </a>
                    </div>

                 <a href="#">
                      <h4 class="card-title">${data[key][0]}</h4>
                 </a>
                  <p></p>
                <div class="d-flex justify-content-between">
                        <div class="text-start">
                            <p class="mb-2">Price</p>
                   </div>
        <div class="text-end">
          <p class="mb-2">
            <strong class="text-primary">${data[key][2]} SAR</strong>
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <input type="button" value="Buy it" class="btn btn-primary">
      </div>

    </div>
  </div>
</div>`

  }



}


function addBuyButtonListeners() {
  const buyButtons = document.querySelectorAll(".items input[type=button]");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.closest(".items").getAttribute("data-item-id");
      window.location.href = `product.html?item_id=${itemId}`;
    });
  });
}

function addBuynowButtonListeners() {
  const buyButtons = document.querySelectorAll("input[type=button]");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.closest(".right").getAttribute("data-item-id");
      window.location.href = `checkout.html?item_id=${itemId}`;
    });
  });
}




function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

async function initProductPage() {
  const itemId = getQueryParam("item_id");
  // 在这里调用其他需要使用商品 ID 的函数
  console.log("The item ID:", itemId);
  try {
        const response = await fetch("https://3334.imjyy.com:8080/find_item_by_id", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({itemId})
        });
        if (response.ok) {
            //alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        const data = await response.json();
        displayitemdes(data);
        addBuynowButtonListeners();
    } catch (error) {
        console.error("Error:", error);
        alert("Error sending data to the server.");
    }
}


function displayitemdes(data){
    const serverResponseDiv = document.getElementById("itemstotal");
     //alert(data);
    console.log(data);
    serverResponseDiv.innerHTML = `
    <div className="left">
        <div className="main_image">
            <img src="${data[0][3]}" className="slide">
        </div>
        <div className="option flex">
        </div>
    </div>

    <div class="right" data-item-id="${data[0][4]}">
        <h3>${data[0][0]}</h3>
        <h4><small></small>${data[0][1]} SAR </h4>
        <p>${data[0][2]}</p>
        <input type="button" value="Buy now" class="btn btn-primary">
    </div>`
}


function rsaDecrypt(encryptedAesKey, privateKey) {
    const jsDecrypt = new JSEncrypt();
    jsDecrypt.setPrivateKey(privateKey);
    const decryptedAesKey = jsDecrypt.decrypt(encryptedAesKey);
    return decryptedAesKey;
}


// AES解密
function aesDecrypt(encryptedData, aesKey, iv) {
    const key = CryptoJS.enc.Utf8.parse(aesKey);
    const cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(encryptedData)
    });
    const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse(iv)
    });
    return CryptoJS.enc.Utf8.stringify(decrypted);
}

function displaybuycomplete(data){

    const serverResponseDiv = document.getElementById("message");
    const message = data.message;



  if (message == 'success') {

      serverResponseDiv.innerHTML = `
          <p style = "color: green">Congratulation! Buy successfully, it will redirect to main page in 5s...</p>
          `;
      alert("Congratulation! Buy successfully!!")
      window.location.href = "dashboard.html";

  } else {

    serverResponseDiv.innerHTML = `
      <p style = "color: #b40e0e">Trading is faild. Invaild key or server is busy</p>
    `;

  }
}

async function displayusername(){
    const username = localStorage.getItem('username');
  try {
        const response = await fetch("https://3334.imjyy.com:8080/getmoney", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username})
        });
        if (response.ok) {
            //alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        const data = await response.json();
        const serverResponseDiv = document.getElementById("usernameclass");
        serverResponseDiv.innerHTML = `
              Hello!<span> ${data[0][0][1]}, ${data[0][0][2]}</span>
              `;
    } catch (error) {
        console.error("Error:", error);
        alert("Error sending data to the server.");
    }


}

async function getmoney(){
    const username = localStorage.getItem('username');
  try {
        const response = await fetch("https://3334.imjyy.com:8080/getmoney", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username})
        });
        if (response.ok) {
            //alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        const data = await response.json();
        const serverResponseDiv = document.getElementById("money");
        serverResponseDiv.innerHTML = `
        <i class="fa-solid fa-wallet"></i> &nbsp ${data[0][0][0]} SAR
        `;
    } catch (error) {
        console.error("Error:", error);
        alert("Error sending data to the server.");
    }
}

function add_goods_by_user() {
    // RSA public key
    const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4HcUMt3iGNLVYtxSc0Oe\n" +
        "A9JjOe0GkneCWx+7iPwsyu2f3imIIcQUMwd27K+SuybvVnXTi8gnWc9EhqYWaBya\n" +
        "R8Zod+pirXYROWcDDUAAA61+k1mnC7htFl7mq8a/2meFHTZNAdGa6Mk9Lqcnq1mR\n" +
        "T8e4WlEa408ZdE1vQc3c/ApL0KvpO3h6gOoxuLVydHpvuFTnYg61eKBYRj4kQPcU\n" +
        "EmhWOtxPXpQyGUifYaYCPFzCBMhKh7IH9hs7Sgh4RcxHc+Wk9jdFtY2vFf2XvD4W\n" +
        "PGxqCv8+p2tmblEZPpXjKKOklCHgYCjVRHlo+7zDu7ItMU0jOXysxflD4k69EHa2\n" +
        "sQIDAQAB\n-----END PUBLIC KEY-----";

    // Generate random AES key
    //const aesKey = CryptoJS.lib.WordArray.random(256 / 8).toString(CryptoJS.enc.Hex);
    const aesKey = randomHex(16);
    const randIV = randomHex(16);

    // Encrypt data using AES
    const iname = document.getElementById("iname").value;
    const idesc = document.getElementById("idesc").value;
    const iprice = document.getElementById("iprice").value;
    const username = localStorage.getItem('username');
    const data = JSON.stringify({ username, iname, idesc, iprice});
    //const encryptedData = CryptoJS.AES.encrypt(data, aesKey).toString();
    const encryptedData = aesEncrypt(data, aesKey, randIV);
    //Encrypt AES key using RSA
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
    const encryptedAesKey = jsEncrypt.encrypt(aesKey);
    // Send encrypted data and encrypted AES key to the server
    console.log("aesKey",aesKey);
    console.log("IV", randIV);
    const dataFile =  randIV + encryptedData;

    add_goods_by_user_step2(dataFile, encryptedAesKey);

    // Prevent form submission
    return false;
}


async function add_goods_by_user_step2(dataFile, encryptedAesKey){
  try {
        const response = await fetch("https://3334.imjyy.com:8080/add_goods", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({dataFile,encryptedAesKey})
        });
        if (response.ok) {
            //alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        const data = await response.json();
        const id = data.id;
        if (id == 1){
            alert("Congratulation! create successfully")
        }else {
            alert("fail")
        }
        window.location.href = "dashboard.html";

    } catch (error) {
        console.error("Error:", error);
        alert("Error sending data to the server.");
    }
}


function uploadItem() {
  // 获取表单输入的值
  const itemName = document.getElementById("iname").value;
  const itemPrice = document.getElementById("iprice").value;
  const itemDescription = document.getElementById("idesc").value;
  const itemCategory = document.getElementById("category").value;
  const imageInput = document.querySelector("input[type='file']");

  // 检查是否选择了文件
  if (imageInput.files.length === 0) {
    alert("Please select an image to upload.");
    return;
  }

  // 使用 FileReader 对象读取所选图像
  const reader = new FileReader();

  reader.onload = function (event) {
    const imageUrl = event.target.result;

    // 在此处添加代码，以将 itemName, itemPrice, itemDescription, itemCategory 和 imageUrl 发送到服务器
    console.log("Item Name:", itemName);
    console.log("Item Price:", itemPrice);
    console.log("Item Description:", itemDescription);
    console.log("Item Category:", itemCategory);
    console.log("Image URL:", imageUrl);
  };

  reader.readAsDataURL(imageInput.files[0]);
}
