import config from '../config';

class StorageService {
  private namespace = config.NAMESPACE;
  private storage: any = localStorage;

  // localStorage wrapper
  public set(key: string, value: any) {
    this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
  }

  public put(key: string, value: any) {
    if (!this.get(key)) {
      this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
    } else {
      return false;
    }
  }

  public get(key: string) {
    try {
      return JSON.parse(this.storage.getItem(`${this.namespace}${key}`));
    } catch (err) {
      return this.storage.getItem(`${this.namespace}${key}`);
    }
  }

  public delete(key: string) {
    this.storage.removeItem(`${this.namespace}${key}`);
  }

  public clear() {
    this.storage.clear();
  }
}

const storageService = new StorageService();
export default storageService;
