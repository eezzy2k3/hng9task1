const {about, operations} = require('../controller/about')

const express = require('express')


const router = express.Router()


router.route("/")
.get(about)
router.post("/operation",operations)

module.exports = router