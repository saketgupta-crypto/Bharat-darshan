import { Itinerary } from "./mockData";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In a real app, this would be hashed
  createdAt: Date;
  preferences?: {
    favoriteDestinations?: string[];
    preferredBudget?: 'budget' | 'mid-range' | 'luxury';
    travelDates?: {
      startDate?: Date;
      endDate?: Date;
    };
  };
  savedItineraries?: string[]; // IDs of saved itineraries
  bookedTrips?: {
    itineraryId: string;
    bookingDate: Date;
    status: 'confirmed' | 'pending' | 'cancelled';
  }[];
}

// In-memory storage for users (in a real app, this would be a database)
let users: User[] = [];

// Function to get all users
export const getUsers = (): User[] => {
  return users;
};

// Function to get a user by email
export const getUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};

// Function to get a user by ID
export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

// Function to create a new user
export const createUser = (userData: Omit<User, 'id' | 'createdAt'>): User => {
  const newUser: User = {
    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    createdAt: new Date(),
    ...userData
  };
  
  users.push(newUser);
  return newUser;
};

// Function to update user data
export const updateUser = (id: string, updates: Partial<User>): User | null => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;
  
  users[userIndex] = { ...users[userIndex], ...updates };
  return users[userIndex];
};

// Function to save an itinerary for a user
export const saveItineraryForUser = (userId: string, itineraryId: string): boolean => {
  const user = getUserById(userId);
  if (!user) return false;
  
  if (!user.savedItineraries) {
    user.savedItineraries = [];
  }
  
  if (!user.savedItineraries.includes(itineraryId)) {
    user.savedItineraries.push(itineraryId);
    return true;
  }
  
  return false;
};

// Function to book a trip for a user
export const bookTripForUser = (
  userId: string, 
  itineraryId: string, 
  status: 'confirmed' | 'pending' | 'cancelled' = 'pending'
): boolean => {
  const user = getUserById(userId);
  if (!user) return false;
  
  if (!user.bookedTrips) {
    user.bookedTrips = [];
  }
  
  user.bookedTrips.push({
    itineraryId,
    bookingDate: new Date(),
    status
  });
  
  return true;
};