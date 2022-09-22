const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');
const { validateCreate, validateUpdate } = require('../validations/contato/index');
const handleError = require('../middlewares/handleError');

router.post('/', controller.create);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);

router.get('/:id', controller.selectById);

router.get('/', controller.selectAll);

module.exports = router;