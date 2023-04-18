function signTransaction() {
    alert("我来啦！！");
    const userid = "123";
    const sk = document.getElementById("sk").value;
    const productId = "123";
    // 将私钥从PEM格式转换为CryptoKey对象
    var data = JSON.stringify({productId,userid});
    alert(data);
    try{
        // 创建 Signature 对象
        let signature=new KJUR.crypto.Signature({alg:"SHA256withRSA",prvkeypem:sk});    //!这里指定 私钥 pem!
        signature.updateString(data);
        let a = signature.sign();
        var sign = hextob64(a);
        alert(sign);
    }catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
    alert(sign);
    alert(data);
    sendDataToServer(sign, data);
    return false;
}


async function sendDataToServer(dataFile, originaldata) {
    console.log("Encrypted data:", 1);
    alert("11111111");
    try {
        const response = await fetch("https://3334.imjyy.com:8080/buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ dataFile, originaldata })
        });
        if (response.ok) {
            alert("Data sent to the server successfully!");
        } else {
            alert("Error sending data to the server.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error sending data to the server.");
    }
    console.log("Encrypted data:", dataFile);
}
