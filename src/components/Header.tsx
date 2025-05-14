import React from 'react';
import { ClipboardCheck, BookOpen, Users, Sparkles, Code } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white">
      <div className="container mx-auto">
        {/* Main header content */}
        <div className="px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <ClipboardCheck size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">EARS Requirements Analyzer</h1>
              <p className="text-blue-100 mt-2 text-lg">
                Write precise, testable requirements in minutes
              </p>
            </div>
          </div>
        </div>

        {/* Feature bar */}
        <div className="bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-blue-200" />
                <span>Instant Pattern Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-blue-200" />
                <span>Clear, Unambiguous Requirements</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={18} className="text-blue-200" />
                <span>Save Hours of Review Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};