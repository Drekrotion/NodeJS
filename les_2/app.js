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
const houses = [];

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
    userSer ? res.json(userSer) : res.status(400).render('User not fined');
    // res.json(userSer)
});

app.get('/house', (req, res) => {
    res.render('house')
});

app.get('/house/:houseID', (req, res) =>{
   const houseSer = houses.find(house => +req.params.houseID === house.house_id);
    houseSer ? res.json(houseSer) : res.status(400).render('House not fined')
});

app.post('/register', (req, res) => {
    const user = req.body;
    user.user_id = users.length + 1;
    users.push(user);
    console.log(user);
});

app.post('/house', (req, res) => {
    const newHouse = req.body;
    newHouse.house_id = houses.length + 1;
    houses.push(newHouse);
    console.log(newHouse);

    res.redirect(`/house/${newHouse.house_id}`)
});


app.post('/login', (req, res) => {
    const login = req.body;

    const findUser = users.find(user => user.userName === login.userName && user.password === login.userPassword);
    findUser ? res.redirect(`/user/${findUser.user_id}`) : res.status(400).render('login or password invalid');
});


app.post('/search', (req, res) => {
    const searHouse = req.body;
    const findHouse = houses.find(house => house.city === searHouse.city);
    findHouse ? res.redirect(`/house/${findHouse.house_id}`) : res.status(400).render('House not fined')
});

app.all('*', (req, res) => {
    res.json('404 NOT FOUND')
});

app.listen(3000, () => {
    console.log('GO GO GO GO GO');
});

