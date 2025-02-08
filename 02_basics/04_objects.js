// Date - 09/Feb/2025

// const metaUser = new Object() // singleton object

const metaUser = {}

metaUser.id = "123abc"
metaUser.name = "raj"
metaUser.isLoggedIn = false


// console.log(metaUser);

const regularUser = {
    email: "raj@google.com",
    fullname: {
        userfullname:{
            firstname:"gaurav",
            lastname:"raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"a@google.com"
    },
    {
        id:1,
        email:"a@google.com"
    },
    {
        id:1,
        email:"a@google.com"
    }
]
user[1].id
console.log(metaUser);

console.log(Object.keys(metaUser));
console.log(Object.values(metaUser));
console.log(Object.entries(metaUser));

console.log(metaUser.hasOwnProperty('isLoggedIn'));
console.log(metaUser.hasOwnProperty('isLogged'));





