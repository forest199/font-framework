import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var Web3 = require('web3');
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  /* See Provider Options Section */
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "0aa6e496042942ff9b1869aa93a44cde"
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  // network: "rinkeby",
  cacheProvider: true, // optional
  providerOptions // required
});

export default new Vuex.Store({
  state: {
    count: 0,
    web3: null,
    contract: null,
    account: '',
    abi: [{
      "constant": true,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "allRounds",
      "outputs": [{
        "internalType": "address",
        "name": "creator",
        "type": "address"
      }, {
        "internalType": "bytes32",
        "name": "result",
        "type": "bytes32"
      }, {
        "internalType": "uint8",
        "name": "state",
        "type": "uint8"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "players",
      "outputs": [{
        "internalType": "address",
        "name": "beter",
        "type": "address"
      }, {
        "internalType": "string",
        "name": "guessResult",
        "type": "string"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "roundIndex",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "roundRecords",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "string",
        "name": "value",
        "type": "string"
      }, {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }],
      "name": "hashResult",
      "outputs": [{
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "bytes32",
        "name": "hashResultValue",
        "type": "bytes32"
      }],
      "name": "startRound",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "uint256",
        "name": "_roundNo",
        "type": "uint256"
      }, {
        "internalType": "string",
        "name": "guessValue",
        "type": "string"
      }],
      "name": "doBet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "uint256",
        "name": "_roundNo",
        "type": "uint256"
      }, {
        "internalType": "string",
        "name": "_trueResult",
        "type": "string"
      }, {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }],
      "name": "openResult",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "getIndex",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }],
    contractAddr: '0x6b18feCA6dB36454932245Bb9B04883AF498DFa7',
    gas: 5000000
  },

  mutations: {
    async initWeb3(state) {
      if (state.web3)
        return;
      try {
        const provider = await web3Modal.connect();
        console.log('provider', provider);
        await provider.enable();

        const web3 = new Web3(provider);
        console.log('web3 finish...', web3);
        this.commit('initContract', web3);
      } catch (error) {
        console.log('user not select provider.');
        console.error(error);
      }
    },
    async initContract(state, web) {
      console.log('初始化web3合约...', web);
      state.web3 = web;
      // web.eth.getAccounts().then(accounts => {
      //   console.log(accounts);
      //   state.account = accounts[0];
      // });
      const accounts = await web.eth.getAccounts();
      state.account = accounts[0]
      console.log('acounts : ', accounts);
      state.contract = new web.eth.Contract(state.abi, state.contractAddr, {
        from: accounts[0],
        gasPrice: '200000' // default gas price in wei, 20 gwei in this case
      });
      console.log('初始化web3环境与合约完毕。');
    },
    increment(state, payload) {
      state.count += payload.step
    },
    decrement: state => state.count--,
  }
})