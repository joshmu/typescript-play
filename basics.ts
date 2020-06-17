function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // this validation check would be ok if we could only check at runtime, otherwise we could rely on typescript
  // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!')
  // }
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}

let number1: number
number1 = 5
// const number1 = 5 // 5.0
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase)

console.log(result)
