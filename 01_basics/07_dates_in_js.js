//Date - 06/Feb/2025

//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 1, 7) 
// let myCreatedDate = new Date(2025, 1, 7, 17,2) //with time 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let myBookedDate = new Date("07-02-2025")
// console.log(myBookedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());

console.log(`And today is ${newDate.getDate()} `/* interpoletion */);

newDate.toLocaleString('default',{
    weekday:"short"
})
console.log(newDate);











