// const User = require('../models/User');
// const Transaction = require('../models/Transaction');
// const Lesson = require('../models/Lesson');
// const logger = require('../utils/logger');
// const { calculateProgress } = require('../utils/progressTracker');

// // @desc    Get authenticated user profile with progress
// // @route   GET /api/users/me
// // @access  Private
// const getMyProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id)
//       .select('-password -__v -emailVerificationToken')
//       .populate('placement.employer', 'name industry')
//       .populate('placement.university', 'name program')
//       .populate('completedLessons.lessonId', 'title duration');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     // Calculate comprehensive progress
//     const progress = calculateProgress(user);
    
//     res.json({
//       success: true,
//       data: {
//         profile: user,
//         progress,
//         nextSteps: suggestNextSteps(user)
//       }
//     });

//   } catch (error) {
//     logger.error(`Profile fetch error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to fetch profile' 
//     });
//   }
// };

// // @desc    Update user profile
// // @route   PUT /api/users/me
// // @access  Private
// const updateProfile = async (req, res) => {
//   try {
//     const { firstName, lastName, phone, country, timezone, goal } = req.body;

//     // Validate Japanese level if provided
//     if (req.body.japaneseLevel && !['N5','N4','N3','N2','N1'].includes(req.body.japaneseLevel)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid Japanese proficiency level'
//       });
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       req.user._id,
//       {
//         firstName,
//         lastName,
//         phone,
//         country,
//         timezone,
//         goal,
//         japaneseLevel: req.body.japaneseLevel
//       },
//       { new: true, runValidators: true }
//     ).select('-password -__v');

//     res.json({
//       success: true,
//       data: updatedUser
//     });

//   } catch (error) {
//     logger.error(`Profile update error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Profile update failed' 
//     });
//   }
// };

// // @desc    Get user's transactions (lessons, visa services etc)
// // @route   GET /api/users/me/transactions
// // @access  Private
// const getMyTransactions = async (req, res) => {
//   try {
//     const { type, status, limit = 10 } = req.query;
    
//     const query = { user: req.user._id };
//     if (type) query.type = type;
//     if (status) query.status = status;

//     const transactions = await Transaction.find(query)
//       .sort({ createdAt: -1 })
//       .limit(parseInt(limit))
//       .populate('relatedEntity', 'title amount');

//     res.json({
//       success: true,
//       data: transactions
//     });

//   } catch (error) {
//     logger.error(`Transactions fetch error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to fetch transactions' 
//     });
//   }
// };

// // ADMIN FUNCTIONS

// // @desc    Get all users (Admin)
// // @route   GET /api/users
// // @access  Private/Admin
// const getUsers = async (req, res) => {
//   try {
//     const { role, country, japaneseLevel, page = 1, limit = 20 } = req.query;
//     const skip = (page - 1) * limit;

//     const query = {};
//     if (role) query.role = role;
//     if (country) query.country = country;
//     if (japaneseLevel) query.japaneseLevel = japaneseLevel;

//     const users = await User.find(query)
//       .select('-password -__v')
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(parseInt(limit));

//     const total = await User.countDocuments(query);

//     res.json({
//       success: true,
//       data: {
//         users,
//         pagination: {
//           total,
//           pages: Math.ceil(total / limit),
//           currentPage: parseInt(page)
//         }
//       }
//     });

//   } catch (error) {
//     logger.error(`Users fetch error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to fetch users' 
//     });
//   }
// };

// // @desc    Get user details (Admin)
// // @route   GET /api/users/:id
// // @access  Private/Admin
// const getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//       .select('-password -__v')
//       .populate('placement.employer', 'name industry')
//       .populate('placement.university', 'name program')
//       .populate('completedLessons.lessonId', 'title category');

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     // Get user's recent transactions
//     const transactions = await Transaction.find({ user: user._id })
//       .sort({ createdAt: -1 })
//       .limit(5);

