const express = require('express')
const app = express()

const calc = require('./calc.js')

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/articles', function(req, res) {
  const input1 = parseInt(req.params.input1)
  const input2 = parseInt(req.params.input2)

  const result = articles.getAll()

  res.send(result.toString())
})

app.get('/article/:input1', function(req, res) {
  const input1 = parseInt(req.params.input1)

  const result = article.getArticle(input1)

  res.send(result.toString())
})
