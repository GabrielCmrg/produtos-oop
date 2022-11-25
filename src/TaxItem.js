import Item from "./Item.js";

export default class TaxItem extends Item {
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
