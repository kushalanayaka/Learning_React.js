
function sayMyName (){
   
    console.log("H");
    console.log("A");
    console.log("P");
    console.log("P");
    console.log("I");
    console.log("E");
    console.log("R");
}
// sayMyName()
/*
function addition (num1,num2){
    console.log(num1 + num2)
}

// addition(23, 4)
// addition(12, "1")
// addition(3, "k")
// addition(3, null)

// const result = addition(2 ,3)
// console.log(result);

function add (num1 , num2){
    // let result = num1 + num2
    // return result 
    return num1 + num2
}
const result = add(2, 19)
console.log(result);
*/

function Account (userName){
    return `${userName} is logged in.`
}
// console.log(Account("Kushal"));

function Account (userName){
    return `${userName} is logged in.`
}
// console.log(Account()); //undefined

function Account (userName){
    if(!userName){ // userName === undefined 
        console.log("Please enter user name: ");
        return
    }
    return `${userName} is logged in.`
}
// Account()
// console.log(Account());





