const express = require('express');
const app = express();
const path = require('path');
const publicFolderPath = path.resolve('public');

app.use(express.static('./public'));
app.use(express.static(publicFolderPath));

const APP_PORT = process.env.PORT||5001;

 app.listen(APP_PORT, ()=>{
    console.log('Servidor funcionando en puerto 5001');
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve('views/home.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve('views/register.html'))
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
});