// Date - 13/Feb/2025

// Reduce

const myNumbers = [1,2,3]

const myTotal = myNumbers.reduce((accumulator, currentValue)=>{
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator + currentValue
}, 0)

console.log(myTotal)

//Example

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:1999
    },
    {
        itemName:"mobile dev course",
        price:9999
    },
    {
        itemName:"data science course",
        price:12999
    }
]

const priceToPay = shoppingCart.reduce((accumulator, item)=>{
    return accumulator + item.price
},0)

console.log(priceToPay)