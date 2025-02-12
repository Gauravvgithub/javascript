// Date - 13/Feb/2025

// Map

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.map((num)=>{
    return num +10
})
// console.log(newNumbers)



// Chaining in Map

const numArray = [1,2,3,4,5,6,7,8,9,10]

const newArray = numArray.map((items)=>{
    return items * 10
}).map((items)=>{
    return items + 1 
}).filter((items)=>{
    return items >= 40
})


console.log(newArray)




