require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "34iq4waM-fGeix4nJ-oLFb-VHHbP7JkA";
const SEPOLIA_PRIVATE_KEY = "0f362521800247ceed7476b077b104a3f25d5d7b96b82676378d8fd0a33e18e1";

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
