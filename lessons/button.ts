// configuration
const username = 'josh'

console.log(username)

const button = document.querySelector('button')!

function clickHandler(message: string) {
  console.log('Clicked!', message)
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'from josh'))
}
