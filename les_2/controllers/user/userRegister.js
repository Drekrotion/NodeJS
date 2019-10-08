const users = [];

module.exports = async (req, res) => {
    const user = req.body;
    user.user_id = users.length + 1;
    users.push(user);
    console.log(user);
};

