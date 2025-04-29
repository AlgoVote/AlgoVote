export interface Candidate {
  id: string;
  name: string;
  party: string;
  age: number;
  birthplace: string;
  education: string[];
  career: string[];
  slogan: string;
  profileImage: string;
  websiteUrl?: string;
}

export interface Pledge {
  id: string;
  candidateId: string;
  title: string;
  summary: string;
  category: string;
  background: string;
  content: string[];
  implementation: string;
  period: string;
  funding: string;
  order: number;
}

export interface Statement {
  id: string;
  candidateId: string;
  content: string;
  source: string;
  date: string;
}

export interface QnA {
  id: string;
  candidateId: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
} 