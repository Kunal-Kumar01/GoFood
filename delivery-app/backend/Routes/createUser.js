// createUser.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/createUser', async (req, res) => {
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
