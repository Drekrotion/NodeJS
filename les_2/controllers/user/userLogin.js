
module.exports = (req, res) => {
    const {id} = req.userValid

    res.redirect(`user/${id}`)
};


// module.exports = (req, res) => {
//     const login = req.body;
//
//     const findUser = users.find(user => user.userName === login.userName && user.password === login.userPassword);
//     findUser ? res.redirect(`/user/${findUser.user_id}`) : res.status(400).render('login or password invalid');
// };
