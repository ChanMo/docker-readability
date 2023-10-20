const express = require('express')
const fetch = require('node-fetch')
const {Readability} = require('@mozilla/readability')
const {JSDOM} = require('jsdom')

const app = express()
const PORT = 3000
const HOST = '0.0.0.0'


app.get('/', async(req, res) => {
  url = req.query.url
  if(!url) {
    throw new Error('URL IS MISSING')
  }
  let text = '';
  try {
    const res = await fetch(url)
    text = await res.text()
  } catch(err) {
    console.log(err);
  }
  const doc = new JSDOM(text, {
    url: url
  })
  const reader = new Readability(doc.window.document)
  res.send(reader.parse());
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
