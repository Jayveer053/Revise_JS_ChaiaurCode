// Arrow Function In JavaScript And This Keyword In JavaScript

/*
const user = {
    username: "Jayveer",
    price:10000,


    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
user.username = "Shivam"
user.welcomeMessage()
*/

// console.log(typeof this)


/*
function chai(){
    let username = "Jayveer Pal"
    // return this.username
    console.log(`The Username of the client is: ${this.username}`)
}
chai()
*/

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(89,77)) 