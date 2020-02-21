const router = require('express').Router()
const { designer } = require('../controller')

router.get('/designer', designer.getAllDesigner)
router.get('/designer/:id', designer.getDesignerById)

module.exports = router
