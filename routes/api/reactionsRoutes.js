const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionsController');

// /api/reactions
router.route('/')
  .post(createReaction);

// /api/reactions/:userId
router.route('/:reactionsId')
  .delete(deleteReaction);

module.exports = router;