interface Options {
  name: string
  age: number
  hasTail: boolean
}

class Animal implements Options {
  public name: string
  public age: number
  public hasTail: boolean

  constructor({ name, age, hasTail }: Options) {
    this.name = name
    this.age = age
    this.hasTail = hasTail
  }
}
