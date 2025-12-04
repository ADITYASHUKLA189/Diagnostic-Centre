import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ScanLine, FlaskConical, Droplet, Activity, Dna, Brain, ChevronRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ScanLine size={32} />,
      title: "Digital X-Ray",
      description: "Advanced digital radiography with high-resolution imaging for accurate diagnosis of bones, joints, and internal organs.",
      features: ["High-resolution imaging", "Instant results", "Lower radiation exposure", "Digital records"]
    },
    {
      icon: <Droplet size={32} />,
      title: "Blood & Urine Testing",
      description: "Comprehensive pathology services including complete blood count, biochemistry panels, and urinalysis for thorough health assessment.",
      features: ["Complete blood count", "Lipid profile", "Liver & kidney function", "Diabetes screening"]
    },
    {
      icon: <Activity size={32} />,
      title: "Biopsy Testing",
      description: "Expert histopathological examination of tissue samples for accurate diagnosis of various conditions including cancer screening.",
      features: ["Tissue analysis", "Cancer screening", "Expert pathologists", "Detailed reports"]
    },
    {
      icon: <Activity size={32} />,
      title: "Hormonal Testing",
      description: "Complete endocrine panel testing including thyroid, reproductive hormones, and metabolic markers for hormonal balance assessment.",
      features: ["Thyroid profile", "Reproductive hormones", "Metabolic markers", "Growth hormones"]
    },
    {
      icon: <Dna size={32} />,
      title: "Genetic Testing",
      description: "Specialized genetic screening to identify inherited disorders and disease risks using advanced molecular biology techniques.",
      features: ["Chromosomal analysis", "Hereditary screening", "DNA profiling", "Genetic counseling"]
    },
    {
      icon: <Brain size={32} />,
      title: "Neurology Diagnostics",
      description: "Essential diagnostic tests for neurological conditions including EEG and nerve conduction studies.",
      features: ["EEG monitoring", "Nerve conduction", "Neuropathy screening", "Brain function analysis"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Diagnostic Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Comprehensive diagnostic solutions using state-of-the-art technology and expert care.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
              <div className="p-8 flex-grow">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                            <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
              </div>
              <div className="p-6 border-t border-gray-50 bg-gray-50/50">
                  <Link to="/booking" className="flex items-center justify-between text-blue-700 font-semibold hover:text-blue-800 group-hover:translate-x-1 transition-transform">
                    <span>Book Appointment</span>
                    <ChevronRight size={18} />
                  </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Consultation?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                Not sure which test you need? Our medical experts are here to guide you to the right diagnostic procedure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto">Contact Support</Button>
                </Link>
                <Link to="/booking">
                  <Button variant="outline-white" className="w-full sm:w-auto">Book Now</Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;