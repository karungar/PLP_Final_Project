import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// PropTypes for runtime type checking (optional if using TypeScript)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};