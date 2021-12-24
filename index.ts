console.log('Request data........')

interface Data {
  server: string
  port: number
  status: string
  modified: boolean
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Prepearing data.........')

    const backendData: Data = {
      server: 'aws',
      port: 2000,
      status: 'working',
      modified: false
    }

    resolve(backendData)
  }, 2000)
})
  .then((data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })
  })
  .then((data: any) => {
    data.modified = true
    return data
  })
  .then((data: any) => {
    console.log('Modified', data)
  })
  .catch(err => console.error('Error: ', err))
  .finally(() => console.log('Finally'))
