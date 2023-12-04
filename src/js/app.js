import Character from "../class/Character";
import Team from "./class/Team";

const myTeam = new Team()

const person1 = new Character({name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10})
const person2 = new Character({name: 'Маг', type: 'Magican', health: 30, level: 1, attack: 30, defence: 15})
const person3 = new Character({name: 'Скелет', type: 'Skeleton', health: 20, level: 1, attack: 10, defence: 10})
const person4 = new Character({name: 'Демон', type: 'Daemon', health: 40, level: 1, attack: 30, defence: 30})
const person5 = new Character({name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 25, defence: 60})
const person6 = new Character({name: 'Гном', type: 'Dwarf', health: 40, level: 1, attack: 30, defence: 20})

myTeam.add(person1);
myTeam.add(person2);
myTeam.add(person3);
myTeam.add(person4);
myTeam.add(person5);
myTeam.add(person6);

for (let item of myTeam.team) {
  console.log(item);
}