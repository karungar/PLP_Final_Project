// const Transaction = require('../models/Transaction');
// const User = require('../models/User');
// const Lesson = require('../models/Lesson');
// const logger = require('../utils/logger');

// // Transaction types for AfriBridge
// const TRANSACTION_TYPES = {
//   LESSON_PURCHASE: 'lesson_purchase',
//   VISA_SERVICE: 'visa_service',
//   DOCUMENT_TRANSLATION: 'document_translation',
//   PLACEMENT_FEE: 'placement_fee'
// };

// const STATUSES = {
//   PENDING: 'pending',
//   APPROVED: 'approved',
//   COMPLETED: 'completed',
//   REJECTED: 'rejected'
// };

// // @desc    Get user transactions with filters
// // @route   GET /api/transactions
// // @access  Private
// const getTransactions = async (req, res) => {
//   try {
//     const { page = 1, limit = 10, type, status, from, to } = req.query;
//     const skip = (page - 1) * limit;

//     let query = { user: req.user._id };
//     if (type) query.type = type;
//     if (status) query.status = status;
    
//     // Date range filter
//     if (from || to) {
//       query.createdAt = {};
//       if (from) query.createdAt.$gte = new Date(from);
//       if (to) query.createdAt.$lte = new Date(to);
//     }

//     const transactions = await Transaction.find(query)
//       .populate('relatedEntity', 'title amount') // Lessons, services etc
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(parseInt(limit));

//     const total = await Transaction.countDocuments(query);

//     res.json({
//       success: true,
//       data: {
//         transactions,
//         pagination: {
//           total,
//           pages: Math.ceil(total / limit),
//           currentPage: parseInt(page)
//         }
//       }
//     });

//   } catch (error) {
//     logger.error(`Transaction fetch error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to fetch transactions' 
//     });
//   }
// };

// // @desc    Purchase language lessons
// // @route   POST /api/transactions/lessons
// // @access  Private
// const purchaseLessons = async (req, res) => {
//   try {
//     const { lessonIds, paymentMethod } = req.body;

//     // Validate lesson availability
//     const lessons = await Lesson.find({ 
//       _id: { $in: lessonIds },
//       isActive: true 
//     });

//     if (lessons.length !== lessonIds.length) {
//       return res.status(400).json({
//         success: false,
//         message: 'Some lessons are unavailable'
//       });
//     }

//     // Calculate total amount
//     const totalAmount = lessons.reduce((sum, lesson) => sum + lesson.price, 0);

//     // Create transaction
//     const transaction = await Transaction.create({
//       user: req.user._id,
//       type: TRANSACTION_TYPES.LESSON_PURCHASE,
//       amount: totalAmount,
//       status: STATUSES.PENDING,
//       paymentMethod,
//       relatedEntities: lessonIds,
//       metadata: {
//         lessonCount: lessons.length
//       }
//     });

//     // Process payment (simplified - integrate with Stripe/Flutterwave)
//     // await processPayment(transaction);

//     transaction.status = STATUSES.COMPLETED;
//     await transaction.save();

//     // Grant user access to lessons
//     await User.findByIdAndUpdate(req.user._id, {
//       $addToSet: { 
//         accessibleLessons: { $each: lessonIds } 
//       }
//     });

//     res.status(201).json({
//       success: true,
//       data: {
//         transaction,
//         lessonsGranted: lessonIds
//       }
//     });

//   } catch (error) {
//     logger.error(`Lesson purchase error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Lesson purchase failed' 
//     });
//   }
// };

// // @desc    Request visa processing service
// // @route   POST /api/transactions/visa
// // @access  Private
// const requestVisaService = async (req, res) => {
//   try {
//     const { serviceType, documents, urgency } = req.body;

//     // Validate visa service type
//     const validServices = ['work', 'student', 'tourist'];
//     if (!validServices.includes(serviceType)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid visa service type'
//       });
//     }

//     // Calculate fee based on urgency
//     const baseFees = { work: 500, student: 300, tourist: 200 };
//     const urgencyMultiplier = urgency === 'express' ? 1.5 : 1;
//     const amount = baseFees[serviceType] * urgencyMultiplier;

//     const transaction = await Transaction.create({
//       user: req.user._id,
//       type: TRANSACTION_TYPES.VISA_SERVICE,
//       amount,
//       status: STATUSES.PENDING,
//       metadata: {
//         serviceType,
//         documents: documents.map(doc => ({
//           type: doc.type,
//           status: 'pending_review'
//         })),
//         urgency
//       }
//     });

//     // Notify admin (in real app, use Socket.IO or email)
//     // notifyAdmin('New visa service request', transaction);

//     res.status(201).json({
//       success: true,
//       data: transaction
//     });

//   } catch (error) {
//     logger.error(`Visa service request error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Visa service request failed' 
//     });
//   }
// };

// // @desc    Update transaction status (Admin)
// // @route   PUT /api/transactions/:id/status
// // @access  Private/Admin
// const updateTransactionStatus = async (req, res) => {
//   try {
//     const { status, adminNotes } = req.body;

//     const transaction = await Transaction.findById(req.params.id);
//     if (!transaction) {
//       return res.status(404).json({
//         success: false,
//         message: 'Transaction not found'
//       });
//     }

//     // Status transition validation
//     if (transaction.status === STATUSES.COMPLETED) {
//       return res.status(400).json({
//         success: false,
//         message: 'Completed transactions cannot be modified'
//       });
//     }

//     transaction.status = status;
//     transaction.adminNotes = adminNotes;
//     transaction.processedBy = req.user._id;
//     transaction.processedAt = new Date();

//     // Special handling for visa approvals
//     if (transaction.type === TRANSACTION_TYPES.VISA_SERVICE && 
//         status === STATUSES.COMPLETED) {
//       await User.findByIdAndUpdate(transaction.user, {
//         $set: { visaStatus: 'processing' }
//       });
//     }

//     await transaction.save();

//     res.json({
//       success: true,
//       data: transaction
//     });

//   } catch (error) {
//     logger.error(`Status update error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Status update failed' 
//     });
//   }
// };

// // @desc    Get transaction by ID
// // @route   GET /api/transactions/:id
// // @access  Private
// const getTransaction = async (req, res) => {
//   try {
//     const transaction = await Transaction.findById(req.params.id)
//       .populate('user', 'firstName lastName email')
//       .populate('processedBy', 'firstName lastName');

//     if (!transaction) {
//       return res.status(404).json({
//         success: false,
//         message: 'Transaction not found'
//       });
//     }

//     // Authorization check
//     if (req.user.role !== 'admin' && 
//         transaction.user._id.toString() !== req.user._id.toString()) {
//       return res.status(403).json({
//         success: false,
//         message: 'Not authorized to view this transaction'
//       });
//     }

//     res.json({
//       success: true,
//       data: transaction
//     });

//   } catch (error) {
//     logger.error(`Transaction fetch error: ${error.message}`);
//     res.status(500).json({ 
//       success: false,
//       message: 'Failed to fetch transaction' 
//     });
//   }
// };

// module.exports = {
//   getTransactions,
//   getTransaction,
//   purchaseLessons,
//   requestVisaService,
//   updateTransactionStatus
// };