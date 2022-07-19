const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateSingleThought,
  deleteSingleThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtsId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateSingleThought)
  .delete(deleteSingleThought);

router.route('/:thoughtId/reactions')
  .post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;