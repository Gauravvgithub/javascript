//Date - 12/Feb/2025

const myObject={
    js:"javascript",
    py:"python",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

// For in Loop On Object

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`)
}

// For in Loop on Array

const programming = ["js", "cpp", "py", "java", "rb"]

for (const key in programming) {
    // console.log(programming[key])
}


// For in Loop on Map //  not allowed on Map

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United State Of America")
// map.set("FR", "France")

// for (const key in map) {
//     console.log(key)
// }