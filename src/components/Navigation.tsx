import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Home size={18} className="mr-2" />
              Home
            </Link>
            <Link
              to="/guide"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/guide'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen size={18} className="mr-2" />
              Complete Guide
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}