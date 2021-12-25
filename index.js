const log = text => `Log: ${text}`

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log(target)
    console.log(thisArg)
    console.log(args)

    return target.apply(thisArg, args).toUpperCase()
  }
})

console.log(fp('Hello world'))
