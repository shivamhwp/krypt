require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ozC103mTkEO1PffNoI3lIrT9VfK0FCbc",
      accounts: [
        "c83177b0aac4cd3da26ca6cd4aeeb5cd7f6a624e5701c9761f6cb0523d098b35",
      ],
    },
  },
};
