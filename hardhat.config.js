// require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("@nomiclabs/hardhat-waffle");
const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    Sepolia: {
      url: "https://arb-sepolia.g.alchemy.com/v2/RtF9vLf5K7Rj_MKXoLx1EhAa4Cc3rq5N",
      accounts: ["ca79776cf9943f1f65f84896683f7773c5c7a8c540d5ebe6fdd5a574dede6f89"],
    },
  },

  etherscan: {
    apiKey: "CK6HWBISE55AIECH1MCQX8FK3NTY3CGN15"
  },
  sourcify: {
    enabled: true,
  },

};

//npx hardhat verify --network Sepolia --contract "0x3Ee32ba1132B46ED14F580Bff6566dbddc799B39"
