// DECORATORS
// in this case 'Logger' is the decorator
// they receive arguments
// decorators are executed when it is defined

function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class Person {
  // short hand syntax
  name = 'Josh'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
