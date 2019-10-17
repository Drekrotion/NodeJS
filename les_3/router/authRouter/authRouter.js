const router = require('express').Router();

const {userMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', userMiddleware.checkLoginValidity, user.userLogin);

module.exports = router;