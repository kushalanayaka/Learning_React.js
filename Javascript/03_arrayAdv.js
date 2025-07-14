const marvel_heros = ["Iron man", "Spiderman", "Thor"]
const dc_heros = ["Superman", "Batman", "BlackPanter"]

//push

// dc_heros.push(marvel_heros)
// console.log(dc_heros);
// console.log(dc_heros[3][0])

//concat
/*
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)
console.log(allHeros[4])
*/
//spread
/*console.log(marvel_heros, dc_heros)
const Array = [...marvel_heros, ...dc_heros]
console.log(Array)*/

//flat
/*
const multiArray = [1,23,[4,6,43,7],44,3,223,[23,5,6,[1,2]]]
console.log(multiArray)
const allMultiArray = multiArray.flat(Infinity)
console.log(allMultiArray)
*/

console.log(Array.isArray("dc_heros"))
console.log(Array.from("Kushal"))
console.log(Array.from({name: "Kushal"}))

let score1 = 100
let score2 =  200
let score3 = 300

console.log(Array.of(score1, score2, score3))