var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
const path = require('path');

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://localhost:27017/SENG2021db'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

// Serve static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}
 
var port = process.env.PORT || 5000

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})