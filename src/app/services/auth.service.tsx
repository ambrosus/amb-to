import { StorageService } from '.';

import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import { generateToken } from '../utils';
class AuthService {
  public ambrosus: any;
  constructor() {
    StorageService.set('address', '0xdF42A3D185B77d445B435ed1AA5572b395DC6093');
    StorageService.set('privateKey', '0xf426aa4dbc1f74997fc31bbcbbdbe6f66bd11f1bf5dbe637ef242740d74080ad');
    this.ambrosus = new AmbrosusSDK();
  }

  public getToken() {
    const secret = StorageService.get('address');
    const validUntil = (new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).getTime());
    const token = secret ? generateToken(validUntil) : null;
    StorageService.set('token', token);
  }
}

const authService = new AuthService();
export default authService;
