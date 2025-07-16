// IIFE -  Immediatelly Invoked Function Expression 

function newYear (){
    console.log(`Happy new year`)
}
// newYear()

(function newYear1 (){ //named IIFE
    console.log(`Happy new Year`)
})();
// ()() - first () used to avoid the global veriable pollution , second () used to call the function

( () => { //UNNAMED IIFE
  console.log (`Avdvance happy new year`)
})();

( (name) => { //parameter IIFE
    console.log(`${name} is my name`)
})("Kushal")