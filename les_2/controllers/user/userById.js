module.exports = (req, res) => {
    const userSer = users.find( user => +req.params.userID === user.user_id);
    userSer ? res.json(userSer) : res.status(400).render('User not fined');
    // res.json(userSer)
};