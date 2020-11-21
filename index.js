const express = require('express')
require('dotenv').config()
const moviesJson = require('./movies.json')

const app = express()

app.use(express.json())

app.get('/movies', (req, res) => {
  const searchValue = req.query.title || ''
  const movies = moviesJson
  const filteredMovies = movies.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  res.json(filteredMovies)


  res.json(movies)
})

app.get('/:name', (req, res) => {
  const name = req.params.name
  res.json({ message: `Hola ${name} desde Express` })
})

app.get('/', (req, res) => {
  const name = req.query.name || 'mundo'
  res.json({ message: `Hola ${name} desde Express` })
})

app.post('/', (req, res) => {
  const body = req.body
  res.json(body)
})

console.log(process.env.PORT)

const portito = process.env.PORT || 3001

app.listen(portito, () => {
  console.log(`Express App running in port ${portito}`)
})