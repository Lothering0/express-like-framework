const fs = require('fs')
const path = require('path')

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    return fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }

      resolve()
    })
  })
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    return fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }

      resolve()
    })
  })
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
  .catch(err => console.log(err))
