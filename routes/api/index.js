const router = require('express').Router();
const userRoutes = require('./userRoutes');
const friendsRoutes = require('./friendsRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const reactionsRoutes = require('./reactionsRoutes');

router.use('/users', userRoutes);
router.use('/friends', friendsRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/reactions', reactionsRoutes);

module.exports = router;