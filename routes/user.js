const express = require('express')
const router = express.Router()
const {
    getUsers,  
    getUserDetails,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/UserController');

router.get('/users',getUsers);
router.get('/users/:id',getUserDetails)
router.post('/users/create',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

module.exports = router;