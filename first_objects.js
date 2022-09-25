let user = { username: 'Ricky', password: 'panda'}

console.log(user.username)
console.log(user['username'])
console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let userNameProperty = 'username'
console.log(user[userNameProperty])

user.password = 'elephant'
console.log(user)

user.password = 'alligator'
console.log(user)

user.email = 'ricky@yahoo.com'
console.log(user)
console.log(user.email)

