const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * User login
 */
router.post('/login', (req, res) => {
  const USER = { username: 'admin', password: 'pass' };

  // Check if username and password match with DB
  if (
    (req.body.username === USER.username) &
    (req.body.password === USER.password)
  ) {
    // Create and return JWT
    const token = jwt.sign(
      { username: USER.username },
      process.env.TOKEN_SECRET
    );
    return res.status(200).json({
      message: 'Auth successful',
      token: token
    });
  }
});

/**
 * Verify if JWT is legit
 */
router.get('/verify-token', (req, res) => {
  let token = req.header('Authorization');
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trimLeft();
  }
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        return res.json({
          success: true,
          message: 'Token verified'
        });
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
});

module.exports = router;
