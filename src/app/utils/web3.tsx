
import Web3 from 'web3';
const testnet = 'https://network.ambrosus-test.com';
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));

export default web3;
