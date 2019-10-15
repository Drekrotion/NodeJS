
module.exports = (req, res) => {
    const house = req.housId;

    res.json(house)
};