// * we could explicitly specify the object however it is better to use typescript inference
// const person: {
//   name: string
//   age: number
// } = {
const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
} = {
  name: 'Josh',
  age: 34,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'], // array has to have exactly 2 elements
}

// these could work if not using a 'Tuple'
person.role.push('admin')
// person.role[1] = 10

let favouriteActivities: string[]
favouriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
