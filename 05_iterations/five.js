// Date - 12/Feb/2025

// For Each Loop

// On Array

const coding = ["js", "ruby", "python", "java", "cpp"]


// With normal funtion // it runs

// coding.forEach(function (item) {
//     console.log(item)
// })

// With arrow function // it runs

// coding.forEach( (item) => {
    // console.log(item);
// })

// Function pass on in foreach loop // it runs

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)


// For each Loop all three propertites

/*

value
index
array

*/

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )

// For each loop on array nested by objects // [ {}, {}, {} ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName)
} )