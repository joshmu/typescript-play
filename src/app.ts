class Department {
  static fiscalYear: number = 2020
  // private name: string
  // private employees: string[]
  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.name = n
    // this.employees = []
  }

  static createEmployee(name: string) {
    return { name }
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
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
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found.')
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a value!')
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  addEmployee(name: string) {
    if (name === 'Josh') {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReport() {
    console.log(this.reports)
  }
}

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Josh')
accounting.addEmployee('Ben')
// accounting.employees[2] = 'Anna' // <- this will not work due to 'private' prop

accounting.describe()
accounting.printEmployeeInformation()

const tech = new ITDepartment('it1', ['Josh'])
tech.describe()
console.log(tech)

const accounting2 = new AccountingDepartment('d2', [])
accounting2.addReport('something with a lot of $$$')
accounting2.addEmployee('Josh')
accounting2.addEmployee('Jonathan')
accounting2.describe()
accounting2.printReport()
console.log(accounting2)
accounting2.mostRecentReport = 'holy!'
console.log(accounting2.mostRecentReport)

const employee1 = Department.createEmployee('Josh Mu')
console.log(employee1, Department.fiscalYear)
