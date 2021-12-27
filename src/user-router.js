const Router = require('../framework/Router')

const router = new Router()

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' }
]

router.get('/users', (req, res) => {
  res.end(JSON.stringify(users))
})
