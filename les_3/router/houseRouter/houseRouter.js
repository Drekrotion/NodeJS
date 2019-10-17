const router = require('express').Router();

const {houseMiddleware} = require('../../middleware');
const {house} = require('../../controllers');

router.post('/', house.createNewHouse);
router.get('/:houseID', houseMiddleware.presentHouseCheck, house.getHouseById);
router.put('/:houseID', houseMiddleware.presentHouseCheck, house.updateHouse);
router.delete('/:houseID', houseMiddleware.presentHouseCheck, house.deleteHouse);


module.exports = router;