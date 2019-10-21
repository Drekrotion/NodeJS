const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const {authRouter, userRouter, houseRouter} = require('./router');

app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);


app.all('*', (req, res) => {
    res.json('404 NOT FOUND')
});

app.listen(3000, () => {
    console.log('GO GO GO GO GO');
});

