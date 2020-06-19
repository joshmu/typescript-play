// type vs interface functions
// type function
// type AddFn = (a: number, b: number) => number
// interface function
interface AddFn {
  (a: number, b: number): number
}
let add: AddFn
add = (n1: number, n2: number) => {
  return n1 + n2
}

// interfaces
interface Named {
  readonly name: string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

interface Age {
  readonly age: number
}

class Person implements Greetable, Age {
  age: number
  name: string

  get getAge() {
    return this.age
  }

  constructor(n: string, yearsOld: number) {
    this.age = yearsOld
    this.name = n
  }

  greet(phrase: string) {
    console.log(`${this.name}: ${phrase}`)
  }
}

let user1: Person

user1 = new Person('Josh', 34)

user1.greet('Why hello there!')

console.log(user1.getAge)
console.log(user1.age)
