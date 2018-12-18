
import Web3 from 'web3';
const web3 = new Web3();

const BN = web3.utils.BN;

const formatAMB = val => {
  let num = val * Math.pow(10, -18);
  return new BN(num).toString();
};

const numWithCommas = val => {
  return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
};

const ambToUSD = (amb, usd_price) => {
  let result = amb * parseFloat(usd_price, 10);
  return result.toFixed(2);
};

const timestampToDate = timestamp => {
  return new Date(timestamp * 1000);
};

const toAscii = data => {
  return web3.utils.toAscii(data);
};

const wei2eth = val => {
  val = val / 1000000000;
  return val.toFixed(0);
}

export { formatAMB, ambToUSD, timestampToDate, numWithCommas, toAscii, wei2eth };
