const { jsx } = require("react/jsx-runtime");

const promiseOne = new Promise(function(reslove, reject){
    //do an Async task
    //do call DB, cryptography, network
    setTimeout(function(){
        console.log("Async is complete");
        reslove()
        
    }, 1000)  
})

promiseOne.then(function(){
    console.log("Async is consumed");
    
})


new Promise(function(reslove, reject){
    setTimeout(function(){
        console.log("Async task 2");
        reslove()
    }, 1000)
})
.then(function(){
    console.log("Async taks2 consumed");
    
})
//to pass the data
const promiseThree = new Promise(function(reslove, reject){

    setTimeout(function(){
        reslove({
            userName : "Kushal",
            email : "kushal@google.com"
        })
    }, 1000)
})

promiseThree.then(function(user){ // this attribute for resolve parameter
    console.log(user);
    
})

const promiseFour = new Promise(function(reslove, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            reslove({name : "James", password: "123"})
        }else{
            reject('Error, Something wrong')
        }
    }, 1000);
})

//nested 'then'
promiseFour.then((user) => {
    console.log(user.name);
}).then((name) =>{
    console.log(name);
}).catch((error) =>{
    console.log(error);   
})
.finally(() => console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(reslove, reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            reslove({ Movie : "Ranna", year : 2016})
        }else{
            console.log("ERROR: something went wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    
    // const recesive = await promiseFive
    // console.log(recesive);

    //using try catch block

    try {
        const recesive = await promiseFive
        console.log(recesive);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


//fetch data 

/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data =  await response.json()
        console.log(data);
        
     } catch (error) {
           console.log("Error: ", error);   
    }
}
getAllUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))