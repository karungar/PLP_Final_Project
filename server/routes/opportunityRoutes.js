const express = require('express');
const router = express.Router();
const {
  createOpportunity,
  getOpportunities,
  getOpportunityById,
  updateOpportunity,
  deleteOpportunity,
  getFeaturedOpportunities  // Change this line
} = require('../controllers/opportunityController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createOpportunity)
  .get(getOpportunities);

router.get('/user', protect, getFeaturedOpportunities);  // Change this line

router.route('/:id')
  .get(getOpportunityById)
  .put(protect, updateOpportunity)
  .delete(protect, deleteOpportunity);

module.exports = router;