// console.log("J");
// console.log("A");
// console.log("Y");
// console.log("V")
// console.log("E")
// console.log("E");
// console.log("R")

// function sayMyName(){
// console.log("J");
// console.log("A");
// console.log("Y");
// console.log("V")
// console.log("E")
// console.log("E");
// console.log("R")

// }

// sayMyName()


// function addTwoNumber(number1, number2){
//     console.log( number1 + number2);
// }

// const result = addTwoNumber(3,9)
// console.log(`Result: ${result}`)



/*
function addTwoNumber(number1, number2){
    let result = number1 + number2;
    return result
    // console.log( number1 + number2);
}

const result = addTwoNumber(3,9)
console.log(`Result: ${result}`)
*/



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a Username: ");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())