
let a = 10
const b = 20 
var c = 30

if (true){
    let a = 100
    const b = 200
    var c = 300 // only var changed 
}
// console.log(a);
// console.log(b);
// console.log(c);
/*
function one(){

    const name = "Oggy"
    function Two (){
        const brother = "Jack"
        console.log(`${name} is a cartoon`);
    }
    // console.log(brother) //can't access outside the scope
    // Two()
}
// one()
*/
if(true){
    const firstName = "James"
    if(firstName === "James"){
        const lastName = "Bond"
        // console.log(firstName + lastName);
    }
    // console.log(lastName);  
}
// console.log(firstName);

// console.log("OkOk")


// ********************
console.log(addOne(5))
function addOne(num1){
    return num1 + 1
}

// addTwo() // can't access the function before initialization , when it stored in variable (Hoisting)
const addTwo = function(num1){
    return num1 + 2
}
addTwo()
