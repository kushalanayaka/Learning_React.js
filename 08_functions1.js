function ShoppingCart(...num1){
    console.log(num1)
    
}
// console.log(ShoppingCart(100, 200, 300, 400))

const Obj = {
    name : "James",
    age : 21 //aware of name convactions
}

function Details (){
    console.log(`Username is ${Obj.name} and age is ${Obj.age}`)
}
// Details()
function Details1 (anyUser){
    console.log(`Username is ${anyUser.name} and age is ${anyUser.age}`)
}
// Details1(Obj)
Details1({
    name : "Kushal",
    age: 22
})

const myArray = [1000,2000,3000,4000]

function returnSecondArray (getArray){
    return getArray[2]
}
// console.log(returnSecondArray(myArray))
console.log(returnSecondArray([100,200,300,400]));
