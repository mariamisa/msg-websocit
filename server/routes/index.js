const router = require('express').Router()
const developerRoute = require('./developer')
const designerRoute = require('./designer')

router.use(developerRoute)
router.use(designerRoute)
module.exports =
  router
