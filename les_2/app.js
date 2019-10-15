const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {user, render, house} = require('./controllers');
const {provider} = require('./database');
const {user: userMiddleware, houseMiddleware} = require('./middleware');

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
app.get('/update', render.renderUpdate);

app.get('/user/:userID', userMiddleware.checkUserIdMiddleware, user.userById);

app.post('/register', userMiddleware.checkUserValidityMiddleware, user.userRegister);
app.post('/login', userMiddleware.checkLoginMiddleware, user.userLogin);

app.get('/house/:houseID', houseMiddleware.houseByid, house.houseById);

app.post('/house', house.addHouse);
app.post('/search', houseMiddleware.houseSearch, house.searchHouse);

app.post('/users', userMiddleware.checkUserUpdateValidityMiddleware, userMiddleware.checkUserUpdPresentMiddleware, user.userUpdate);

app.post('/houses', houseMiddleware.houseUpdateValid, houseMiddleware.houseUpdatePresent, house.updateHouse);

app.all('*', (req, res) => {
    res.json('404 NOT FOUND')
});

app.listen(3000, () => {
    console.log('GO GO GO GO GO');
});

