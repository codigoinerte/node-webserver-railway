const express = require('express')
const hbs = require('hbs');
const app = express()
require('dotenv').config();

const port = process.env.PORT;

// TODO: require('hbs');


//handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico : middleware

app.use(express.static('public'));


app.get('/',  (req, res) => {
  res.render('home',{
    nombre:'Fredy',
    titulo:'Curso de Node'
  });
})

app.get('/elements',  (req, res) => {
  // res.sendFile(__dirname + '/public/elements.html')
  res.render('elements',{
    nombre:'Fredy',
    titulo:'Curso de Node'
  });
})
app.get('/generic',  (req, res) => {
  // res.sendFile(__dirname + '/public/generic.html')
  res.render('generic',{
    nombre:'Fredy',
    titulo:'Curso de Node'
  });
})
// app.post('/generic',  (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })

app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})