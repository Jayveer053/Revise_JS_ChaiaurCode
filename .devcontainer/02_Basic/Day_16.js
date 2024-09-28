// Singleton

// Objects Literals

// Object.create
const mysum = Symbol("key1")
const jsUser = {
    name:"Jayveer",
    age:21,
    [mysum]:"Mykey1",
    location: "Bareilly",
    email:"Jayveerpal22223@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(jsUser["email"])
console.log(jsUser[mysum])


jsUser.eamil = "Shivam@goole.com";




// jsUser.greeting = function(){
//     console.log("Heelo World")
// }

// console.log(jsUser.greeting())


jsUser.greeting = function(){
    console.log(`Hello User, ${this.name}`)
}
console.log(jsUser.greeting())