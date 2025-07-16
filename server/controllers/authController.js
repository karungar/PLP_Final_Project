// const User = require('../models/User');
// const { generateToken, generateVerificationToken } = require('../middleware/auth');
// const sendEmail = require('../utils/email');
// const logger = require('../utils/logger');

// // @desc    Register user with role-based validation
// // @route   POST /api/auth/register
// // @access  Public
// const register = async (req, res) => {
//   try {
//     const { email, password, firstName, lastName, phone, country, goal } = req.body;

//     // Validate required fields
//     if (!email || !password || !firstName || !lastName || !country || !goal) {
//       return res.status(400).json({ 
//         success: false,
//         message: 'Missing required fields' 
//       });
//     }

//     // Email format validation
//     const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//     if (!email.match(emailRegex)) {
//       return res.status(400).json({ 
//         success: false,
//         message: 'Invalid email format' 
//       });
//     }

//     // Check existing user
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ 
//         success: false,
//         message: 'Email already registered' 
//       });
//     }

//     // Create user with default student role
//     const user = await User.create({
//       email,
//       password,
//       firstName,
//       lastName,
//       phone,
//       country,
//       goal,
//       role: 'student' // Default role
//     });

//     // Generate verification token
//     const verificationToken = generateVerificationToken(user._id);
//     user.emailVerificationToken = verificationToken;
//     await user.save();

//     // Send verification email
//     await sendEmail({
//       to: user.email,
//       subject: 'Verify Your AfriBridge Account',
//       template: 'verify-email',
//       context: {
//         name: user.firstName,
//         verificationUrl: `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`
//       }
//     });

//     // Generate JWT
//     const token = generateToken(user._id);

//     // Omit sensitive data in response
//     const userResponse = {
//       _id: user._id,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       role: user.role,
//       isVerified: user.isVerified,
//       goal: user.goal,
//       japaneseLevel: user.japaneseLevel
//     };

//     res.status(201).json({
//       success: true,
//       data: {
//         user: userResponse,
//         token
//       }
//     });

//   } catch (error) {
//     logger.error(`Registration error: ${error.message}`, { error });
//     res.status(500).json({ 
//       success: false,
//       message: 'Account registration failed',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// };

// // @desc    Authenticate user
// // @route   POST /api/auth/login
// // @access  Public
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ 
//         success: false,
//         message: 'Email and password are required' 
//       });
//     }

//     const user = await User.findOne({ email }).select('+password +loginHistory');

//     if (!user || !(await user.comparePassword(password))) {
//       return res.status(401).json({ 
//         success: false,
//         message: 'Invalid credentials' 
//       });
//     }

//     // Track login activity
//     user.loginHistory.push({
//       ip: req.ip,
//       device: req.headers['user-agent'],
//       timestamp: new Date()
//     });
//     await user.save();

//     // Generate JWT
//     const token = generateToken(user._id);

//     const userResponse = {
//       _id: user._id,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       role: user.role,
//       isVerified: user.isVerified,
//       goal: user.goal,
//       japaneseLevel: user.japaneseLevel,
//       culturalCompetencyScore: user.culturalCompetencyScore,
//       visaStatus: user.visaStatus
//     };

//     res.json({
//       success: true,
//       data: {
//         user: userResponse,
//         token
//       }
//     });

//   } catch (error) {
//     logger.error(`Login error for ${req.body.email}: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Login failed' 
//     });
//   }
// };

// // @desc    Get current user profile with progress tracking
// // @route   GET /api/auth/me
// // @access  Private
// const getMe = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id)
//       .select('-password -__v -emailVerificationToken')
//       .populate('placement.employer', 'name industry')
//       .populate('placement.university', 'name program');

//     if (!user) {
//       return res.status(404).json({ 
//         success: false,
//         message: 'User not found' 
//       });
//     }

//     // Enhanced progress tracking
//     const progress = {
//       language: user.japaneseLevel || 'Not assessed',
//       culture: user.culturalCompetencyScore,
//       visa: user.visaStatus,
//       completedLessons: user.completedLessons.length
//     };

//     res.json({
//       success: true,
//       data: {
//         user,
//         progress
//       }
//     });

//   } catch (error) {
//     logger.error(`Profile fetch error for user ${req.user._id}: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to fetch profile' 
//     });
//   }
// };

// // @desc    Verify email
// // @route   GET /api/auth/verify-email
// // @access  Public
// const verifyEmail = async (req, res) => {
//   try {
//     const { token } = req.query;

//     const user = await User.findOne({ 
//       emailVerificationToken: token,
//       emailVerificationTokenExpires: { $gt: Date.now() }
//     });

//     if (!user) {
//       return res.status(400).json({ 
//         success: false,
//         message: 'Invalid or expired token' 
//       });
//     }

//     user.isVerified = true;
//     user.emailVerificationToken = undefined;
//     user.emailVerificationTokenExpires = undefined;
//     await user.save();

//     res.json({
//       success: true,
//       message: 'Email verified successfully'
//     });

//   } catch (error) {
//     logger.error(`Email verification error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Email verification failed' 
//     });
//   }
// };

// module.exports = { 
//   register, 
//   login, 
//   getMe, 
//   verifyEmail 
// };