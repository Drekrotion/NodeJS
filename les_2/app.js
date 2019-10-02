const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
    res.render('main');
    // res.end('OK')
});

// console.log(__dirname);
// console.log(__filename);

app.get('/login', (req, res) => {
    res.end('LOGIN PAGE')
});

app.get('/register', (req, res) => {
    res.end('REGISTER PAGE')
});





app.all('*', (req, res)=> {
    res.json('404 NOT FOUND')
});

app.listen(3000, () => {
    console.log('3000-HELLO');
});

