import config from '../config';

class StorageService {
  private namespace = config.NAMESPACE;
  private storage: any = localStorage;

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
    const value = this.storage.getItem(`${this.namespace}${key}`);
    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }

  public delete(key: string) {
    this.storage.removeItem(`${this.namespace}${key}`);
  }

  public clear() {
    const items = { ...this.storage };
    Object.keys(items).map((value) => {
      if (value.indexOf(this.namespace) > -1) {
        this.delete(value.split(this.namespace)[1]);
      }
    });
  }
}

const storageService = new StorageService();
export default storageService;
