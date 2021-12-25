/* interface Human {
  name: string
  age: number
  job: string
}

// Objects
const person: Human = {
  name: 'John',
  age: 25,
  job: 'Fullstack'
}

const op = new Proxy(person, {
  get(target, prop): any {
    return target[prop]
  }
})
 */