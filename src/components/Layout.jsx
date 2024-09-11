import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-16">  {/* pt-16 adds space for fixed Navbar */}
        {children}  {/* Render child components (content of each page) */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
