// Date - 10/Feb/2025

//Arrow Function
//this is use for current context

const user = {
    username: "gaurav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);   
    }

}
// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "gaurav"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "gaurav"
//     console.log(this.username)
// }

// const chai =  () => {
//     let username = "gaurav"
//     console.log(this)
// }
// chai()


// Arrow function

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(5,5)) 

//Implicit return

// const addTwo = (num1, num2) => num1+num2

// console.log(addTwo(5,5)) 

// const addTwo = (num1, num2) => ( num1+num2 )

const addTwo = (num1, num2) => ({username:"gaurav"})

console.log(addTwo(2,2))
