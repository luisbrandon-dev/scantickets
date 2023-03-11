const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Prueba de ruta /')
})

app.listen(port, () => {
  console.log(`Escuchando en ${port}`)
})