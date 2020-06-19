console.log('hello!')

const add = (...numbers: [number, number, number]) =>
  numbers.reduce((acc, curr) => acc + curr, 0)

console.log(add(2, 3, 7))
