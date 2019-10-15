const { provider } = require('../../database');

module.exports = async (req, res) => {
    try {
        const {userID ,email, name, password} = req.body;
        const query = `UPDATE user SET email = ?, name = ?, password = ? WHERE id = ${userID}`;

        const [updatedUSer] = await provider.promise().query(query, [email, name, password]);

        res.redirect(`user/${userID}`)
    } catch (e) {
        res.json(e.message)
    }

};