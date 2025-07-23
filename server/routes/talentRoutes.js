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
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createOrUpdateTalent)
  .get(getTalents);

// You can use getFeaturedTalents for now, or create a searchTalents function
router.get('/search', getFeaturedTalents);

router.route('/profile')
  .get(protect, getMyTalent)        
  .delete(protect, deleteTalent);   

router.get('/:id', getTalentById);

module.exports = router;