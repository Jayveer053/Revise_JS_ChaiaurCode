/* The Problem is to remove the extras scpces in the name without using
trim method */



/*
let myName = "Jayveer   "
let Mychannel = "Chai or code     "

console.log(myName.trim().length)
*/


let myHeros = ["Thor","Spiderman"]

let heroPower = {
    thor :"Hammer",
    spiderman:"Sling",



    getSpiderPower:function(){
        console.log(`Spider Power Is ${this.spiderman}`)
    }



}





Object.prototype.hitesh = function(){
    console.log("Hitesh is present in all objects")
}

Array.prototype.heyHitesh = function(){
    console.log("Hitesh says hello")
}


// heroPower.hitesh()
// myHeros.hitesh()

// myHeros.heyHitesh()
// heroPower.heyHitesh()



// inheritence


const user = {
    name: "Jayveer",
    email:"jayveereepal2@gamil.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "Js Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user


// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


