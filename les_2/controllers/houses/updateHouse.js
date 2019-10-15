const { provider } = require('../../database');

module.exports = async (req, res) => {
    try {
        const {houseID ,square, city, price} = req.body;
        const query = `UPDATE house SET square = ?, city = ?, price = ? WHERE id = ${houseID}`;

        const [updatedHouse] = await provider.promise().query(query, [square, city, price]);

        res.redirect(`/house/${houseID}`)

    } catch (e) {
        res.json(e.message)
    }

};