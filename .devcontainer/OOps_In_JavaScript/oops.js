
/*
const user = {
    username: "Jayveer",
    loginCount:8,
    signIn:true,


    getUserDetails: function(){
        // console.log("Got user details from database: ");
        console.log(`UserName: ${this.username}`);
        console.log(this)
    }
}
*/

// console.log(user.username)
// console.log(user.getUserDetails())




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting =  function(){
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }

    return this
}

// const userone = new User("Jayveer",9,true)
// console.log(userone)

const usertwo = new User("Shivam",8,false)
console.log(usertwo)
console.log(User.greeting())