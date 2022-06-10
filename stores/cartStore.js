import { makeAutoObservable, observable } from 'mobx';

class cartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  getItemsCount() {
    return this.items.length;
  }
  getTotalPrice() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

export default new cartStore();
