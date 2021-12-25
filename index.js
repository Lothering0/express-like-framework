const userData = [
  { id: 1, name: 'John', age: 25, job: 'Fullstack' },
  { id: 2, name: 'Alex', age: 22, job: 'Student' },
  { id: 3, name: 'George', age: 23, job: 'Backend' },
  { id: 4, name: 'John', age: 24, job: 'Assenizator' },
]

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach(i => index[i.id] = i)

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push': return item => {
            index[item.id] = item
            arr[prop].call(arr, item)
          }
          case 'findById': return id => index[id]
          default: return arr[prop]
        }
      }
    })
  }
})

const users = new IndexedArray(userData)

users.push({ id: 5, name: 'Frank' })

console.log(users.findById(5))
