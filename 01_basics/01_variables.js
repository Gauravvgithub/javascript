// Date - 01/Feb/2025

const accountId = 12345
let accountEmail = "gaurav@gmail.com"
var accountPassword = 112233
accountCity = "Alwar"

let accountState;


/*
var use nhi krna
because of issue in block scope and functional scope
*/

// accountId = 98745 // not allowed 

accountEmail = "gaurav@123google.com"
accountPassword = 65498
accountCity = "jaipur"


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountState])