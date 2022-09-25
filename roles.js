let user = {
    name: 'ricky',
    password: 'zebra',
    email: 'ricky@dreamjob.com',
    roles: ['programmer', 'developer'],
    contact: {
        office: 'm1234',
        telephone: 6125554444
    }
}

user.salary = 150000
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)