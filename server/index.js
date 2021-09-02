const express = require('express');
const mysql = require('mysql')
const PORT = process.env.PORT || 3001;
const app = express();

app.set('port', PORT);

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'moviedb'
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/movies', (req, res)=>{
    console.log("Connected to moviedb!");
    connection.query('SELECT * FROM movies', function (err, result) {
      if (err) throw err;
      res.send(result);
    });
})

app.listen(app.get('port'), () => {
  console.log(`Server listening on ${PORT}`);
});