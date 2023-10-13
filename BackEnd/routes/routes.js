var express = require('express');

const router = express.Router();

var controller = require('../src/controls');

router.route('/read').get(controller.readDataControl);

router.route('/read/:name').get(controller.readDataByNameControl);

router.route('/create').post(controller.createDataControl);

router.route('/update/:id').put(controller.updateDataControl);

router.route('/delete/:id').delete(controller.deleteDataControl);

module.exports = router;