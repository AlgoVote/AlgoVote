'use client';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import { candidates } from '@/data/candidates';
import { ChatMessage } from '@/types';

export default function ChatbotPage() {
  const [step, setStep] = useState<'selection' | 'chat'>('selection');
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectCandidate = (candidateId: string) => {
    setSelectedCandidateId(candidateId);
    setStep('chat');
    
    // 후보 선택 시 환영 메시지 추가
    const selectedCandidate = candidates.find(c => c.id === candidateId);
    if (selectedCandidate) {
      const welcomeMessage: ChatMessage = {
        id: nanoid(),
        role: 'bot',
        content: `안녕하세요, ${selectedCandidate.name}입니다. 제 정책에 대해 어떤 것이 궁금하신가요?`,
        timestamp: new Date(),
        candidateId: candidateId
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleSendMessage = (content: string) => {
    if (!selectedCandidateId) {
      return;
    }

    // 사용자 메시지 추가
    const userMessage: ChatMessage = {
      id: nanoid(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // 챗봇 응답 시뮬레이션 (실제 API 연동 전 테스트용)
    setTimeout(() => {
      // 랜덤 응답 생성 (실제로는 RAG 기반 응답이 필요함)
      const responses = [
        {
          text: `${content}에 대한 제 정책은 다음과 같습니다:`,
          policies: [
            "청년 주거 안정을 위한 20만호 공급",
            "청년 기본소득 30만원 지급",
            "대학 등록금 부담 경감"
          ],
          source: "2022 대선 공약집 23-25페이지",
          sourceUrl: "https://example.com/policy/youth"
        },
        {
          text: "그 문제에 대해 저는 다음과 같은 해결책을 제시합니다:",
          policies: [
            "중소기업 디지털 전환 지원 확대",
            "지역 균형 발전을 위한 인프라 구축",
            "공정 경쟁 환경 조성"
          ],
          source: "2022 경제정책 백서 42-45페이지",
          sourceUrl: "https://example.com/policy/economy"
        },
        {
          text: "해당 이슈에 대한 제 입장은 다음과 같습니다:",
          policies: [
            "노인 돌봄 서비스 확충",
            "어르신 의료비 부담 경감",
            "노인 일자리 확대"
          ],
          source: "2022 복지정책 공약집 15-18페이지",
          sourceUrl: "https://example.com/policy/welfare"
        }
      ];

      const response = responses[Math.floor(Math.random() * responses.length)];
      
      // 정책 리스트를 문자열로 변환
      const policiesText = response.policies.map(p => `• ${p}`).join('\n');
      
      const botMessage: ChatMessage = {
        id: nanoid(),
        role: 'bot',
        content: `${response.text}\n\n${policiesText}`,
        timestamp: new Date(),
        candidateId: selectedCandidateId,
        sourceDescription: response.source,
        sourceUrl: response.sourceUrl
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleBackToSelection = () => {
    setStep('selection');
    setMessages([]);
    setSelectedCandidateId(null);
  };

  const selectedCandidate = selectedCandidateId
    ? candidates.find((c) => c.id === selectedCandidateId)
    : null;

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {step === 'selection' ? (
        // 후보자 선택 화면
        <div id="step1" className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-4">21대 대선 후보자 목록</h1>
          <p className="text-center text-text-secondary mb-4">
            대선 후보자에게 궁금한 것을 직접 물어보세요!
          </p>
          
          <div className="bg-[#3449FF] text-white p-4 rounded-xl mb-8">
            <p className="text-center text-sm">
              이 챗봇은 RAG 기반 챗봇으로, 기존 AI 기반 챗봇의 단점을 보완한 챗봇입니다.<br />
              후보자와 직접 대화하는 느낌으로 정책에 대해 상세히 질문해보세요!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white rounded-lg shadow-sm p-6 cursor-pointer border border-[#E5E7EB]"
                onClick={() => handleSelectCandidate(candidate.id)}
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4 flex-shrink-0">
                    <Image
                      src={candidate.profileImage}
                      alt={candidate.name}
                      className="object-cover object-top"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{candidate.name}</h3>
                    <p className="text-sm text-[#6B7280] mb-1">
                      &ldquo;{candidate.slogan}&rdquo;
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      안녕하세요, 윤석열입니다. 궁금한 정책이 있다면 물어보세요!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 채팅 화면
        <div id="step2" className="h-screen flex flex-col bg-[#F5F7FA]">
          <div className="bg-white shadow-sm py-3 px-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative">
                  {selectedCandidate && (
                    <Image
                      src={selectedCandidate.profileImage}
                      alt={selectedCandidate.name}
                      className="object-cover object-top"
                      fill
                    />
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-bold">{selectedCandidate?.name}</h2>
                  <p className="text-sm text-[#6B7280]">{selectedCandidate?.party}</p>
                </div>
              </div>
              <button
                onClick={handleBackToSelection}
                className="w-10 h-10 flex items-center justify-center text-[#6B7280]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="chat-container flex-1 container mx-auto px-4 py-4 overflow-hidden flex flex-col">
            <div className="chat-messages flex-1 overflow-y-auto pb-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'bot' && selectedCandidate && (
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 relative">
                      <Image
                        src={selectedCandidate.profileImage}
                        alt={selectedCandidate.name}
                        className="object-cover object-top"
                        fill
                      />
                    </div>
                  )}
                  <div className={`message-bubble ${
                    message.role === 'user' 
                      ? 'bg-[#3449FF] text-white' 
                      : 'bg-[#F0F4FF] text-[#1E1E1E]'
                  } rounded-xl p-3 max-w-[80%]`}>
                    <p className="whitespace-pre-line">{message.content}</p>
                    
                    {message.role === 'bot' && message.sourceDescription && (
                      <div className="mt-2 bg-white bg-opacity-50 p-2 rounded text-xs">
                        <p className="text-[#6B7280]">
                          출처: {message.sourceUrl ? (
                            <a href={message.sourceUrl} className="text-[#3449FF] underline" target="_blank" rel="noopener noreferrer">
                              {message.sourceDescription}
                            </a>
                          ) : (
                            message.sourceDescription
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 relative">
                    {selectedCandidate && (
                      <Image
                        src={selectedCandidate.profileImage}
                        alt={selectedCandidate.name}
                        className="object-cover object-top"
                        fill
                      />
                    )}
                  </div>
                  <div className="message-bubble bg-[#F0F4FF] rounded-xl p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-[#6B7280] animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-[#6B7280] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-[#6B7280] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="chat-status mb-2">
              <p className="text-xs text-[#6B7280] mt-1">
                ※ 이 챗봇은 각 후보의 공식 공약에 기반한 응답을 제공하며, 정보 정확성을 위해 검수되었습니다.
              </p>
            </div>

            <div className="chat-input-container mt-2 bg-white rounded-lg shadow-sm p-2 flex items-center">
              <input
                type="text"
                className="flex-1 py-2 px-3 text-[#1E1E1E] border-none focus:outline-none"
                placeholder="정책에 대해 궁금한 점을 물어보세요"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                    handleSendMessage(e.currentTarget.value.trim());
                    e.currentTarget.value = '';
                  }
                }}
              />
              <button
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  if (input.value.trim()) {
                    handleSendMessage(input.value.trim());
                    input.value = '';
                  }
                }}
                className="w-10 h-10 flex items-center justify-center text-white bg-[#3449FF] rounded-full ml-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 