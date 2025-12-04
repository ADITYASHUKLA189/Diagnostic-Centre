export interface Appointment {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string; // ISO string
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactInfo {
  phone: string;
  altPhone: string;
  email: string;
  address: string;
  timings: string;
}