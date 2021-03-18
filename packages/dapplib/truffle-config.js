require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'jazz enter brand spot toy note spider unknown give kiwi surround season'; 
let testAccounts = [
"0x60f4ef8ce246c301c0698606115f369f42d3deb1bc3de30776ad6c2f19531818",
"0x5960c4f9d71073ee218a2de91c23f608434d64e22dc59e55f9182ddd82a2a6ba",
"0x4f854a608b704ed67552f5c8050dfea4f42b9d6628e649ec6bbe89f963e36743",
"0x7d108196f719ff4f162edaaa7988442835e2c08126dba35e1323195914ff6b87",
"0x6b1eb526052afbc58db25a7d47c45e39af7da3e08555c36556bd4decae75da77",
"0xbe8b1ae47eb0e2691d67ec139496c10cd33aeca89a4d6d147653cb57f4351f05",
"0xdd1c848de92041a89e8a4256c88f0f88401481e7186cc5a1923a5c91f731d0fd",
"0xfe5f4dce8b63c1a8707c270880f751fbbc6b22aee95b283813cc4af953bc5d59",
"0x432f26bf09cb4effb41f278d688242bea2e2dc50adcd6d55a0d098ac2e497fe0",
"0xf4ecd25ab059b793516fcda921680c8950330804a8b6c3e243fb4cfd19772ef5"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

