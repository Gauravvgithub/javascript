//Date - 10/Feb/2025

// Scope

var c =300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope

function one(){
    const username = "gaurav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username = "gaurav"
    if (username === "gaurav") {
        const website = " youtube" 
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);ṇ


// Example -------- Interesting ---------

console.log(addOne(2))
function addOne(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(1))

