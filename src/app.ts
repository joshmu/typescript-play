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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }
  addReport(text: string) {
    this.reports.push(text)
  }
  printReport() {
    console.log(this.reports)
  }
}

const accounting = new Department('d1', 'Accounting')

accounting.addemployee('Josh')
accounting.addemployee('Ben')
// accounting.employees[2] = 'Anna' // <- this will not work due to 'private' prop

accounting.describe()
accounting.printEmployeeInformation()

const tech = new ITDepartment('it1', ['Josh'])
tech.describe()
console.log(tech)

const accounting2 = new AccountingDepartment('d2', [])
accounting2.addReport('something with a lot of $$$')
accounting2.describe()
accounting2.printReport()
