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

    // Encrypt data using AES
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const hashPas = hashPassword(password, salt);

    const data = JSON.stringify({ username, hashPas, fname, lname, email });
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

    regsendDataToServer(dataFile, encryptedAesKey);

    // Prevent form submission
    return false;
}


async function loginencryptAndSubmit() {

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
      alert("The data " + dataFile);


      const salt_new= await logsendDataToServer(dataFile, encryptedAesKey);
      console.log("salt_new data:", salt_new);
      salt_new.then(result =>console.log("result data:", result));
      alert("Slat is 第1 loginencryptAndSubmit次 " + salt_new);

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
      alert("Slat is 第2 loginencryptAndSubmit次 " + salt_new);
      const saltFile = salt_new + randIV2 + encryptedData_2;
      postLogin(saltFile,encryptedInputAesKey)
      //Prevent form submission
      return false;


    } catch (error) {
        console.error("Error in loginencryptAndSubmit:", error);
        alert("Error occurred in loginencryptAndSubmit function.");
    }



}


function regsendDataToServer(dataFile, encryptedAesKey) {
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
            alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        return response.json(); // Add this line
    }).then((data) => {
      console.log("Data received from server:", data);
      alert(data);
      displayServerResponse(data);
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
            alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
        return response.json(); // Add this line
    }).then((data) => {
      console.log("Data received from server:", data);
      const salt = data.salt
      displayServerResponse(data);

    }).catch(error => {
        console.error("Error:", error);
        alert("Error postLogin.");
    });
}

async function logsendDataToServer(dataFile, encryptedAesKey) {
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
    console.log("response data:", response);
    console.log("logsendDataToServer Status:", response.status, "logsendDataToServer Status Text:", response.statusText);
    if (response.ok) {
        alert("logsendDataToServer response successfully!");
        const data = await response.json();
        console.log("Data received from server:", data);
        alert("data.salt: " + data.salt);
        const salt_new_0 = data.salt;
        alert("Slat is logsendDataToServer " + salt_new_0);
        alert("salt_new_0 " + salt_new_0);
        return  Promise.resolve(salt_new_0);
    } else {
      alert("Error logsendDataToServer response.");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("logsendDataToServer error.");
    return null; // or some other default value
  }
}




function displayServerResponse(data) {
  const serverResponseDiv = document.getElementById("serverResponse");
  const message = data.message;
  const id = data.id;
  const jsonData = JSON.stringify(data.data, null, 2);

  if (id == 1) {
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
