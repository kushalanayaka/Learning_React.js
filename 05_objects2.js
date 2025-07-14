/*
//singleton - 
const tinder = new Object()
//Non-singleton
const tinder1 = {}
console.log(tinder)
console.log(tinder1)
*/

const regularUser = {
    fullName : {
        userFullName  : {
            firstName : "Kushal",
            lastName : "James",
        }
    }
}
/*
console.log(regularUser.fullName.userFullName.firstName);

const obj1  = { 1: "one" , 2 : "Two"}
const obj2 = { 3 : "Three", 4: "Four"}

const obj3 = {obj1, obj2}
console.log(obj3)
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)
const obj5 ={...obj1, ...obj2}
console.log(obj5)
*/
//Database vlaues

const users = [
    {
        id:1,
        email:"K@gmail.com"
    },
    {
        id:2,
        email:"K@yahoo.com"
    },
    {
        id:3,
        email:"K@google.com"
    }
]

// console.log(users[2].email)

const amazonUser = {

    userId : 10002,
    userName : "James",
    userEmail : "k@amazon.com"
}

console.log(amazonUser)
console.log(Object.keys(amazonUser));
console.log(Object.values(amazonUser));
console.log(Object.entries(amazonUser));

console.log(amazonUser.hasOwnProperty('userId'));




