

require('@nomiclabs/hardhat-waffle')
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const URL = process.env.P_URL;

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: URL,
      accounts: [ PRIVATE_KEY ]
    }
  }
}