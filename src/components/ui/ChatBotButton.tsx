'use client';

import React, { useState } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export default function ChatBotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'bot',
      text: '안녕하세요! 후보자들의 공약에 대해 궁금한 점이 있으시면 편하게 질문해주세요.',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock response based on user query (in a real app, this would be a call to an AI service)
      let botResponse = '';
      const userQuery = inputMessage.toLowerCase();
      
      if (userQuery.includes('경제') || userQuery.includes('일자리')) {
        botResponse = '후보자들은 경제 정책에 많은 공약을 내놓고 있습니다. 이재명 후보는 디지털 경제 전환과 중소기업 지원을, 홍준표 후보는 대기업 규제 완화와 투자 활성화를, 이준석 후보는 스타트업 육성과 청년 일자리 확대를 중점적으로 제안하고 있습니다.';
      } else if (userQuery.includes('복지') || userQuery.includes('기본소득')) {
        botResponse = '복지 정책에서는 후보별 접근법의 차이가 뚜렷합니다. 이재명 후보는 기본소득 도입과 복지 사각지대 해소를, 홍준표 후보는 선별적 복지와 민간 참여 확대를, 이준석 후보는 디지털 복지 플랫폼 구축을 강조하고 있습니다.';
      } else if (userQuery.includes('교육') || userQuery.includes('학교')) {
        botResponse = '교육 정책의 경우, 이재명 후보는 교육 격차 해소와 공교육 강화를, 홍준표 후보는 교육 자율성 확대와 경쟁력 강화를, 이준석 후보는 디지털 교육 확대와 평생교육 체계 구축을 중점적으로 공약하고 있습니다.';
      } else if (userQuery.includes('환경') || userQuery.includes('탄소')) {
        botResponse = '환경 정책의 경우, 이재명 후보는 2050 탄소중립 달성과 녹색 일자리 창출을, 홍준표 후보는 원전 확대와 친환경 에너지 개발을, 이준석 후보는 스마트 그린시티 구축과 신재생에너지 산업 육성을 중점적으로 제안하고 있습니다.';
      } else {
        botResponse = '해당 주제에 대한 자세한 정보는 각 후보자의 상세 페이지에서 확인하실 수 있습니다. 다른 정책 분야에 대해 질문해주시거나, 좀 더 구체적인 질문을 해주시면 도움드리겠습니다.';
      }
      
      // Add bot message to chat
      const botMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 w-80 md:w-96 max-h-[80vh] flex flex-col">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-divider">
            <h3 className="font-semibold text-text-primary flex items-center">
              <i className="ri-question-answer-line mr-2 text-primary"></i>
              공약 질문하기
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-text-secondary hover:text-text-primary"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto mb-4 space-y-4 max-h-[40vh]">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-gray-100 text-text-primary rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="flex-shrink-0">
            <div className="flex space-x-2">
              <input
                type="text"
                className="flex-grow border border-divider rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="공약에 대해 궁금한 점을 질문해보세요."
              />
              <button 
                type="submit"
                className="bg-primary text-white p-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:bg-opacity-70"
                disabled={!inputMessage.trim() || isLoading}
              >
                <i className="ri-send-plane-fill"></i>
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <i className={`${isOpen ? 'ri-close-line' : 'ri-chat-1-line'} text-xl`}></i>
      </button>
    </div>
  );
} 