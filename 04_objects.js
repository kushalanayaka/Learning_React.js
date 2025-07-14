//singleton
//Object.create
//Object literals
const mySy = Symbol("key1") 
const JsUser = {
    name : "Kushal",
    "full name" : "Kushala Nayaka",
    [mySy] : "MyKey1",
    age : 21,
    email : "k@gmail.com",
    isLoggedIn : true,
    lastLoginDay : ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySy]) //important

//freez
/*
JsUser.email = "kush@gmail.com"
console.log(JsUser)
Object.freeze(JsUser)
JsUser.email = "kushal@chatgpt.com"
console.log(JsUser)
*/
//function in objects
JsUser.greeting =  function (){

    console.log("Hello JS user")
}
JsUser.greetingtwo = function(){
    console.log(`Hello JS user, I am ${this.name}`)
}

// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())
