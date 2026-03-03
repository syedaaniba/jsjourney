//Create a closure which has one inner function
// encapsulation 
function greetings() {
    let name= "Aniba"

    return function() {
        return name
    }
}
let hello = greetings()
console.log(hello())

// practice 

function multiplier (num) {

    return function(factor) {
        return num * factor
    }
}
let doubler = multiplier(2)
let tripler = multiplier(3)
console.log(doubler(2))
console.log(tripler(3))

//Create a closure which has three inner functions
function greeting (name) {
    let count = 0;
   function getName () {
    return name
   }
   function incCount () {
    return count++;
   }
   function getBoth () {
    return {count , name}
   }

   return {
    getName,
    incCount,
    getBoth
   }
}
const hey = greeting("Aniba")
hey.incCount();
hey.incCount();
console.log(hey.getName())