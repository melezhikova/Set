// TODO: write your code here
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('Такой персонаж уже добавлен');
    } else {
      this.members.add(obj);
    }
    return this.members;
  }

  addAll(...objs) {
    objs.forEach((obj) => {
      if (this.members.has(obj)) {
        throw new Error('Такой персонаж уже добавлен');
      } else {
        this.members.add(obj);
      }
    });
  }

  toArray() {
    const array = [];
    this.members.forEach((item) => {
      array.push(item);
    });
    return array;
  }
}
