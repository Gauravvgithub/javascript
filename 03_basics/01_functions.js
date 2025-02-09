// Date - 09/Feb/2025

// Functions

function sayMyName(){
    console.log("Gaurav");
}
// sayMyName()

//00

// function addTwoNumbers (Number1,Number2)  {
//     console.log(Number1+Number2);
// }
// addTwoNumbers(2,3)

//01

function addTwoNumbers (Number1,Number2)  {

    // let result = Number1 + Number2
    // return result

    return Number1 + Number2

}

const result = addTwoNumbers(2,8)
// console.log("Result :", result);


// 02 // if else introduction
function loginUserMessage(username = "kuch toh naam hoga apka isliye apne"){

    if(username===undefined){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in kra ha`
}

// console.log(loginUserMessage("Gaurav"))
// console.log(loginUserMessage())

//--------------

//addtocart

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,600));

const user = {
    username:"gaurav",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

// handleObject({
//     username:"raj",
//     price:199
// })

const myNewArray = [200,300,500,700]

function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,500,700]));


