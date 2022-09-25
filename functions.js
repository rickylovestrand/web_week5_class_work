function shout(text){
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))
let message = shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) { // undefined values are considered false
        // undefined is a falsy value
        return celsius.toFixed(decimalPlaces)
    }
    return celsius
}

let todayTemp = 75
let todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)

function isGPA(number){
    if (number >=0 && number <=4){
        return true
    } 
    return false 
}

console.log(isGPA(-3))
console.log(isGPA(4.1))
console.log(isGPA(2.5))
console.log(isGPA(4))

function cityState(city, state){
    return city + ', ' + state.toUpperCase()
}

console.log(cityState('Minneapolis', 'mn'))
console.log(cityState('minneapolis', 'MN'))