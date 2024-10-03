/*
function multipleBy5(num){
     return num ** 5
    

}
multipleBy5.power = 2
console.log(multipleBy5(3))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)
*/


function createUser(userName, Score){
    this.username = userName;
    this.Score = Score;
}

createUser.prototype.increment = function(){
    this.Score++
    console.log(`The new Price of the chai:  ${this.Score}`)
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.Score}`)
}


const chai =  new createUser("chai",23)
const tea = createUser("tea",250)

// chai.printMe()
chai.increment()