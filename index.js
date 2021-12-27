const os = require('os')
const cluster = require('cluster')

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker with pid=${worker.process.pid} was died :(`)
    cluster.fork()
  })
} else {
  console.log(`Worker with pid=${process.pid} was started`)

  setInterval(() => {
    console.log(`Worker with pid=${process.pid} working now`)
  }, 5000)
}



console.log(process.pid)
