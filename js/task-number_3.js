class Storage {
  constructor(prodArr) {
    this.prodArr = prodArr;
    // prodArr = [];
  }
  getItems() {
    return this.prodArr;
  }
  addItem(item) {
    this.item = item;
    this.prodArr.push(item);
  }
  removeItem(item) {
    const index = this.prodArr.indexOf(item);
    if (index !== -1) {
      this.prodArr.splice(index, 1);
    }
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);
storage.getItems();
console.log(storage);

storage.addItem("Дроїд");
console.log(storage);

storage.removeItem("Нанітоіди");
console.log(storage);
