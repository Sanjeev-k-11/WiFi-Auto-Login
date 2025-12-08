var CryptoJS = CryptoJS || (function () {
    var C = {};
    C.enc = {};
    C.enc.Utf8 = {
        parse: str => str,
        stringify: str => str
    };
    C.AES = {
        encrypt: (msg, key)=>btoa(msg+key),
        decrypt: (cipher, key)=>atob(cipher).replace(key,"")
    };
    return C;
})();
