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
    const value = `${this.namespace}${key}`;
    try {
      return JSON.parse(this.storage.getItem(value));
    } catch (err) {
      return this.storage.getItem(value);
    }
  }

  public delete(key: string) {
    this.storage.removeItem(`${this.namespace}${key}`);
  }

  public clear() {
    const items = { ...localStorage };
    Object.keys(items).map((value) => {
      if (value.includes(this.namespace)) {
        this.delete(value.split(this.namespace)[1]);
      }
    });
    console.log(items);
  }
}

const storageService = new StorageService();
export default storageService;
