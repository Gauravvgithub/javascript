
/* Date - 05 / feb / 2025*/

//  Primitive Data Type


// 7 types 
 /*
 1.String
 2.Number
 3.Boolean
 4.Null
 5.Undefined
 6.Symbol
 7.BigInt
 */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 987654321654987325243541n




// JavaScript is a Dynamically Type language

 // Reference type (also known as Non Primitive data type)

 // 1 . Array
 // 2 . Objects
 // 3 . Functions

const hero = ["shaktiman", "naajraj", "doga"] // array

let myObj={
    name : "gaurav",
    age : 22,
} // Objects


// Functions 

const myFunction =  function (){
    
    console.log("Hello World! My name is Gaurav");

}


console.log(typeof hero);

//-------------------------------------------------MEMORY CONCPACT----------------------------------

// STACK (PRIMITIVE), HEAP (NON-PRIMITIVE)

let myLaptopName = "Nitro"


let anotherLaptopName = myLaptopName
anotherLaptopName = "gaurav's pc"

console.log(myLaptopName);
console.log(anotherLaptopName);
// above all in stack memory


//-----HEAP-------

let userOne = {
    email: "gaurav@google.com",
    key: "gaurav123"
}

let userTwo = userOne

userTwo.email = "raj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


