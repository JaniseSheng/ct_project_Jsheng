var strCrypto = (function () {
	// 密钥
	var key = "BBSBBSBB";
	// 偏移
	var iv = [0x01020304, 0x05060708];
	
	//加密
	function encrypt(str) {
		var keyHex = CryptoJS.enc.Utf8.parse(key);
		var ivHex = CryptoJS.lib.WordArray.create(iv);
		var encrypted = CryptoJS.DES.encrypt(str, keyHex,
			{
				iv: ivHex,
				mode: CryptoJS.mode.CBC
			});
		return encrypted.toString();
	}
	//解密
	function decode(str) {
		//des解密
		var keyHex = CryptoJS.enc.Utf8.parse(key);
		var ivHex = CryptoJS.lib.WordArray.create(iv);
		// direct decrypt ciphertext
		var decrypted = CryptoJS.DES.decrypt({
			ciphertext: CryptoJS.enc.Base64.parse(str)
		}, keyHex, {
				iv: ivHex,
				mode: CryptoJS.mode.CBC
			});
		return decrypted.toString(CryptoJS.enc.Utf8);
	}
	
	return {
		encrypt:encrypt,
		decode:decode
	};
})();