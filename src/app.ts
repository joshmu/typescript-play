interface Greetable {
  name: string

  greet(phrase: string): void
}

interface Age {
  age: number
}

class Person implements Greetable, Age {
  get getAge() {
    return this.age
  }

  constructor(public readonly name: string, public readonly age: number) {}

  greet(phrase: string) {
    console.log(`${this.name}: ${phrase}`)
  }
}

let user1: Person

user1 = new Person('Josh', 34)

user1.greet('Why hello there!')

console.log(user1.getAge)
console.log(user1.age)
