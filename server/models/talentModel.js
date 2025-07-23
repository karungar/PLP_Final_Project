const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: {
    type: [String],
    required: [true, 'Please add at least one skill']
  },
  experience: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert'],
    required: [true, 'Please specify your experience level']
  },
  education: [{
    institution: String,
    degree: String,
    field: String,
    startDate: Date,
    endDate: Date,
    current: Boolean
  }],
  workHistory: [{
    company: String,
    position: String,
    description: String,
    startDate: Date,
    endDate: Date,
    current: Boolean
  }],
  projects: [{
    title: String,
    description: String,
    link: String,
    image: String
  }],
  resume: {
    type: String, // File path
    required: false
  },
  availability: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship', 'not-available'],
    required: false
  },
  languages: [{
    name: String,
    proficiency: {
      type: String,
      enum: ['basic', 'intermediate', 'fluent', 'native']
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Talent', talentSchema);