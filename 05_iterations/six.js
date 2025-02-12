// Date - 13/Feb/2025

// For each Loop

const coding = ["js", "ruby", "python", "java", "cpp"];

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)

// Filter in Array (basic)

/*

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNumbs = myNums.filter( (num)=> {
    return num > 4
} )

console.log(newNumbs)

*/

// forEach in filter method

/*
const newNumbers = [1,2,3,4,5,6,7,8,9,10]
const emptyNumbers = []

newNumbers.forEach((numbers)=>{
    if (numbers > 4) {
        emptyNumbers.push(numbers)
    }
})

console.log(emptyNumbers)

*/

// Filter Exercise(Practice)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((kitab)=>{
    return kitab.genre === "History"
})

 userBooks = books.filter((kitab)=>{
    return kitab.publish >= 1995 && kitab.genre === "History"
})

console.log(userBooks)