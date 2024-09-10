import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.21",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 1,
      accounts: [process.env.PRIVATE_KEY!],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 4,
      accounts: [process.env.PRIVATE_KEY!],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/YYZyqE0v2BO7ap26Ie16IWdRWpr2T0Wy",
      accounts: [process.env.PRIVATE_KEY!],
    },
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/RiEdJAsZdbKF1nIOcrNerAF1YgEOVfbR",
      accounts: [process.env.PRIVATE_KEY!],
    },
    bsc: {
      url: "https://bsc-testnet.publicnode.com",
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY!],
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY!],
    },
    avaxTest: {
      url: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [`${process.env.PRIVATE_KEY!}`],
    },
    avaxMain: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [`${process.env.PRIVATE_KEY!}`],
    },
    ganache: {
      chainId: 1337,
      url: "http://localhost:8545",
    },
    "plume-testnet": {
      url: "https://plume-testnet.rpc.caldera.xyz/http",
      chainId: 161221135,
      accounts: [`${process.env.PRIVATE_KEY!}`],
    },
    hychain: {
      chainId: 2911,
      url: "https://rpc.hychain.com/http",
      accounts: [`${process.env.PRIVATE_KEY!}`],
    },
    "hychain-testnet": {
      chainId: 29112,
      url: "https://testnet-rpc.hychain.com/http",
      accounts: [`${process.env.PRIVATE_KEY!}`],
    },
    qitmeer: {
      chainId: 813,
      url: "https://qng.rpc.qitmeer.io",
      accounts: [`${process.env.PRIVATE_KEY!}`],
    },
    "fantom-testnet": {
      chainId: 4002,
      url: "https://fantom-testnet-rpc.publicnode.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    "sepolia-testnet": {
      chainId: 11155111,
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    fantom: {
      chainId: 250,
      url: "https://fantom-rpc.publicnode.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    "magma-testnet":{
      chainId: 6969696969,
      url: 'https://turbo.magma-rpc.com',
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      fantom: "AV7JXJ9JHWP2H59CFPED6RQSNSNQ9QQ719",
      "fantom-testnet": "AV7JXJ9JHWP2H59CFPED6RQSNSNQ9QQ719",
      "sepolia-testnet": "QH11311K52VYTY58AU2FF4BJPXZ7WRR6QD",
    },
    customChains: [
      {
        network: "plume-testnet",
        chainId: 161221135,
        urls: {
          apiURL: "https://plume-testnet.explorer.caldera.xyz/api?",
          browserURL: "https://plume-testnet.explorer.caldera.xyz",
        },
      },
      {
        network: "hychain-testnet",
        chainId: 29112,
        urls: {
          apiURL: "https://testnet.explorer.hytopia.com/api",
          browserURL: "https://testnet.explorer.hytopia.com",
        },
      },
      {
        network: "qitmeer",
        chainId: 813,
        urls: {
          apiURL: "https://qng.qitmeer.io/api",
          browserURL: "https://qng.qitmeer.io/",
        },
      },
      {
        network: "fantom-testnet",
        chainId: 4002,
        urls: {
          apiURL: "https://api-testnet.ftmscan.com/api",
          browserURL: "https://testnet.ftmscan.com/",
        },
      },
      {
        network: "fantom",
        chainId: 250,
        urls: {
          apiURL: "https://api.ftmscan.com/api",
          browserURL: "https://ftmscan.com/",
        },
      },
      {
        network: "sepolia-testnet",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/",
        },
      }
    ],
  },
};

export default config;
