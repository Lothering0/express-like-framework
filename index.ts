console.log('Request data........')

interface Data {
  server: string
  port: number
  status: string
  modified: boolean
}

setTimeout(() => {
  console.log('Prepearing data.........')

  const backendData: Data = {
    server: 'aws',
    port: 2000,
    status: 'working',
    modified: false
  }

  setTimeout(() => {
    backendData.modified = true

    console.log('Data received', backendData)
  }, 2000)
}, 2000)
