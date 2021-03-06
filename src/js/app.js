// TODO: write your code here
export default class Team {
  constructor() {
    this.members = new Set();
  }

  addMember(obj) {
    if (this.members.has(obj)) {
      throw new Error('Такой персонаж уже добавлен');
    } else {
      this.members.add(obj);
    }
  }

  addAll(...objs) {
    objs.forEach((item) => {
      this.members.add(item);
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
