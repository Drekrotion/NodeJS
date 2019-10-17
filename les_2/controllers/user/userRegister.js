const {provider} = require('../../database');

module.exports = async (req, res) => {
    const {name, email, password} = req.body;
    const query = `INSERT INTO user (name, email, password) VALUE (?, ?, ?)`;

    await provider.promise().query(query, [name, email, password]);

    res.render('register')
};


// module.exports = async (req, res) => {
//     const user = req.body;
//     user.user_id = usersMiddleware.length + 1;
//     usersMiddleware.push(user);
//     console.log(user);
// };

