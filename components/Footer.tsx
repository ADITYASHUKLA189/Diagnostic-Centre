import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Stethoscope, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Stethoscope size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-none">Shubhangi</span>
              <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Diagnostics</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fully Computerized & Air-Conditioned Laboratory with Modern Technology. 
            Providing accurate and reliable diagnostic services with over 15 years of experience.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-400 transition-colors"><Twitter size={18} /></a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-700 transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Our Services</Link></li>
            <li><Link to="/booking" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Contact Us</Link></li>
            <li><Link to="/admin" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Admin Login</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Digital X-Ray</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Blood & Urine Testing</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Biopsy Testing</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Hormonal Testing</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> ECG & Pathology</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
            Contact Info
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">+91 9918994642</p>
                <p>+91 9918018161</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <p>smedical0@gmail.com</p>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
              <p className="text-gray-400">Singhadia Chauraha, Vishnu Mandir Ke Bagal Mein, Po. Kudaghat, Gorakhpur (U.P.)</p>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-blue-500 shrink-0" />
              <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Shubhangi Diagnostic Center. All rights reserved.</p>
        <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>R.K. Tiwari - Proprietor</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;