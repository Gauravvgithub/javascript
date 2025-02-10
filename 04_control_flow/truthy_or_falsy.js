// Date - 11/Feb/2025

const userEmail  = "g@gaurav.ai"

if (userEmail) {
    console.log("got user email")
} else {
    console.log("don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// check Empty array

const emptyArray = []

if (emptyArray.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Some Data in Array")
}

//check Epmty Object

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
} else {
    console.log("Object have some data")
}