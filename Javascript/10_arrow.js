const User = {
    name: "James",
    price: 1000,

    greeting : function(){

        console.log(`${this.name} , welcome to website`);
        console.log(this); //this accessableonly inside the node{ }
        
    }
}

// User.greeting()
// User.name = "Kushal"
// User.greeting()

// console.log(this);

function store(){
    storeName : "Svm"
    console.log(this);// this is not appicable in function, used only in objects
    console.log(this.storeName)
}
// store()
//Arrow functions

const School = function (){
       console.log("welcome");
    
}
// School()

const School1 = () => {
    console.log("Welcome to school");
}
// School1()

//explicit
const add = (num1, num2) => {
    return num1 + num2
}
// console.log(add(12, 98));

//inplicit
const add1 = (num1, num2) => num1 + num2
// console.log(add1(34,76))

// const person = (name) => {
//    console.log (this.name)
//    console.log(this);
// }
// person()

const person = () => ({userName : "Kushal"}) //we use { } , objects are declared