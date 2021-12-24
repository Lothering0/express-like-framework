namespace Animal {
  export interface Options {
    name: string
    age: number
    hasTail: boolean
  }

  export interface IAnimal extends Options {
    voice: () => void
  }

  export interface ICat extends Options {
    color: string
    ageInfo?: number
  }
}

namespace Animal {
  abstract class Animal implements IAnimal {
    static type = 'animal'.toUpperCase()

    name: string
    age: number
    hasTail: boolean

    constructor({ name, age, hasTail }: Options) {
      this.name = name
      this.age = age
      this.hasTail = hasTail
    }

    voice(): void {
      console.log(this.name)
    }
  }

  export class Cat extends Animal implements ICat {
    static type = 'cat'.toUpperCase()

    color: string

    constructor({ color, ...config }: ICat) {
      super(config)
      this.color = color
    }

    get ageInfo() {
      return this.age * 7
    }
  }
}

const cat: Animal.ICat = new Animal.Cat({
  name: 'Cat',
  age: 5,
  hasTail: true,
  color: 'black'
})

console.log(cat.ageInfo)
