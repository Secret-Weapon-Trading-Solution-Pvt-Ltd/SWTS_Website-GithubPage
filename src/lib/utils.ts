import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Base path for GitHub Pages deployment (set via next.config.js env)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Get asset path with basePath prefix for static assets (videos, raw images, etc.)
export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

// Merge Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (basic)
export const isValidPhone = (phone: string): boolean => {
  if (!phone) return false;
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
};

// Format percentage
export const formatPercentage = (value: number): string => {
  return `${Math.round(value)}%`;
};

// Delay function for animations
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Generate unique ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Capitalize first letter
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Get first name from full name
export const getFirstName = (fullName: string): string => {
  return fullName.split(' ')[0] || fullName;
};

// Storage helpers for assessment state
export const storage = {
  setAssessmentData: (data: unknown): void => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('swts_assessment', JSON.stringify(data));
    }
  },
  getAssessmentData: <T>(): T | null => {
    if (typeof window !== 'undefined') {
      const data = sessionStorage.getItem('swts_assessment');
      return data ? JSON.parse(data) : null;
    }
    return null;
  },
  clearAssessmentData: (): void => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('swts_assessment');
    }
  },
};
