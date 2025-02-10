// Date - 11/Feb/2025

//Operaters
/*
    < - less than, < - greater than, <=- greater than and equal, >= - small than and equal, == - double equal to - isEqual, != - not equal, === - triple equal - also check typeof.
*/

//if

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50")
// } else{
//     console.log("tempertrue is greater than 50")
// }


//scope related topic
// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
//     console.log(`User Power: ${power}`);

//Short Hand Notation

// const balance = 1000

// if (balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


//-----------------------------------------------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("allow to buy courses")
}

if (loggedInFromEmail||loggedInFromGoogle) {
    console.log("userLoggedIn")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 40 ?? 20

console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

