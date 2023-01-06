class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function simulateShoppingCart(items, taxRate) {
  class ShoppingCart {
    constructor() {
      this.items = [];
      this.totalPrice = 0;
    }

    addItem(item) {
      this.items.push(item);
      this.totalPrice += item.price;
    }

    removeItem(item) {
      let index = this.items.indexOf(item);
      if (index >= 0) {
        this.items.splice(index, 1);
        this.totalPrice -= item.price;
      }
    }

    applyDiscount(discount) {
      this.totalPrice *= (1 - discount);
    }

    applyTax(taxRate) {
      this.totalPrice *= (1 + taxRate);
    }
  }

  let shoppingCart = new ShoppingCart();

  for (let i = 0; i < items.length; i++) {
    shoppingCart.addItem(items[i]);
  }

  shoppingCart.applyDiscount(0.1); // apply 10% discount
  shoppingCart.applyTax(taxRate); // apply tax

  console.log(`Total price: ${shoppingCart.totalPrice.toFixed(2)}`);
}

let items = [
  new Item("Item 1", 10),
  new Item("Item 2", 20),
  new Item("Item 3", 30)
];

simulateShoppingCart(items, 0.1); // applies a 10% tax rate
