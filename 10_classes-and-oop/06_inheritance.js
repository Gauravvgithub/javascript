class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const userData = new Teacher('gaurav', 'gaurav@gmail.com', 'gaurav123')
userData.addCourse()

const userData2 = new User('raj')
userData2.logMe()

console.log(userData instanceof Teacher)
console.log(userData instanceof User)
