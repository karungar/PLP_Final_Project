const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.route('/')
  .post(userController.registerUser)
  .get(authMiddleware.protect, authMiddleware.admin, userController.getUsers);

router.post('/login', userController.loginUser);

// Protected routes
router.route('/profile')
  .get(authMiddleware.protect, userController.getUserProfile)
  .put(authMiddleware.protect, userController.updateUserProfile);

// Admin routes
router.route('/:id')
  .get(authMiddleware.protect, authMiddleware.admin, userController.getUserById)
  .delete(authMiddleware.protect, authMiddleware.admin, userController.deleteUser);

module.exports = router;