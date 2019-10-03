const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const users = [];

app.get('/', (req, res) => {
    res.render('main');
    // res.end('OK')
});

// console.log(__dirname);
// console.log(__filename);

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/register', (req, res) => {
    res.render('register')

});
app.post('/register', (req, res) => {
    const body = req.body;
    body['body_id'] = users.length + 1;
    users.push(body);
    console.log(body);

});


app.post('/login', (req, res) => {
    const body = req.body;
    users.forEach(user => {
        if (user.userName === body.userName & user.password === body.password){
            res.redirect()
        }
    })

});

app.all('*', (req, res) => {
    res.json('404 NOT FOUND')
});

app.listen(3000, () => {
    console.log('GO GO GO GO GO');
});

