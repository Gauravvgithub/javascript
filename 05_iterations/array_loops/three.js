// Date - 12/Feb/2025

// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log("i found space in greetings")
        break;
    }
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State Of America")
map.set("FR", "France")
// console.log(map)

// For Loop on Map

for (const [key, value] of map) {
    console.log(key, '->', value )
}


// For of Loop not working on objects 

// const myObject = {
//     "game1":"NFS",
//     "game2":"Spierman"
// }

// for (const [key, value] of myObject) {
//     console.log(key, "->",value)
// }

