require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note rifle clump hockey ensure olympic general'; 
let testAccounts = [
"0x73ff4f2934b035e2f7a9b27d2d782e11dc39be654af5af0872075dc19137f479",
"0xac028d58d9469f30dc0202c2994af605c2d329e768f1c9571373548669065763",
"0xf6816626bf69e0dff368960c3155cfdd119e6708c5e8b43ef69f78411a924d95",
"0x66297559704cf1ad1f74bc2a7d5a40f0d0976923fcf92f1188659f9901bf5fc4",
"0x2591bf6faecde7b96a612d549a6c6cafede90d19a4b896b89583276fa1fc669b",
"0x67070162233ef0930eb2bf7bf0b930a98b43b06044089053743e459156c70f3f",
"0x53855037b3348ac9be6381a74012bea2d19c81754d81aae7ef3a184464fa96ea",
"0x1e8dcda29c43c6d8ea106acbb7ff718a4fc53ef66270b1e1b67a2f9dc2b4a80f",
"0x3463c14337fd87ffcc2491225b8c6bf6135d8891c92c1ee1908a64fe0a2c6bfb",
"0x3342a434ba32f1859ca5ba0beb0f1e8c6c37ece3712d51657606941b2bf8293c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
