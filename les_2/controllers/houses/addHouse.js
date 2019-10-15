const { provider } = require('../../database');

module.exports = async (req, res) => {
    const {square, city, price} = req.body;
    const queryHouse = `INSERT INTO house (square, city, price) VALUE (?, ?, ?)`;

    await provider.promise().query(queryHouse, [square, city, price]);

    res.render('house')
};





