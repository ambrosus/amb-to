import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import { StorageService } from '../services';
import { web3 } from '.';

const ambrosus = new AmbrosusSDK();
const generateToken = (timestamp: number) => {
  const address = StorageService.get('address');
  const privateKey = StorageService.get('privateKey');
  const idData = {
    createdBy: address,
    validUntil: timestamp ? timestamp : Math.floor(Date.now() / 1000) + 300,
  };
  const signature: any = web3.eth.accounts.sign(ambrosus.utils.serializeForHashing(idData),
    privateKey);
  return ambrosus.utils.base64url(ambrosus.utils.serializeForHashing({
    idData,
    signature: signature.signature,
  }));
};

export default generateToken;
