const express = require('express');
const app  = express();
const hbs = require('hbs');
//helpers
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (res,req) =>{

    req.render('home', {nombre:'ricardo diaz'});
});

app.get('/about', (res,req) =>{

    req.render('about');
});

app.listen(3000,()=> {
    console.log('Escuchando peticiones en el puerto 3000');
})