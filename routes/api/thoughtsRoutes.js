const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateSingleThought,
  deleteSingleThought,
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

module.exports = router;