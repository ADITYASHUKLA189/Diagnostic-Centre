import { Appointment } from '../types';

const STORAGE_KEY = 'shubhangi_appointments';
const AUTH_KEY = 'shubhangi_auth';

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const StorageService = {
  getAppointments: async (): Promise<Appointment[]> => {
    await delay(500);
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveAppointment: async (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>): Promise<Appointment> => {
    await delay(800);
    const current = await StorageService.getAppointments();
    
    const newAppointment: Appointment = {
      ...appointment,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: Date.now(),
      status: 'pending'
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([newAppointment, ...current]));
    return newAppointment;
  },

  updateStatus: async (id: string, status: Appointment['status']): Promise<void> => {
    const current = await StorageService.getAppointments();
    const updated = current.map(app => app.id === id ? { ...app, status } : app);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  deleteAppointment: async (id: string): Promise<void> => {
    const current = await StorageService.getAppointments();
    const updated = current.filter(app => app.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  // Mock Authentication
  login: async (password: string): Promise<boolean> => {
    await delay(500);
    // Hardcoded password for demo
    if (password === 'admin123') {
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  },

  isAuthenticated: (): boolean => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  }
};