import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">{siteConfig.name}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-indigo-600">Courses</a>
            <a href="#achievements" className="text-gray-700 hover:text-indigo-600">Achievements</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Courses</a>
            <a href="#achievements" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Achievements</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}