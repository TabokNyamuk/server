const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/', userController.create);
router.get('/', userController.findAll);
router.put('/:id', userController.update);

module.exports = router;
