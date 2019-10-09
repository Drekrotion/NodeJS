const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const validLogin = `SELECT * FROM user WHERE email = ? AND password = ?`;
        const [validUser] = await provider.promise().query(validLogin, [email, password]);

        if (!validUser.length) {
            throw new Error('Email or Password is not correct')
        }

        [req.userValid] = validUser;
        next()

    } catch (e) {
        res.status(400).json(e.message)
    }
};


