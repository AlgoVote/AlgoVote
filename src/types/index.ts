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

// 챗봇 관련 타입 정의
export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
  candidateId?: string; // 챗봇 메시지일 경우 어떤 후보의 메시지인지
  sourceUrl?: string; // 공약 출처 URL
  sourceDescription?: string; // 공약 출처 설명
}

export interface SuggestedQuestion {
  id: string;
  text: string;
  candidateId?: string; // 특정 후보에게만 적용되는 질문인 경우
} 