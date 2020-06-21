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
