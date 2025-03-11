const crypto = require('crypto-js');

const my_password = 'mypass';
const my_key = 'mykey';

/// Encode
const encode = crypto.AES.encrypt(my_password, my_key);
console.log('Encode : ', encode.toString());


/// decode
const decode = crypto.AES.decrypt(encode.toString(), my_key);
console.log('Decode : ', decode.toString(crypto.enc.Utf8));