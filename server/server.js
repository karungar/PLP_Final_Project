const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/opportunities', require('./routes/opportunityRoutes'));
app.use('/api/talents', require('./routes/talentRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));

// Welcome route
app.get('/', (req, res) => {
  res.send('AfriBridge API is running...');
});

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});