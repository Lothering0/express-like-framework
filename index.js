"use strict";
var Animal;
(function (Animal_1) {
    class Animal {
        constructor({ name, age, hasTail }) {
            this.name = name;
            this.age = age;
            this.hasTail = hasTail;
        }
        voice() {
            console.log(this.name);
        }
    }
    Animal.type = 'animal'.toUpperCase();
    class Cat extends Animal {
        constructor({ color, ...config }) {
            super(config);
            this.color = color;
        }
        get ageInfo() {
            return this.age * 7;
        }
    }
    Cat.type = 'cat'.toUpperCase();
    Animal_1.Cat = Cat;
})(Animal || (Animal = {}));
const cat = new Animal.Cat({
    name: 'Cat',
    age: 5,
    hasTail: true,
    color: 'black'
});
console.log(cat.ageInfo);
