const User = {
    _email: 'gaurav@insta.ai',
    _password: 'abc@123',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    }

}

const userDetails = Object.create(User)
console.log(userDetails.email)