var _crypt = crypto.subtle;

var crypt_alg = {
    name: "AES-CTR",
    //Don't re-use counters!
    //Always use a new counter every time your encrypt!
    counter: new Uint8Array(16),
    length: 128, //can be 1-128
};
var crypt_alg_k = {
    name: "AES-CTR",
    length: 256, //can be  128, 192, or 256
};

var _aes_key_data;

var enc_data;
var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



_crypt.generateKey(
    crypt_alg_k,
    true, //whether the key is extractable (i.e. can be used in exportKey)
    ["encrypt", "decrypt"] //can "encrypt", "decrypt", "wrapKey", or "unwrapKey"
)
.then(function(key){
    //returns a key object
    console.log(key);

    _crypt.exportKey(
        "jwk", //can be "jwk" or "raw"
        key //extractable must be true
    )
    .then(function(keydata){
        //returns the exported key data
        _aes_key_data = keydata;
        console.log(keydata);
    })
    .catch(function(err){
        console.error(err);
    });

    _crypt.encrypt(
        crypt_alg,
        key, //from generateKey or importKey above
        new Uint8Array(data) //ArrayBuffer of data you want to encrypt
    )
    .then(function(encrypted){
        //returns an ArrayBuffer containing the encrypted data
        console.log(new Uint8Array(encrypted));
        enc_data = new Uint8Array(encrypted);

        _crypt.importKey(
            "jwk", //can be "jwk" or "raw"
            _aes_key_data,
            crypt_alg_k,
            true, //whether the key is extractable (i.e. can be used in exportKey)
            ["encrypt", "decrypt"] //can "encrypt", "decrypt", "wrapKey", or "unwrapKey"
        )
        .then(function(key){
            //returns the symmetric key
            console.log(key);

            _crypt.decrypt(
                crypt_alg,
                key, //from generateKey or importKey above
                new Uint8Array(enc_data) //ArrayBuffer of the data
            )
            .then(function(decrypted){
                //returns an ArrayBuffer containing the decrypted data
                console.log(new Uint8Array(decrypted));
            })
            .catch(function(err){
                console.error(err);
            });
        })
        .catch(function(err){
            console.error(err);
        });
    })
    .catch(function(err){
        console.error(err);
    });
})
.catch(function(err){
    console.error(err);
});