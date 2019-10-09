const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {user, render} = require('./controllers');
const {provider} = require('./database');
const {user: userMiddleware} = require('./middleware');


app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));


app.get('/', render.renderMain);
app.get('/login', render.renderLogin);
app.get('/register', render.renderRegister);
app.get('/house', render.renderAddHouse);

app.get('/user/:userID', userMiddleware.checkUserIdMiddleware, user.userById);

app.post('/login', userMiddleware.checkLoginMiddleware, user.userLogin);
app.post('/register', userMiddleware.checkUserValidityMiddleware, user.userRegister);


app.get('/house/:houseID', (req, res) => {
    const houseSer = houses.find(house => +req.params.houseID === house.house_id);
    houseSer ? res.json(houseSer) : res.status(400).render('House not fined')
});

app.post('/house', (req, res) => {
    const newHouse = req.body;
    newHouse.house_id = houses.length + 1;
    houses.push(newHouse);
    console.log(newHouse);

    res.redirect(`/house/${newHouse.house_id}`)
});


app.post('/search', (req, res) => {
    const searHouse = req.body;
    const findHouse = houses.find(house => house.city === searHouse.city);
    findHouse ? res.redirect(`/house/${findHouse.house_id}`) : res.status(400).render('House not fined')
});


app.all('*', (req, res) => {
    res.json('404 NOT FOUND')
});

// app.all('*', async (req, res) => {
//     let [queryy] = await provider.promise().query('SELECT * FROM user');
//     console.log(queryy[3]);
//     res.json(queryy[3])
// });

app.listen(3000, () => {
    console.log('GO GO GO GO GO');
});

