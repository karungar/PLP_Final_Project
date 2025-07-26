const express = require('express');
const router = express.Router();
const {
  createOrUpdateTalent,
  getTalents,
  getTalentById,
  getMyTalent,          
  deleteTalent,         
  getFeaturedTalents    
} = require('../controllers/talentController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createOrUpdateTalent)
  .get(getTalents);

// Remove this line - search is handled by getTalents
// router.get('/search', searchTalents);

router.route('/me')
  .get(protect, getMyTalent)       // Updated to getMyTalent
  .delete(protect, deleteTalent);  // Updated to deleteTalent

router.get('/featured', getFeaturedTalents);  // Added featured route

router.get('/:id', getTalentById);

module.exports = router;