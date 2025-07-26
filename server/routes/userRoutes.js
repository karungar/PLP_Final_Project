const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(registerUser)
  .get(protect, admin, getUsers);

router.post('/login', loginUser);

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/:id')
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUser);

module.exports = router;