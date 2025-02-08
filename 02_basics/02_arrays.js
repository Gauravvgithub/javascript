// Date - 08/Feb/2025

const marvel_heros = ["thor","ironman","spiderman","captain"]
const dc_heros = ["batman","superman","flash","antman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[4][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//Spread Operater

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// Flat Operater

const anotherArr = [1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

const real_another_array = anotherArr.flat(Infinity)
// console.log(real_another_array);




console.log(Array.isArray("gaurav"))
console.log(Array.from("gaurav"))
console.log(Array.from({name:"gaurav"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
