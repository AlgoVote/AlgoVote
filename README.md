# 🗳️ 알고투표 (AlgoVote)

> "정책으로 알고, 공약으로 투표하자."

**알고투표**는 이미지나 뉴스 프레임이 아닌,  
각 후보자의 **정책과 공약을 바탕으로 현명한 투표**를 할 수 있도록 돕는 웹 서비스입니다.  
정치적 중립성과 정보의 균형을 목표로 하며, **RAG 기반 챗봇 기술을 통해 공약 질의응답**도 지원합니다.

## 🚀 주요 기능

### 1. 공약 비교 페이지 (`/compare`)
- 정책 카테고리(경제, 복지 등) 또는 지역 기준(수도권, 영남 등)으로 **후보별 공약 비교**
- 카테고리 선택 → 정책 항목별 공약 내용 비교
- 공약 "요약 보기 / 더 보기" 토글
- 출처 및 링크 강조

### 2. 공약 챗봇 페이지 (`/chatbot`)
- 사용자가 원하는 후보와 "가상 대화" 형식으로 공약을 질의응답
- **RAG (Retrieval-Augmented Generation)** 기반 응답 시스템
- 질문 예시 버튼, 출처 강조, 정책 요약 정리 제공
- 후보별 말투/컨셉 기반 페르소나 응답

## 🧠 기술 스택

| 분야 | 기술 |
|------|------|
| 프론트엔드 | Next.js 14, Tailwind CSS |
| 백엔드 | Supabase (PostgreSQL + Vector DB), OpenAI API |
| 챗봇 AI | GPT-4-turbo + RAG (LangChain-like 구조) |
| 배포 | Vercel |
| 디자인 | Figma, Notion 협업 |

## 📦 프로젝트 구조

```bash
.
├── pages/
│   ├── index.tsx         # 메인페이지 - 후보 카드 리스트
│   ├── compare.tsx       # 공약 비교 페이지
│   └── chatbot.tsx       # 후보별 챗봇 인터페이스
├── components/
│   ├── CandidateCard.tsx
│   ├── ChatInterface.tsx
│   └── ComparisonTable.tsx
├── lib/
│   ├── supabase.ts       # Supabase 연결
│   └── openai.ts         # RAG + GPT 연결
├── public/
│   └── assets/
├── styles/
└── README.md
