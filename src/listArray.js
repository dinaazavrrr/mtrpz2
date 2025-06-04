class ArrayList {
  constructor() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  append(element) {
    this.items.push(element);
  }

  insert(element, index) {
    if (index < 0 || index > this.items.length) {
      throw new Error("Invalid index");
    }
    this.items.splice(index, 0, element);
  }

  delete(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Invalid index");
    }
    return this.items.splice(index, 1)[0];
  }

  deleteAll(element) {
    this.items = this.items.filter(e => e !== element);
  }

  get(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Invalid index");
    }
    return this.items[index];
  }

  clone() {
    const copy = new ArrayList();
    copy.items = [...this.items];
    return copy;
  }

  reverse() {
    this.items.reverse();
  }

  findFirst(element) {
    return this.items.indexOf(element);
  }

  findLast(element) {
    return this.items.lastIndexOf(element);
  }

  clear() {
    this.items = [];
  }

  extend(otherList) {
    this.items = this.items.concat(otherList.items);
  }
}

module.exports = ArrayList;
