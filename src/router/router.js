const about = require('../controller/about')

const express = require('express')


const router = express.Router()


router.route("/")
.get(about)

module.exports = router