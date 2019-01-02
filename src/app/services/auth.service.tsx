import StorageService from './storage.service';

export default class AuthService {
  private storageService = new StorageService();

  public isLoggedIn() {
    const account: any = this.storageService.get('account');
    const token: string = this.storageService.get('token');

    return token && account && !!account.email;
  }

  public logout(): void {
    this.storageService.clear();
  }
}
