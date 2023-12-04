export default class Team {
  constructor() {
    this.team = [];
  }

  add(person) {
    this.team.push(person);
  }

  [Symbol.iterator] = function() {
    let current = 0;
    let last = this.team.length;
    
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: this.team[current++]
          };
        }
        return {
          value: undefined,
          done: true
        };
      },
    };
  };
}
