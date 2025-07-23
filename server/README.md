# AfriBridge Platform

## Project Description

The AfriBridge platform is a web application that promotes cultural exchange, education, and economic opportunities between Africa and Japan. It connects users through a vibrant community, allowing them to explore diverse opportunities and engage with talented individuals. The platform is built using React and Vite for the frontend, and Node.js with Express for the backend, fostering mutual understanding and collaboration between these two cultures.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- pnpm package manager
- MongoDB (local or cloud instance)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react_template
   ```

2. **Install Dependencies**
   
   **For the client:**
   ```bash
   cd client/
   pnpm install
   ```
   
   **For the server:**
   ```bash
   cd ../server/
   pnpm install
   ```

3. **Environment Configuration**
   - Create a `.env` file in the `server/` directory with:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     NODE_ENV=development
     PORT=5000
     ```
   - Create a `.env` file in the `client/` directory with:
     ```env
     VITE_API_URL=http://localhost:5000/api
     ```

4. **Build the Project**
   
   **For the client:**
   ```bash
   cd client/
   pnpm run build
   ```

5. **Run the Application**
   
   **Start the server:**
   ```bash
   cd server/
   pnpm start
   ```
   
   **Start the client (in development):**
   ```bash
   cd client/
   pnpm run dev
   ```

## Deployed Application

🌐 **Live Demo:** [Add your deployment URL here]

### Deployment Architecture
- **Frontend**: Deployed on Vercel at `https://afribridge-iota.vercel.app/`
- **Backend**: Deployed on Render at `https://afribridge.onrender.com`

## Video Demonstration

🎥 **Platform Walkthrough:** [Add your 5-10 minute video demonstration link here]

## Screenshots

### Landing Page
![Landing Page](screenshots/landing-page.png)
*The welcoming homepage showcasing the platform's mission*

### Opportunities Page
![Opportunities Page](screenshots/opportunities-page.png)
*Browse and discover various opportunities between Africa and Japan*

### Talent Page
![Talent Page](screenshots/talent-page.png)
*Connect with talented individuals across both regions*

### About Page
![About Page](screenshots/about-page.png)
*Learn more about AfriBridge's vision and impact*

## Project Summary

The AfriBridge platform serves as a bridge between African and Japanese communities, facilitating:

- **Cultural Exchange**: Connect people from different backgrounds
- **Educational Opportunities**: Share knowledge and learning experiences
- **Economic Collaboration**: Foster business and professional relationships
- **Community Building**: Create lasting connections across continents

## Project Module Description

### Client
The React frontend where users interact with the application.

- **Components**: Reusable UI components like buttons and forms
- **Pages**: Different views including LandingPage, OpportunitiesPage, TalentPage, AboutPage, and ContactPage
- **Services**: API service for handling requests to the backend
- **Context**: Authentication context for managing user state

### Server
The Express backend that handles API requests.

- **Controllers**: Business logic for user and opportunity management
- **Models**: Mongoose schemas for User and Opportunity data
- **Routes**: API endpoints for user and opportunity operations
- **Middleware**: Custom middleware for authentication and error handling

## Directory Structure

```
react_template/
├── client/                 # React front-end
│   ├── public/             # Public assets
│   ├── src/                # React source code
│   │   ├── assets/         # Static assets
│   │   ├── components/     # Reusable components
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Individual pages
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility/helper functions
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Application entry point
│   ├── package.json        # Client dependencies
│   └── vite.config.js      # Vite configuration
└── server/                 # Backend (Node.js/Express)
    ├── src/                # Server source code
    │   ├── controllers/    # Route controllers
    │   ├── middleware/     # Custom middleware
    │   ├── models/         # Mongoose models
    │   ├── routes/         # API routes
    │   ├── services/       # Business logic/services
    │   └── server.js       # Server entry point
    └── package.json        # Server dependencies
```

## File Description Inventory

- **client/**: Contains all frontend files
- **server/**: Contains all backend files
- **public/**: Assets like favicon and index.html for the frontend
- **src/**: Main application code for both frontend and backend
- **package.json**: Dependency management for both client and server
- **tailwind.config.js**: Tailwind CSS configuration

## Technology Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage

### Testing
- **Jest**: JavaScript testing framework
- **Vitest**: Fast unit test framework
- **React Testing Library**: Testing utilities for React components
- **Cypress**: End-to-end testing framework

## Usage

### Development Workflow

1. **Install Dependencies:**
   - For the client: Navigate to `client/` and run `pnpm install`
   - For the server: Navigate to `server/` and run `pnpm install`

2. **Build the Project:**
   - For the client: Run `pnpm run build` in the `client/` directory

3. **Run the Server:**
   - Navigate to the `server/` directory and run `pnpm start`

4. **Run Tests:**
   - For the client: Run `pnpm test` in the `client/` directory
   - For the server: Run `pnpm test` in the `server/` directory

### Available Scripts

#### Client Scripts
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm test` - Run tests

#### Server Scripts
- `pnpm start` - Start production server
- `pnpm run dev` - Start development server with hot reload
- `pnpm test` - Run tests

## Deployment Instructions

### Backend Deployment (Render)

1. **Prepare for Deployment**
   ```bash
   cd server/
   # Ensure your package.json has a start script
   ```

2. **Deploy to Render**
   - Create an account at [render.com](https://render.com)
   - Connect your GitHub repository
   - Create a new Web Service
   - Configure the following settings:
     - **Build Command**: `cd server && npm install`
     - **Start Command**: `cd server && npm start`
     - **Root Directory**: Leave empty (monorepo setup)
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: Your JWT secret key
     - `NODE_ENV`: `production`
     - `PORT`: Will be set automatically by Render

3. **Configure CORS**
   Update your server CORS configuration to allow your Vercel frontend domain.

### Frontend Deployment (Vercel)

1. **Prepare for Deployment**
   ```bash
   cd client/
   # Update API base URL to point to your Render backend
   ```

2. **Deploy to Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Login: `vercel login`
   - Deploy: `vercel --prod`
   - Or connect via Vercel dashboard:
     - Go to [vercel.com](https://vercel.com)
     - Import your GitHub repository
     - Configure build settings:
       - **Framework Preset**: Vite
       - **Root Directory**: `client`
       - **Build Command**: `npm run build`
       - **Output Directory**: `dist`

3. **Environment Variables**
   Add environment variables in Vercel dashboard:
   - `VITE_API_URL`: Your Render backend URL
   - Any other required environment variables

### Post-Deployment Checklist

- [ ] Backend API is accessible at your Render URL
- [ ] Frontend can communicate with backend API
- [ ] Database connections are working
- [ ] Environment variables are properly configured
- [ ] CORS is configured for your frontend domain
- [ ] SSL certificates are active (automatic on both platforms)

## License

[Add your license information here]

## Contact

For questions or support, please contact the development team or visit our contact page on the platform.