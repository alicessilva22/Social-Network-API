const router = require('express').Router();
const {
  createFriend,
  deleteFriend
} = require('../../controllers/friendsController');

// /api/reactions
router.route('/')
  .post(createFriend);

// /api/reactions/:userId
router.route('/:friendsId')
  .delete(deleteFriend);

module.exports = router;