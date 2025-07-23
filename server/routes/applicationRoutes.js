const express = require('express');
const router = express.Router();
const {
  createApplication,
  getUserApplications,
  getOpportunityApplications,
  getApplicationById,
  updateApplicationStatus,
  withdrawApplication
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createApplication);
router.get('/user', protect, getUserApplications);
router.get('/opportunity/:id', protect, getOpportunityApplications);
router.get('/:id', protect, getApplicationById);
router.put('/:id/status', protect, updateApplicationStatus);
router.delete('/:id', protect, withdrawApplication);

module.exports = router;