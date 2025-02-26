// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userData = new User('gaurav', 'gaurav@google.com', '@123' )
console.log(userData.encryptPassword())
console.log(userData.changeUsername())

// behind the scene and 2nd way to do this !!

function User2(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const userData1 = new User2('raj', 'raj@google.com', '@456' )
console.log(userData1.encryptPassword())
console.log(userData1.changeUsername())