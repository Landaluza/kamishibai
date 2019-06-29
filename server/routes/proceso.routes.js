const express = require('express');
const router = express.Router();

const proceso = require('../controllers/proceso.controller');

router.get('/', proceso.getProcesos);
router.post('/', proceso.createProceso);
router.get('/:id', proceso.getProceso);
router.put('/:id', proceso.editProceso);
router.delete('/:id', proceso.deleteProceso);

module.exports = router;