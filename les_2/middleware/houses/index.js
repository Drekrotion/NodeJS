const houseSearch = require('./check-houseCity.middleware');
const houseByid = require('./check-houseId.middleware');
const houseUpdateValid = require('./check-houseUpdateValidity.middleware');
const houseUpdatePresent = require('./check-houseUpdatePresent.middleware');


module.exports = {
  houseByid,
  houseSearch,
  houseUpdateValid,
  houseUpdatePresent
};