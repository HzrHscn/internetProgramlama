const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = 3000
const hostname = '127.0.0.1'

require('./db')

app.use(require('./routes/taleps')) //root klasöründen taleps.js dosyasını app dosyasında calistirdik

app.use(require('./routes/Users'))  //root klasöründen users.js dosyasını app dosyasında calistirdik

app.use(require('./routes/futbolcus'))  //root klasöründen futbolcus.js dosyasını app dosyasında calistirdik

/*mongoose.connect('mongodb://127.0.0.1/veritabani', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})*/

app.use(express.static('public')) //static dosyalarımız public dosyasının iceride bilgisini verdik

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
const main = require('./routes/main')
//const taleps= require('./routes/taleps')
app.use('/', main)
//app.use('/taleps',taleps)


app.listen(port, hostname, () =>{
    console.log(`Server Çalışıyor, http://${hostname}:${port}/`)
})
