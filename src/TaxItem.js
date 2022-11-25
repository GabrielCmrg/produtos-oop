import Item from "./Item.js";

export default class TaxItem extends Item {
  constructor(category, description, price) {
    super(category, description, price);

    if (this.constructor == TaxItem) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  getTax() {
    return 0;
  }

  calculateTax(tax) {
    return this.price * tax;
  }
}
