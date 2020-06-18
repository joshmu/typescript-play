// UNKNOWN
let userInput: unknown
let userName: string

userInput = 5
userInput = 'Josh'
// we need to use additional type check if we want to reassign unknown type to a fixed type variable
if (typeof userInput === 'string') {
  userName = userInput
}

console.log(userName)

// NEVER
function generateError(message: string, errorCode: number): never {
  throw { message, errorCode }
}
generateError('An error occurred!', 500)
