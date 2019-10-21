const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
  try {
      const {houseID} = req.params;
      const HouseModel = dataBase.getModel('House');

      const foundHouse = await HouseModel.findByPk(houseID);

      if (!foundHouse) {
          throw new Error('House not found')
      }

      req.house = foundHouse;
      next();

  } catch (e) {
      res.status(400).json(e.message);
  }

};