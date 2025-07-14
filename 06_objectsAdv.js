//Destructuring

const course = {

    courseName : " JavaScript",
    price : "10000",
    mode : "online"

}

const {courseName : name} = course //destructuring
console.log(name);


 /*// destructuring used in react
const use = ({obj}) => {

}
use(obj = "kush") */

//API

//json
// {
//     name : "James",
//     courses : "JS",
//     price : 21
// }