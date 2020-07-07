// DECORATORS
// in this case 'Logger' is the decorator
// they receive arguments
// decorators are executed when it is defined

function Logger(logTxt: string) {
  return function (constructor: Function) {
    console.log(logTxt)
    console.log(constructor)
  }
}

@Logger('LOGGING - PERSON')
class Person {
  // short hand syntax
  name = 'Josh'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
