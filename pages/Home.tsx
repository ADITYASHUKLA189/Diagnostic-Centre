import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle2, FlaskConical, Activity, Microscope, ArrowRight, Clock, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                alt="Medical Center Background" 
                className="w-full h-full object-cover"
            />
            {/* Professional Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/40 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-8">
              <Award size={16} className="text-blue-400" /> Trusted Diagnostic Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Advanced Diagnostics <br /> <span className="text-blue-400">Accurate Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-light">
              Experience world-class healthcare with our fully computerized laboratory and expert medical professionals dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/booking">
                <Button variant="primary" className="text-base px-8 py-4 bg-blue-600 hover:bg-blue-500 border-none" fullWidth>
                  Book Appointment <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-white" className="text-base px-8 py-4" fullWidth>
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Features Strip */}
      <section className="relative z-30 -mt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
              { icon: <Clock size={32} />, title: "Quick Reports", desc: "Same day delivery", color: "text-blue-600" },
              { icon: <Microscope size={32} />, title: "Modern Labs", desc: "Latest Technology", color: "text-blue-600" },
              { icon: <Users size={32} />, title: "Expert Staff", desc: "Certified Professionals", color: "text-blue-600" },
              { icon: <CheckCircle2 size={32} />, title: "Accurate Results", desc: "100% Precision", color: "text-blue-600" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className={`p-3 bg-blue-50 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{stat.title}</h3>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Setting the Standard in <br/> <span className="text-blue-600">Medical Diagnostics</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Shubhangi Diagnostic Center has been a pioneer in providing high-quality diagnostic services in Gorakhpur. With over 15 years of experience, we combine medical expertise with advanced technology to deliver precise and timely results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Fully Computerized Labs",
                  "Digital X-Ray Systems",
                  "Hormonal Analysis",
                  "Biopsy & Pathology",
                  "Experienced Doctors",
                  "Home Collection Available"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="outline" className="px-8">Learn More About Us</Button>
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" 
                alt="Advanced Diagnostic Equipment" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
              />
              <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl border border-gray-100 hidden md:block animate-bounce">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Patients Served</p>
                    <p className="text-2xl font-bold text-gray-900">50,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Key Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">We provide a wide range of diagnostic tests to ensure comprehensive health monitoring.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Digital X-Ray", icon: <Activity size={40}/>, desc: "High-resolution imaging for accurate bone and joint diagnosis." },
              { title: "Pathology", icon: <FlaskConical size={40}/>, desc: "Comprehensive blood and urine analysis for detailed health insights." },
              { title: "Biopsy", icon: <Microscope size={40}/>, desc: "Expert histopathological examination for precise medical assessment." },
            ].map((s, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group text-left">
                  <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                  <p className="text-gray-600 mb-6">{s.desc}</p>
                  <Link to="/services" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Read More <ArrowRight size={14} />
                  </Link>
               </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services">
              <Button variant="primary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Health is Our Priority</h2>
          <p className="text-blue-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Don't wait in line. Book your appointment online today and experience seamless medical service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button variant="secondary" className="text-lg px-10 py-4 shadow-xl">Book Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline-white" className="text-lg px-10 py-4">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;