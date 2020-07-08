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

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name // '!' assumes we already get a return value
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  // short hand syntax
  name = 'Josh'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
