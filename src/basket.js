// "use strict";

class Basket {
  constructor() {
    this.items = [];
    // this.totalValue = 0;
  }

  clear() {
    this.items.length = 0;
  }

  add(item) {
    this.items.push(item);
    // this.addToTotalValue(item.price);
  }

  getTotalValue() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }

  getBasketSummary() {
    return this.items.map((product, i) => {
      return {
        id: i + 1,
        text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł`,
      };
    });
  }

  remove(no) {
    this.items.splice(no - 1, 1);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}
