const app = require('./index')

const PORT = 3000

app.get('/', (req, res) => {
  return res.send({ message: 'api on line' })
})


app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`))