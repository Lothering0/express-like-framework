const person = {
  name: 'John',
  age: 25,
  job: 'Fullstack'
}

const op = new Proxy(person, {
  get(target, prop) {
    console.log(target)
    console.log(prop)
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['age', ',,,', 'name', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Deleting', prop)
    delete target[prop]
  }
})

delete op.age
// op.age = 123
console.log(op.age)
