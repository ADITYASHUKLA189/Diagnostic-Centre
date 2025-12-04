import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StorageService } from '../services/storage';
import { Appointment } from '../types';
import Button from '../components/Button';
import { LogOut, Trash2, CheckCircle, Clock, AlertCircle, Loader2 } from 'lucide-react';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!StorageService.isAuthenticated()) {
      navigate('/login');
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = async () => {
    const data = await StorageService.getAppointments();
    setAppointments(data);
    setLoading(false);
  };

  const handleLogout = () => {
    StorageService.logout();
    navigate('/login');
  };

  const updateStatus = async (id: string, status: Appointment['status']) => {
    await StorageService.updateStatus(id, status);
    loadData();
  };

  const deleteAppt = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      await StorageService.deleteAppointment(id);
      loadData();
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-yellow-100 text-yellow-700';
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-3">
        <Loader2 size={40} className="text-blue-600 animate-spin" />
        <p className="text-blue-600 font-medium">Loading Dashboard...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage patient appointments and queries.</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut size={18} /> Logout
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
             <h2 className="text-lg font-bold text-gray-800">Recent Appointments</h2>
             <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{appointments.length} Total</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Patient Name</th>
                  <th className="px-6 py-4 font-semibold">Contact</th>
                  <th className="px-6 py-4 font-semibold">Service</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {appointments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  appointments.map((appt) => (
                    <tr key={appt.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(appt.createdAt).toLocaleDateString()}
                        <div className="text-xs text-gray-400">{new Date(appt.createdAt).toLocaleTimeString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{appt.fullName}</div>
                        {appt.notes && <div className="text-xs text-gray-500 truncate max-w-[150px]" title={appt.notes}>{appt.notes}</div>}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="text-gray-900">{appt.phone}</div>
                        <div className="text-gray-500 text-xs">{appt.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                        {appt.service}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(appt.status)}`}>
                          {appt.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                            {appt.status === 'pending' && (
                                <button 
                                    onClick={() => updateStatus(appt.id, 'confirmed')}
                                    className="p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors"
                                    title="Confirm"
                                >
                                    <CheckCircle size={18} />
                                </button>
                            )}
                             {appt.status === 'confirmed' && (
                                <button 
                                    onClick={() => updateStatus(appt.id, 'completed')}
                                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                    title="Complete"
                                >
                                    <Clock size={18} />
                                </button>
                            )}
                            <button 
                                onClick={() => deleteAppt(appt.id)}
                                className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                                title="Delete"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;