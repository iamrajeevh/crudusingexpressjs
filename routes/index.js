const express = require('express')
const router = express.Router()

const userRoutes = require('./user')

router.use(userRoutes)

router.get('/',(req,res) => {
    console.log('Hi I am main Route');
    return res.send('Connected Successfully')
})


module.exports = router