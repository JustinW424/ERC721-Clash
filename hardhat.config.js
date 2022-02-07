require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
const { bscscanApiKey } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {},
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [ApiKey],
      // apiKey: `DDX84A74SWWTF7J1YEMPWT46FC86Q8YC11`
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/e61ce3c1ff0f439c8cc620c964b8ecef",
      accounts: [
        `0xcf11856dd6ce91ab7affef4ed7154395a9ad7b7a7e6342c8a2a71e30deb6b221`,
      ],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/2685ba1bcbf54312bb8683ddcc02f79d",
      accounts: [
        `a18044758c0f8c1a40ca3060ba321c013cd89e8c4cb86af852626fe24e57a7b0`,
      ],
      apiKey: `8ZFFIRUXPPWQ74H525YIX8NMZQ26M35RZR`
    },
    // tron: {
    //   url: "https://api.trongrid.io",
    //   accounts: [
    //     `TKhBEjmi877u3Hs1g4WsmQ3zsL4f6FYr9d`,
    //   ],
    // },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: ["a18044758c0f8c1a40ca3060ba321c013cd89e8c4cb86af852626fe24e57a7b0"]
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: ["a18044758c0f8c1a40ca3060ba321c013cd89e8c4cb86af852626fe24e57a7b0"]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    // apiKey: "8ZFFIRUXPPWQ74H525YIX8NMZQ26M35RZR"   // Ethereum api key
    apiKey: "DDX84A74SWWTF7J1YEMPWT46FC86Q8YC11"    // polygon api key
  },
};
