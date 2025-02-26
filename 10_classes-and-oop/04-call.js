function SetUsername(username){
    //complex Db calls
    this.username = username
    console.log('called')
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    // this.username = username
    this.email = email
    this.password = password
}

const items = new createUser('raje', 'raje@meta.com', 'raje@12345')
console.log(items)