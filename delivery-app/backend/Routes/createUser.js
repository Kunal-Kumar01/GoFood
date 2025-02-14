const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const JWT_SECRET ="I am a secret key";




// Set a secure random fallback using Node's crypto module
bcrypt.setRandomFallback((len) => {
  return crypto.randomBytes(len);
});

router.post('/createUser', [
  body('name').isLength({ min: 3 }),
  body('location').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password', 'password is not strong enough').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await User.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: hashedPassword
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});




router.post('/Login', [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
],async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        let userData = await User.findOne({email});
        if ((!userData) || (bcrypt,bcrypt.compareSync(password, userData.password))) { 
            return res.status(400).json({success: false, error: 'Invalid Credentials'});
        }

        const data = {
            id: userData._id
        };

        const authToken = jwt.sign(data,JWT_SECRET, {expiresIn: '1h'}, {algorithm: 'HS256'}, {issuer: 'gofood'}, {subject: 'user'});
        res.json({ success: true, authToken: authToken });
    } 
    catch (err) {
        console.error('Error logging in user:', err); // Corrected the error log message
        res.status(500).json({ success: false, error: err.message });
    }
 });
 

module.exports = router;
