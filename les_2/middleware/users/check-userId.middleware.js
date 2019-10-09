const {provider} = require('../../database');


module.exports = async (req, res, next) => {
    try {
        const {userID} = req.params;
        const searchId = `SELECT * FROM user WHERE id = ?`;
        const [serId] = await provider.promise().query(searchId, [userID]);

        if (!serId.length) {
            throw new Error('Not Found User')
        }

        [req.ureId] = serId;
        next()

    } catch (e) {
        res.status(400).json(e.message)
    }

};