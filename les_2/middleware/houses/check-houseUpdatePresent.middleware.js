const {provider} = require('../../database');

module.exports = async (req, res, next) =>{
    try {
        const {houseID} = req.body;
        const query = `SELECT * FROM house WHERE id = ${houseID}`;

        const [findingHouse] = await provider.promise().query(query);

        if(!findingHouse.length){
            throw new Error('NOT FOUND SUCH USER')
        }

        next()

    } catch (e) {
        res.status(400).json(e.message)
    }
};