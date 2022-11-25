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

  getTax() {
    return 0;
  }

  calculateTax(tax) {
    return this.price * tax;
  }
}

class Beer extends TaxItem {
  constructor(description, price) {
    super("Beer", description, price);
  }

  getTax() {
    return 0.2;
  }
}

class Cigar extends TaxItem {
  constructor(description, price) {
    super("Cigar", description, price);
  }

  getTax() {
    return 0.25;
  }
}

class Electronics extends TaxItem {
  constructor(description, price) {
    super("Electronics", description, price);
  }

  getTax() {
    return 0.3;
  }
}

class Water extends Item {
  constructor(description, price) {
    super("Water", description, price);
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.item.push(item);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getTaxes() {
    return this.items.reduce((sum, item) => {
      if (item instanceof TaxItem) {
        return sum + item.calculateTax(item.getTax());
      }
      return sum;
    }, 0);
  }
}