//     // Calculate progress metrics
//     const progress = calculateProgress(user);

//     res.json({
//       success: true,
//       data: {
//         user,
//         progress,
//         recentTransactions: transactions
//       }
//     });

//   } catch (error) {
//     logger.error(`User fetch error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to fetch user' 
//     });
//   }
// };

// // @desc    Update user (Admin)
// // @route   PUT /api/users/:id
// // @access  Private/Admin
// const updateUser = async (req, res) => {
//   try {
//     const { role, isVerified, visaStatus, culturalCompetencyScore } = req.body;

//     // Validate admin-only updates
//     if (role && !['student', 'teacher', 'admin', 'employer'].includes(role)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid role specified'
//       });
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         role,
//         isVerified,
//         visaStatus,
//         culturalCompetencyScore
//       },
//       { new: true, runValidators: true }
//     ).select('-password -__v');

//     if (!updatedUser) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: updatedUser
//     });

//   } catch (error) {
//     logger.error(`User update error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'User update failed' 
//     });
//   }
// };

// // @desc    Deactivate user (Admin)
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
// const deactivateUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found'
//       });
//     }

//     // Check for active services
//     const activeServices = await Transaction.countDocuments({
//       user: user._id,
//       status: { $in: ['pending', 'approved'] }
//     });

//     if (activeServices > 0) {
//       return res.status(400).json({
//         success: false,
//         message: 'User has active services. Resolve them first.'
//       });
//     }

//     user.isActive = false;
//     await user.save();

//     res.json({
//       success: true,
//       message: 'User deactivated successfully'
//     });

//   } catch (error) {
//     logger.error(`User deactivation error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'User deactivation failed' 
//     });
//   }
// };

// // @desc    Get dashboard analytics (Admin)
// // @route   GET /api/users/dashboard/stats
// // @access  Private/Admin
// const getDashboardStats = async (req, res) => {
//   try {
//     // Parallel data fetching
//     const [
//       totalStudents,
//       activeThisWeek,
//       topCountries,
//       proficiencyDistribution,
//       recentSignups
//     ] = await Promise.all([
//       User.countDocuments({ role: 'student', isActive: true }),
//       User.countDocuments({ 
//         role: 'student',
//         lastLogin: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
//       }),
//       User.aggregate([
//         { $match: { role: 'student', isActive: true } },
//         { $group: { _id: '$country', count: { $sum: 1 } } },
//         { $sort: { count: -1 } },
//         { $limit: 5 }
//       ]),
//       User.aggregate([
//         { $match: { role: 'student', isActive: true, japaneseLevel: { $ne: null } } },
//         { $group: { _id: '$japaneseLevel', count: { $sum: 1 } } }
//       ]),
//       User.find({ role: 'student' })
//         .sort({ createdAt: -1 })
//         .limit(5)
//         .select('firstName lastName country createdAt')
//     ]);

//     res.json({
//       success: true,
//       data: {
//         totalStudents,
//         activeThisWeek,
//         topCountries,
//         proficiencyDistribution,
//         recentSignups
//       }
//     });

//   } catch (error) {
//     logger.error(`Dashboard stats error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to load dashboard stats' 
//     });
//   }
// };

// // Helper Functions
// function suggestNextSteps(user) {
//   const steps = [];
  
//   if (!user.japaneseLevel) {
//     steps.push('Take placement test to assess your Japanese level');
//   }
  
//   if (user.visaStatus === 'Not Started' && user.goal) {
//     steps.push(`Start your ${user.goal} visa application process`);
//   }
  
//   if (user.completedLessons.length < 3) {
//     steps.push('Explore beginner lessons to get started');
//   }
  
//   return steps.length ? steps : ['You\'re on track! Continue with your current plan'];
// }

// module.exports = {
//   getMyProfile,
//   updateProfile,
//   getMyTransactions,
//   getUsers,
//   getUser,
//   updateUser,
//   deactivateUser,
//   getDashboardStats
// };

