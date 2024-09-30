const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionario-controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id_funcionario', controller.put);

module.exports = router;