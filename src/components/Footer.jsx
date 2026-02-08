import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dinuka Munasinghe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;