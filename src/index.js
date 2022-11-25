class Item {
  category;
  description;
  price;

  constructor(category, description, price) {
    if (this.constructor == Item) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.category = category;
    this.description = description;
    this.price = price;
  }
}

class TaxItem extends Item {
  constructor(category, description, price) {
    if (this.constructor == TaxItem) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    super(category, description, price);
  }

  calculateTax(tax) {
    return this.price * tax;
  }
}
