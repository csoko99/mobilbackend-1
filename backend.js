const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(express.static('kepek'))

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tipus', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'autozarodoga'
    })
    
    connection.connect()
    
    connection.query('SELECT * from tipus', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
})



  app.get('/marka', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'autozarodoga'
    })
    
    connection.connect()
    
    connection.query('SELECT * from marka', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
  })


  /*app.post('/szavazatfelvitel', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'marveladatb'
    })
    
    connection.connect()
    
    connection.query('insert into szavazat values (null, '+req.body.bevitel1+' )', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()


  
  })*/



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})