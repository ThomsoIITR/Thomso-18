var express = require('express');
var router = express.Router();

// Controllers
var adminAuth = require('../../../controllers/api/main/admin/admin_auth');
var adminControls = require('../../../controllers/api/main/admin/admin_controls');

// Middlewares
var MainAdminTokenMiddleware = require("../../../middlewares/main/admin/TokenMiddleware");

// Routes

// -> /mian/admin/auth
router.post('/auth/register', adminAuth.register);
router.post('/auth/login', adminAuth.login);

// -> /mian/admin
module.exports = router;