export default class Character {
  constructor(name) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
  }
}
