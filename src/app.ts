type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// Intersection type of type objects
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Josh',
  startDate: new Date(),
  privileges: ['tech'],
}

/*
interface Admin2 {
  name: string
  privileges: string[]
}

interface Employee2 {
  name: string
  startDate: Date
}

// Intersection type of interfaces works similar
interface ElevatedEmployee2 extends Admin2, Employee2 {}

*/

type Combinable = string | number
type Numeric = number | boolean

// intersection type of union types
type Universal = Combinable & Numeric

// we get the common types -> 'number'
const u1: Universal = 999

// type guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknownEmployee = Employee | Admin

const em2: UnknownEmployee = {
  name: 'Josh Mu',
  privileges: ['tech'],
}

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name)
  if ('privileges' in emp) console.log('Privileges: ' + emp.privileges)
  if ('startDate' in emp) console.log('StartDate: ' + emp.startDate)
}

printEmployeeInformation(em2)

class Car {
  drive() {
    console.log('Driving..')
  }
}

class Truck {
  drive() {
    console.log('Driving truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) vehicle.loadCargo(10)
}

useVehicle(v1)
useVehicle(v2)

// discriminated unions
interface Bird {
  type: 'bird'
  flyingSpeed: number
}
interface Horse {
  type: 'horse'
  runningSpeed: number
}
type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed: number
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
  }
  console.log('Moving with speed: ' + speed)
}

moveAnimal({ type: 'horse', runningSpeed: 99 })

// type casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement

userInputElement.value = 'Hi there!'
// or without using '!'
const input = document.getElementById('user-input')

if (input) {
  ;(input as HTMLInputElement).value = 'Hello there!'
}

// index properties
// we want this to be flexible
// { email: 'Not a valid email', username: 'Must start with a character!'}
interface ErrorContainer {
  // don't know the name or count but do know that the prop name can be interpreted as a string and so is the value
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email.',
  username: 'Must start with a capital character!',
}

// function overloads

function addition(a: number, b: number): number
function addition(a: string, b: string): string
function addition(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = addition('josh', 'mu')
// we cannot split because ts believes we could return a number or string however we know this case will always be string returned
// so we could use type casting but this isn't optimal as we know what it should be (as string)
console.log(result.split(''))

// optional chaining

const fetchedUserData = {
  id: 'u1',
  name: 'Josh',
  // let's say job property shows up later in runtime...
  job: { title: 'CEO', description: 'My own company' },
}
// if we fetch data maybe we don't have certainty that all these properties are set yet
// console.log(fetchedUserData.job && fetchedUserData.job.title)
console.log(fetchedUserData?.job?.title)

// nullish coalescing

const userInput = ''
// this will check for falsy values...
const storedData = userInput || 'DEFAULT'
// however what if an empty string is valid!?
// this is why we would use nullish coalescing operator
const correctData = userInput ?? 'DEFAULT'
console.log({ storedData })
console.log({ correctData })

// Generics

function mergeObjects<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2)
}

console.log(mergeObjects({ name: 'josh' }, { age: 34 }))
