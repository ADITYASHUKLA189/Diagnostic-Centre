import { Appointment } from '../types';
import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

const AUTH_KEY = 'shubhangi_auth';
const COLLECTION_NAME = 'appointments';

export const StorageService = {
  getAppointments: async (): Promise<Appointment[]> => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Appointment[];
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  },

  saveAppointment: async (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>): Promise<Appointment> => {
    try {
      const newAppointment = {
        ...appointment,
        createdAt: Date.now(),
        status: 'pending'
      };
      
      const docRef = await addDoc(collection(db, COLLECTION_NAME), newAppointment);
      return {
        id: docRef.id,
        ...newAppointment
      } as Appointment;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  },

  updateStatus: async (id: string, status: Appointment['status']): Promise<void> => {
    try {
      const apptRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(apptRef, { status });
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  },

  deleteAppointment: async (id: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error("Error deleting document: ", error);
      throw error;
    }
  },

  // Mock Authentication (Frontend only)
  login: async (password: string): Promise<boolean> => {
    // Artificial delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Hardcoded password for demo/admin access
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