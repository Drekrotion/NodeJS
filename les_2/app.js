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

app.get('/user/:userID', (req, res) => {
    const userSer = users.find( user => +req.params.userID === user.user_id);

    res.json(userSer)

});


app.post('/register', (req, res) => {
    const user = req.body;
    user.user_id = users.length + 1;
    users.push(user);
    console.log(user);
});


app.post('/login', (req, res) => {
    const login = req.body;
    users.forEach( user => {
        if(user.userName === login.userName && user.password === login.userPassword){
            res.redirect(`/user/${user.user_id}`)
        } else (res.json('login or password invalid'))
    })

});

app.all('*', (req, res) => {
    res.json('404 NOT FOUND')
});

app.listen(3000, () => {
    console.log('GO GO GO GO GO');
});

