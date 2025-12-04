import React, { useState } from 'react';
import { StorageService } from '../services/storage';
import Button from '../components/Button';
import { CheckCircle, Calendar, Clock, ShieldCheck, Phone, Loader2 } from 'lucide-react';

const Booking: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await StorageService.saveAppointment({
        ...formData,
        date: new Date().toISOString()
      });
      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', email: '', service: '', notes: '' });
    } catch (error) {
      alert('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center bg-slate-50">
        <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6 animate-bounce">
            <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Request Received!</h2>
            <p className="text-gray-600 mb-8">
            Thank you for choosing Shubhangi Diagnostic Center. Our staff will review your request and call you at <span className="font-semibold text-slate-900">your provided number</span> shortly to confirm the appointment time.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline">Book Another Test</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
        <p className="text-gray-600 text-lg">Secure your slot online and skip the waiting queue.</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Form Section */}
        <div className="lg:w-2/3 w-full">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
                <Calendar className="text-blue-600" size={24}/>
                <h2 className="text-xl font-bold text-gray-800">Appointment Details</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* CHANGED: Updated grid breakpoint from md to lg to prevent Phone/Email overlap on tablets/small screens */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Personal Info Group */}
                <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Patient Name *</label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Ex. Rajesh Kumar"
                    />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Service Selection */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Recommended Service *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="" className="text-gray-400">Select a service...</option>
                    <option value="Digital X-Ray">Digital X-Ray</option>
                    <option value="Blood Test">Blood Test (Pathology)</option>
                    <option value="Urine Test">Urine Analysis</option>
                    <option value="Biopsy">Biopsy / Histopathology</option>
                    <option value="Hormonal Test">Thyroid / Hormonal Profile</option>
                    <option value="Other">Other Consultation</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Medical Notes / Symptoms</label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Briefly describe your concern or doctor's referral..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-gray-500 hidden md:block">
                    * Required fields. Your data is kept private.
                </p>
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto text-lg px-8">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Processing...
                    </>
                  ) : 'Confirm Booking'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:w-1/3 w-full space-y-6">
            
            {/* Trust Card */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl"></div>
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck /> Patient Promise</h3>
             <ul className="space-y-4 text-blue-50">
               <li className="flex items-start gap-3">
                 <CheckCircle size={18} className="mt-1 shrink-0" />
                 <span>Zero waiting time for pre-booked slots.</span>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle size={18} className="mt-1 shrink-0" />
                 <span>Digital reports emailed same-day.</span>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle size={18} className="mt-1 shrink-0" />
                 <span>Sanitized and safe environment.</span>
               </li>
             </ul>
          </div>

          {/* Contact Support */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-600 text-sm mb-4">For urgent inquiries or home collection requests, call us directly.</p>
            <a href="tel:+919918994642" className="flex items-center gap-3 text-blue-600 font-bold bg-blue-50 p-4 rounded-xl hover:bg-blue-100 transition-colors">
                <Phone size={20} />
                <span>+91 9918994642</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;