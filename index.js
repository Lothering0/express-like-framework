const userRouter = require('./src/user-router')
const Application = require('./framework/Application')
const jsonParser = require('./middleware/parseJson')

const PORT = process.env.PORT || 5000

const app = new Application()
app.use(jsonParser)

app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
