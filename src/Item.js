export default class Item {
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
