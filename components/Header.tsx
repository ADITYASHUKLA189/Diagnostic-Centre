import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, Stethoscope, Clock } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600 font-medium";

  return (
    <>
      {/* Top Bar - Medical Standard */}
      <div className="bg-slate-900 text-gray-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-blue-400" /> Mon - Sat: 8:00 AM - 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+919918994642" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-blue-400" /> <span>+91 9918994642</span>
            </a>
            <a href="mailto:smedical0@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors hidden sm:flex">
              <Mail size={14} className="text-blue-400" /> <span>smedical0@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav - Sticky */}
      <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'sticky top-0 bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm relative'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2.5 rounded-lg text-white group-hover:bg-blue-700 transition-colors shadow-sm">
                <Stethoscope size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800 leading-none tracking-tight">Shubhangi</span>
                <span className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-0.5">Diagnostic Center</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/services" className={isActive('/services')}>Services</Link>
              <Link to="/contact" className={isActive('/contact')}>Contact</Link>
              <Link to="/admin" className={isActive('/admin')}>Admin</Link>
              <Link to="/booking">
                <Button className="shadow-blue-200 shadow-lg hover:shadow-xl">Book Appointment</Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700 hover:text-blue-600 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-2 animate-fadeIn z-50">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block py-3 px-4 rounded-lg hover:bg-gray-50 ${isActive('/')}`}>Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className={`block py-3 px-4 rounded-lg hover:bg-gray-50 ${isActive('/services')}`}>Services</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`block py-3 px-4 rounded-lg hover:bg-gray-50 ${isActive('/contact')}`}>Contact</Link>
            <Link to="/admin" onClick={() => setIsMenuOpen(false)} className={`block py-3 px-4 rounded-lg hover:bg-gray-50 ${isActive('/admin')}`}>Admin Login</Link>
            <div className="pt-2">
              <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>Book Appointment</Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;