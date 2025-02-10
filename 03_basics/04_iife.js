// Date - 10/feb/2025

// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife function
    console.log("DB CONNECTED")
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )("GAURAV")
