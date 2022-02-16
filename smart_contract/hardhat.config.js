require("@nomiclabs/hardhat-waffle");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/MM0cYIrqbxWYBNhteWxPFVlpOy2WfmUC',
      accounts:[
        'GIVE YOUR ACCOUNT PRIVATE KEY'
      ]
    }
  }
};
// contract deployed at 0x999E49e7E6B49ee228B4E2c267c6927A5F68a322