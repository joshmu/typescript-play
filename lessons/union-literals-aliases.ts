type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-string'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultCoversion: ConversionDescriptor
) {
  let result: number | string
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultCoversion === 'as-number'
  ) {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Josh', 'Bob', 'as-string')
console.log(combinedNames)
