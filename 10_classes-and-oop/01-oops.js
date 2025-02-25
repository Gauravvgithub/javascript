// Object literals

const user = {
    username:'gaurav',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from DB')
        // console.log(this)
        // console.log(`Username: ${this.username}`)
    } 
}
// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this)


// 02. Constructor

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome : ${this.username}`)
    }

    // return this
}

const userOne = new User('Gaurav', 4, true)
const userTwo = new User('ChaiAurCode', 6, false)
console.log(userOne.constructor)
console.log(userTwo)