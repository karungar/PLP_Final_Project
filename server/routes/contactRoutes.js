const express = require('express');
const router = express.Router();
const {
  createContact,
  getContacts,
  getContactById,
  markContactAsRead,
  deleteContact
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(createContact)
  .get(protect, admin, getContacts);

router.route('/:id')
  .get(protect, admin, getContactById)
  .delete(protect, admin, deleteContact);

router.put('/:id/read', protect, admin, markContactAsRead);

module.exports = router;