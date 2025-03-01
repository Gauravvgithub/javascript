function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

const userDetails = new User('gaurav@meta.in', 'gaurav@123')
console.log(userDetails.email)
console.log(userDetails.password)