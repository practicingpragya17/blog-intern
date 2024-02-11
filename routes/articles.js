const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('in this article')
})


module.exports = router
