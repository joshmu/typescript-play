class Department {
  name: string
  private employees: string[]

  constructor(n: string) {
    this.name = n
    this.employees = []
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }

  addemployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting')

accounting.addemployee('Josh')
accounting.addemployee('Ben')
// accounting.employees[2] = 'Anna' // <- this will not work due to 'private' prop

accounting.describe()
accounting.printEmployeeInformation()
