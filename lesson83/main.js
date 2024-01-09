const me = {
    firstName: 'Mark',
    secondName: 'Gribinichenko',
    age: 19,
    height: '190cm',
    weight: '100kg',
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}
me.sayHello('Ignat')
console.log(me)


const users = [
    {
        name: 'Mark',
        isAdmin: false
    },
    {
        name: 'Sasha',
        isAdmin: true
    },
    {
        name: 'Anton',
        isAdmin: false
    },
    {
        name: 'Kirill',
        isAdmin: false
    },
    {
        name: 'Sergey',
        isAdmin: false
    },
    {
        name: 'Yuri',
        isAdmin: true
    },
]

let sumUsers = 0
for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        sumUsers++
    }
}
console.log(sumUsers)