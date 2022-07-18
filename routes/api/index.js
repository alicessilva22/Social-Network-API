const router = require('express').Router();
const userRoutes = require('./userRoutes');
const friendsRoutes = require('./friendsRoutes');

router.use('/users', userRoutes);
router.use('/friends', friendsRoutes);

module.exports = router;