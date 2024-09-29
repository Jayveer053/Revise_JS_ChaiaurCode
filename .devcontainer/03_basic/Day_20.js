/*
function calculateCarPrice(value1,value2, ...num1){
    return value1 + value2 + num1
}

console.log(calculateCarPrice(200,400,900,876))
*/

const user = {
    username:"Jayveer",
    price: 2000
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}


/*
handleObject({
    username:"Shivam",
    price:20000;
})
*/

const myNewArray = [2000, 4000, 1000, 600]
function returnSecondValue(getArray){
    return getArray[1]
}