const router = require('express').Router();

const {userMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', user.registerNewUser);
router.get(`/:userID`, userMiddleware.presentUserCheck, user.getUserById);
router.put('/:userID', userMiddleware.presentUserCheck, user.updateUser);
router.delete('/:userID', userMiddleware.presentUserCheck, user.deleteUser);

module.exports = router;