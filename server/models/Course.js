const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['language', 'culture', 'technical', 'business', 'interview_prep'], 
    required: true 
  },
  level: { 
    type: String, 
    enum: ['Beginner', 'N5', 'N4', 'N3', 'N2', 'N1', 'Advanced'], 
    required: true 
  },
  duration: String,
  price: {
    amount: Number,
    currency: { type: String, default: 'USD' }
  },
  instructor: String,
  thumbnail: String,
  lessons: [{
    title: String,
    content: String,
    videoUrl: String,
    duration: String,
    order: Number
  }],
  enrollments: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    enrolledAt: {
      type: Date,
      default: Date.now
    },
    progress: {
      type: Number,
      default: 0
    }
  }],
  isPublished: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);