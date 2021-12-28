const userRouter = require('./routes/user-router')
const Application = require('./framework/Application')
const parseJson = require('./middleware/parseJson')
const parseUrl = require('./middleware/parseUrl')

const PORT = process.env.PORT || 5000

const app = new Application()
app.use(parseJson)
app.use(parseUrl(`http://localhost:${PORT}`))

app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
