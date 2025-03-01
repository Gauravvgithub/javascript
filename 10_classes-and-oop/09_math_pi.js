const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor)
// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const newObjectCreate = {
    name: 'Cosmic',
    price: 1600,
    isAvailable: true,

    orderNow: function () {
        console.log('out of stock')
    }
}
// console.log(newObjectCreate)
console.log(Object.getOwnPropertyDescriptor(newObjectCreate, 'name'))

Object.defineProperty(newObjectCreate, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(newObjectCreate, 'name'))

for (let [key, value] of Object.entries(newObjectCreate)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`)
    }
}

