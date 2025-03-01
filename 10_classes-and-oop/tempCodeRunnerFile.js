Object.defineProperty(newObjectCreate, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(newObjectCreate, 'name'))