'use client';

import { ChatMessage, Candidate } from '@/types';
import { useEffect, useRef } from 'react';
import ChatMessageComponent from './chat-message';
import Image from 'next/image';

interface ChatHistoryProps {
  messages: ChatMessage[];
  candidates: Candidate[];
  isTyping?: boolean;
  selectedCandidateId: string | null;
}

export default function ChatHistory({ 
  messages, 
  candidates,
  isTyping = false,
  selectedCandidateId 
}: ChatHistoryProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const selectedCandidate = selectedCandidateId 
    ? candidates.find(c => c.id === selectedCandidateId) 
    : undefined;

  // 새 메시지가 추가될 때마다 스크롤을 맨 아래로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-secondary text-center">
            후보를 선택하고 질문을 입력해주세요<br />
            후보의 공약과 정책을 알려드립니다
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {messages.map((message) => {
            const messageCandidate = message.candidateId 
              ? candidates.find(c => c.id === message.candidateId) 
              : undefined;
              
            return (
              <ChatMessageComponent 
                key={message.id} 
                message={message} 
                candidate={messageCandidate}
              />
            );
          })}
          
          {isTyping && selectedCandidate && (
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 mr-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={selectedCandidate.profileImage}
                    alt={`${selectedCandidate.name} 후보`}
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
              <div className="bg-gray-100 py-3 px-4 rounded-2xl rounded-tl-sm max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
} 