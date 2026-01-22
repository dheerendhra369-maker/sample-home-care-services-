
export enum ServiceType {
  PERSONAL_CARE = 'Personal Care',
  NURSING = 'Nursing',
  COMPANIONSHIP = 'Companionship',
  CHORES = 'House Chores',
  TRANSPORT = 'Transportation',
  MEALS = 'Meal Prep'
}

export interface Caregiver {
  id: string;
  name: string;
  specialty: ServiceType[];
  rating: number;
  experience: string;
  avatar: string;
  availability: string;
}

export interface Appointment {
  id: string;
  serviceType: ServiceType;
  date: string;
  time: string;
  caregiverName: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface HealthMetric {
  time: string;
  heartRate: number;
  steps: number;
  sleep: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
