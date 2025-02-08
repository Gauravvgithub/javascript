// Date - 08/Feb/2025

// Singleton
// Object.create


const mySym = Symbol("Key1")


//object literals
const Jsuser = {
    name: "Gaurav",
    "full name": "Gaurav Raj",
    [mySym]: "mykey1",
    age: 18,
    location: "kashmir",
    email: "gaurav@google.com",
    IsLoggedIn: false,
    lastLoginDay: ["monday", "saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(typeof Jsuser[mySym]);

Jsuser.email = "gaurav@meta.com"
// console.log(Jsuser.email);
// Object.freeze(Jsuser)
Jsuser.email = "gaurav@microsoft.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS User");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

