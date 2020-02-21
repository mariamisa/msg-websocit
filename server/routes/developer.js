const router = require('express').Router()
const { developer } = require('../controller')

router.get('/developer', developer.getAllDeveloper)
router.get('/developer/:id', developer.getDeveloperById)

module.exports = router
