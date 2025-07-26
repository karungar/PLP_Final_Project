import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Public Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import TalentPage from './pages/TalentPage';
import OpportunityDetailPage from './pages/OpportunityDetailPage';
import TalentDetailPage from './pages/TalentDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

// Protected Pages
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TalentFormPage from './pages/TalentFormPage';
import OpportunityFormPage from './pages/OpportunityFormPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ApplicationsPage from './pages/ApplicationsPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/opportunities" element={<OpportunitiesPage />} />
              <Route path="/opportunities/:id" element={<OpportunityDetailPage />} />
              <Route path="/talent" element={<TalentPage />} />
              <Route path="/talent/:id" element={<TalentDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create-talent" element={<TalentFormPage />} />
                <Route path="/edit-talent" element={<TalentFormPage />} />
                <Route path="/my-applications" element={<ApplicationsPage />} />
              </Route>
              
              {/* Admin routes */}
              <Route element={<ProtectedRoute requireAdmin={true} />}>
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/create-opportunity" element={<OpportunityFormPage />} />
                <Route path="/edit-opportunity/:id" element={<OpportunityFormPage />} />
              </Route>
              
              {/* 404 route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;