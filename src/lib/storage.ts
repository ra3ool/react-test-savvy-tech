export class StorageManager {
  static getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  }

  static setItem<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

//we can simply add sessionStorage or Cookie later, thats good for now
