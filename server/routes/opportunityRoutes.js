const express = require('express');
const router = express.Router();
const {
  createOpportunity,
  getOpportunities,
  getOpportunityById,
  updateOpportunity,
  deleteOpportunity,
  getUserOpportunities
} = require('../controllers/opportunityController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createOpportunity)
  .get(getOpportunities);

router.get('/user', protect, getUserOpportunities);

router.route('/:id')
  .get(getOpportunityById)
  .put(protect, updateOpportunity)
  .delete(protect, deleteOpportunity);

module.exports = router;