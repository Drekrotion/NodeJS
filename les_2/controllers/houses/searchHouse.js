
module.exports = (req, res) => {
    const {id} = req.houseValid;

    res.redirect(`house/${id}`)
};