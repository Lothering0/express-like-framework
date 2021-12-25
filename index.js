const obj = {
  [Symbol.iterator]() {
    let i = 0

    return {
      next() {
        if (i < 10) {
          return {
            value: i++,
            done: false
          }
        }

        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

for (let i of obj) {
  console.log(i)
}

/* const iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0

    return {
      next() {
        if (i < n) {
          return {
            value: ++i,
            done: false
          }
        }

        return {
          value: undefined,
          done: true
        }
      }
    }
  }
} */

/* function* iter(n = 8) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

for (let k of iter()) {
  console.log(k)
}
 */