// let myName = 'gaurav'
// console.log(myName.trueLength)


let myHero = ['thor','spiderman']

let heroPower = {
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.gaurav = function(){
    console.log(`gaurav is present in all objects`)
}

Array.prototype.heyGaurav = function(){
    console.log(`Gaurav says hello`)
}

// heroPower.gaurav()

// myHero.gaurav()
// myHero.heyGaurav()
// heroPower.heyGaurav() not work


// inheritance


const User = {
    name : 'raj',
    email : 'raj@google.com'
}
const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = '     GauravAurCode            '

String.prototype.trueLenght = function(){
    // console.log(`${this}`)
    console.log(`${this.trim()}`)
}
anotherUsername.trueLenght()
'       gaurav      '.trueLenght()
'       iceTea      '.trueLenght()
