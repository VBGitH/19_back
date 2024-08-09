
const express = require('express')
const app = express()
const port = 3300

var cors = require('cors')

//require('dotenv').config()

//app.use('/', express.static('public'));
app.use(cors())

app.get('/', async (req, res) => {
  res.send('Lesson 19 server (back-end)')
})

app.get('/api/product', async (req, res) => {
  res.json({
    name: 'Омлет по-итальянски',
    description: 'Вкусный омлет на завтрак'
  })
})  

app.listen(port, () => {
  console.log(`Lesson 19 on http://localhost:${port}`)
})
