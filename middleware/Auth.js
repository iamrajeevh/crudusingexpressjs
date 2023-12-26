const express = require('express')
const jwt_token = 'RGB20120'
const Authentication = (req,res,next) => {
    console.log('reqHeaders',req.headers)
    next();
    const token = req.headers['authorization'];
    if (token) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length)
        }

    }
}

module.exports = Authentication;