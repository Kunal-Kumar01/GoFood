// createUser.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check,body, validationResult } = require('express-validator');

router.post('/createUser', [
    body('name').isLength({ min: 3 }),
    body('location').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password','password is not strong enough').isLength({ min: 6 })
],async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
        });
        res.json({ success: true });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
