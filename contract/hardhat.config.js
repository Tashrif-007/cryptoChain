

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/OTc8PASzK3YUTgXm-_lqADxgK79Z1k4A',
      accounts: [ 'be1a262badbecaa77f10f0ed461a72ad0b1f907eb2dbdcf79d41a182d8eb5b49' ]
    }
  }
}