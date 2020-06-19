class Department {
  // private name: string
  // private employees: string[]
  private employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.name = n
    // this.employees = []
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addemployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('d1', 'Accounting')

accounting.addemployee('Josh')
accounting.addemployee('Ben')
// accounting.employees[2] = 'Anna' // <- this will not work due to 'private' prop

accounting.describe()
accounting.printEmployeeInformation()
