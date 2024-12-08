# Deploy Your First Smart Contract on Sepolia

Deploying your first smart contract on the Ethereum Sepolia testnet is an essential step in blockchain development. This guide walks you through the process, including setting up your environment, writing a simple smart contract, deploying it to Sepolia, and verifying it using Etherscan with your API key.

---

## Prerequisites

- **Node.js and npm**: Ensure you have [Node.js](https://nodejs.org/) and npm installed.
- **MetaMask**: Install the [MetaMask](https://metamask.io/) browser extension and configure it for the Sepolia testnet.
- **Etherscan Account**: Sign up on [Etherscan](https://etherscan.io/) to obtain an API key for contract verification.

---

## Steps

### 1. Initialize the Project

```bash
mkdir my-first-smart-contract
cd my-first-smart-contract
npm init -y
```

### 2. Install Hardhat
```bash
npm install --save-dev hardhat
```

Then, initialize Hardhat:
```bash
npx hardhat
```

### 3. Configure Hardhat for Sepolia
In hardhat.config.js, add the Sepolia network configuration:
```bash
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      apiKey: ETHERSCAN_API_KEY
   }
};
```

Replace the following:

- **YOUR_INFURA_PROJECT_ID** with your Infura project ID.
- **YOUR_PRIVATE_KEY** with your MetaMask private key.
- **YOUR_ETHERSCAN_API_KEY** with your Etherscan API key.

Follow this for more detailed explanation : [Web3 University]([https://metamask.io/](https://www.web3.university/tracks/create-a-smart-contract/deploy-your-first-smart-contract))


