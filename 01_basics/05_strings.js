// Date - 06/Feb/2025

const name = 'gaurav'
const repoCount = 5

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // known as string interpoletion


const gameName = new String('gaurav-raj-in')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    gaurav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gaurav.com/gaurav%20vscodetesting"

console.log(url.replace('%20', '-'));

console.log(url.includes('%20'));

console.log(gameName.split('-',2));

















