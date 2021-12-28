const Router = require('../framework/Router')
const { getUsers, createUser } = require('../controllers/user-controller')
const router = new Router()

router.get('/users', getUsers)

router.post('/users', createUser)

module.exports = router
