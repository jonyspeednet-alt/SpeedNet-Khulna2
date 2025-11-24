export interface Plan {
  id: string;
  name: string;
  speed: string;
  price: number;
  features: string[];
  recommended?: boolean;
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface CoverageResult {
  isAvailable: boolean;
  message: string;
}
