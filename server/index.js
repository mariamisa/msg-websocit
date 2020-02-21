
const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`yoouy sre listen to the port http://localhost:${port}`)
})
