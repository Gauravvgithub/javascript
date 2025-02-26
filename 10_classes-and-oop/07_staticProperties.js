class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const gaurav = new User('gaurav')
// console.log(gaurav.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const data = new Teacher('hansu', 'hansu@google.com')
console.log(data.createId())