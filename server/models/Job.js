const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true 
  },
  company: { 
    type: String, 
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['IT', 'Hospitality', 'Care Services', 'Language Schools', 'Graduate Studies', 'Undergraduate Studies'],
    required: true
  },
  requirements: [String],
  qualifications: [String],
  benefits: [String],
  location: {
    prefecture: String,
    city: String,
    isRemote: { type: Boolean, default: false }
  },
  salary: {
    min: Number,
    max: Number,
    currency: { type: String, default: 'JPY' },
    period: { type: String, enum: ['hour', 'month', 'year'], default: 'month' }
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Student'],
    default: 'Full-time'
  },
  languageRequirement: {
    type: String,
    enum: ['N5', 'N4', 'N3', 'N2', 'N1', 'Native', 'Not Required'],
    default: 'N4'
  },
  applicationDeadline: Date,
  startDate: Date,
  contactEmail: String,
  contactPhone: String,
  postedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'closed', 'draft'],
    default: 'active'
  },
  applicationsCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);