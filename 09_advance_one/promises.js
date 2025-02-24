const { error } = require("ajv/dist/vocabularies/applicator/dependencies");

// 01. with variable
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Db calls, crptography, network
  setTimeout(function () {
    console.log("Async Task is Complete 1");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise  Consumed 1");
});

// 02. without variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise 2 Consumed");
});

// 03. pass parameter in resolve()

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "Gaurav",
      email: "gaurav@example.com",
      promies: 3,
    });
  }, 3000);
});

promiseThree.then(function (userData) {
  console.log(userData);
});

// 04. handling resolve and reject with if conditions and using finally function

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "Gaurav",
        email: "gaurav@example.com",
        promise: 4,
      });
    } else {
      reject("error:404");
    }
  }, 4000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

// 05. consuming promiseFive with async await

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "raj",
        email: "raj@example.com",
        promise: 5,
      });
    } else {
      reject("ERROR : JavaScript went wrong");
    }
  }, 5000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//---------------------------------------------------

async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log('ERROR: ', error)
    }
}
getAllUser()

//-----------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})

