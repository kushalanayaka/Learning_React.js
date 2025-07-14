const Arr = [0,1,2,3,4,5,6, true, "kushal"]
const Arr1 = [2,3,4,5,6,89]



// console.log(Arr1[2])

//Array Methods
// console.log(Arr1)
// Arr1.push(99)
// Arr1.push(77)
// Arr1.pop()
// Arr1.unshift(1)
// Arr1.shift()
/*
console.log(Arr1.indexOf(89))
console.log(Arr1.includes(55))

console.log(Arr1)

const newArr = Arr1.join()
console.log(typeof newArr)
console.log(newArr)*/

//slice , spice

console.log("A ", Arr1)

const myArr1 = Arr1.slice(1, 3)// it not considers last element
console.log("B ", Arr1)
console.log("B ", myArr1)



const myArr2 = Arr1.splice(1, 3) // it considers last element for the given numbers and manuplate the original array
console.log("C ", Arr1)
console.log("C ", myArr2)



