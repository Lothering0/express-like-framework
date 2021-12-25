class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const CP = new Proxy(Person, {
  construct(target, args) {
    console.log(target)
    console.log(args)

    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting: ${prop}`)

        return t[prop]
      }
    })
  }
})

const something = new CP('Alex', 22)

console.log(something.name)
