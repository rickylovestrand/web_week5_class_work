console.log('Hello World!')

// Three ways to create variables
let color = 'blue' // scope behaves as you would expect with let keyword
var size = 'medium' // not recommended
const language = 'JavaScript' // can't change this value
// language = 'C#' // this is an error

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi programmers'

console.log('There are ' + quantity + ' programmers')
//
let todayTemp = 75
console.log('Today\'s temp is ' + todayTemp +  'F')

let tempC = (todayTemp - 32) * 5/9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')
console.log(`Today's temperature is ${tempC.toFixed(2)}C
             which is ${todayTemp}F`)


let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'
console.log(`This class is ${department} ${classCode} ${className}`)