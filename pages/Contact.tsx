import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg font-light">
            We are here to assist you with all your diagnostic needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-500 mb-4 text-sm">24/7 Helpline for appointments.</p>
            <div className="flex flex-col gap-1">
                <a href="tel:+919918994642" className="text-lg font-semibold text-blue-600 hover:text-blue-800">+91 9918994642</a>
                <a href="tel:+919918018161" className="text-base text-gray-600 hover:text-blue-600">+91 9918018161</a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-500 mb-4 text-sm">Drop us a line anytime.</p>
            <a href="mailto:smedical0@gmail.com" className="text-lg font-semibold text-blue-600 hover:text-blue-800 break-all">smedical0@gmail.com</a>
          </div>

          {/* Hours Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Working Hours</h3>
            <p className="text-gray-500 mb-4 text-sm">Open 6 Days a Week</p>
            <div className="text-center">
              <p className="font-semibold text-gray-800">Mon - Sat</p>
              <p className="text-blue-600">8:00 AM - 8:00 PM</p>
              <p className="text-red-500 text-sm mt-2">Sunday Closed</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-10 bg-slate-50 lg:col-span-1 border-r border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="mt-1 text-blue-600"><MapPin size={24} /></div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Visit Our Center</h3>
                            <p className="text-sm text-gray-500">Shubhangi Diagnostic Center</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm mb-8 pl-10">
                        <p>Singhadia Chauraha,<br/> Vishnu Mandir Ke Bagal Mein,</p>
                        <p>Transformer Ke Theek Samne,</p>
                        <p>Po. Kudaghat, Devariya Road,</p>
                        <p>Gorakhpur - 273008 (U.P.)</p>
                    </div>

                    <div className="pl-10">
                         <a 
                            href="https://www.google.com/maps/search/?api=1&query=Shubhangi+Diagnostic+Center+Gorakhpur" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full lg:w-auto"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-2 h-[400px] bg-gray-100 relative">
                     {/* Placeholder for Google Maps - ideally an iframe */}
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                         <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
                            <MapPin size={40} className="text-red-500 mb-2" />
                            <span className="font-bold text-gray-700">Shubhangi Diagnostic Center</span>
                            <span className="text-sm">Gorakhpur, Uttar Pradesh</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;