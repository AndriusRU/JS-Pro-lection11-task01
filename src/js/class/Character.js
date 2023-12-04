export default class Character {
  constructor(person) {
    this.name = person.name;
    this.type = person.type;
    this.health = person.health;
    this.level = person.level;
    this.attack = person.attack;
    this.defence = person.defence;
  }
}