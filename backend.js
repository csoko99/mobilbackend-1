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



  app.get('/mindenadat', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'autozarodoga'
    })
    
    connection.connect()
    
    connection.query('SELECT * FROM `marka` INNER JOIN tipus ON marka.marka_id=tipus.tipus_id', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
  })


    app.post('/nissan', (req, res) => {


      
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'autozarodoga'
    })
    
    connection.connect()
    
    connection.query('SELECT * FROM autok where tipus_marka= '+req.body.bevitel1+' )', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})