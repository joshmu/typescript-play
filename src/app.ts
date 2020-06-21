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
