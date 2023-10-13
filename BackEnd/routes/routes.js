var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');

router.route('/user/read').get(userController.readDataControl);

router.route('/user/create').post(userController.createDataControl);

router.route('/user/update/:id').patch(userController.updateDataControl);

router.route('/user/delete/:id').delete(userController.deleteDataControl);

module.exports = router;