'use client';

import React from 'react';
import Image from 'next/image';
import ChatBotButton from '../../components/ui/ChatBotButton';
import { candidates, comparisonData, categoryDescriptions } from '@/data/candidates';

export default function Compare() {
  const [selectedCandidates, setSelectedCandidates] = React.useState<string[]>([]);
  const [isComparing, setIsComparing] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState<string | null>(null);

  const handleCandidateSelection = (candidateId: string) => {
    setSelectedCandidates(prev => {
      if (prev.includes(candidateId)) {
        return prev.filter(id => id !== candidateId);
      } else {
        if (prev.length < 3) {
          return [...prev, candidateId];
        }
        return prev;
      }
    });
  };

  const startComparing = () => {
    if (selectedCandidates.length >= 2) {
      setIsComparing(true);
      // Scroll to top of the page when showing comparison results
      window.scrollTo(0, 0);
    }
  };

  const showTooltip = (category: string) => {
    setTooltipVisible(category);
  };

  const hideTooltip = () => {
    setTooltipVisible(null);
  };

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
        <h1 className="text-3xl font-bold text-text-primary text-center mb-10">공약 비교하기</h1>

        {!isComparing ? (
          <>
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-text-primary mb-2">비교할 후보를 선택해주세요 (최대 3명)</h2>
                <p className="text-text-secondary">후보자를 선택하면 정책 별로 공약을 비교할 수 있습니다.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className={`cursor-pointer border ${
                      selectedCandidates.includes(candidate.id)
                        ? 'border-primary bg-primary bg-opacity-5'
                        : 'border-gray-100'
                    } rounded-xl p-3 hover:border-primary transition-colors`}
                    onClick={() => handleCandidateSelection(candidate.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border border-gray-100">
                        <Image 
                          src={candidate.profileImage} 
                          alt={candidate.name} 
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">{candidate.name}</div>
                        <div className="text-xs text-text-secondary">{candidate.party}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={startComparing}
                  disabled={selectedCandidates.length < 2}
                  className={`px-6 py-3 rounded-button ${
                    selectedCandidates.length >= 2
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-text-secondary cursor-not-allowed'
                  }`}
                >
                  {selectedCandidates.length >= 2 ? '공약 비교하기' : '최소 2명 이상의 후보를 선택해주세요'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <button
                onClick={() => setIsComparing(false)}
                className="flex items-center text-text-secondary hover:text-text-primary transition-colors"
              >
                <i className="ri-arrow-left-line mr-1"></i>
                <span>후보 다시 선택하기</span>
              </button>
              
              <div className="flex items-center space-x-3">
                {candidates
                  .filter((c) => selectedCandidates.includes(c.id))
                  .map((candidate) => (
                    <div key={candidate.id} className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100">
                        <Image 
                          src={candidate.profileImage} 
                          alt={candidate.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <span className="text-sm text-text-primary font-medium ml-2">{candidate.name}</span>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">비교 결과</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-divider">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 bg-gray-50 text-left text-sm font-medium text-text-secondary tracking-wider w-1/5">카테고리</th>
                      {selectedCandidates.map(candidateId => {
                        const candidate = candidates.find(c => c.id === candidateId);
                        return (
                          <th key={candidateId} className="px-4 py-3 bg-gray-50 text-left text-sm font-medium text-text-secondary tracking-wider">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full overflow-hidden mr-2 flex-shrink-0">
                                {candidate?.profileImage && (
                                  <Image 
                                    src={candidate.profileImage} 
                                    alt={`${candidate?.name || '후보자'} 후보`}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              <div>
                                <span className="font-medium">{candidate?.name} 후보</span>
                                <p className="text-xs text-text-secondary">{candidate?.party}</p>
                              </div>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-divider">
                    {Object.entries(comparisonData).map(([category, candidatePolicies], index) => (
                      <tr key={category} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-4 text-sm font-medium text-text-primary relative">
                          <div className="flex items-center">
                            {category}
                            <button 
                              className="ml-1 text-text-secondary hover:text-primary transition"
                              onMouseEnter={() => showTooltip(category)}
                              onMouseLeave={hideTooltip}
                            >
                              <i className="ri-information-line"></i>
                            </button>
                            {tooltipVisible === category && (
                              <div className="absolute z-10 left-0 -mt-1 w-64 p-3 bg-white shadow-lg rounded-lg border border-divider text-xs text-text-secondary">
                                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                              </div>
                            )}
                          </div>
                        </td>
                        {selectedCandidates.map(candidateId => (
                          <td key={candidateId} className="px-4 py-4 text-sm text-text-secondary">
                            <div className="whitespace-pre-wrap">
                              {candidatePolicies[candidateId as keyof typeof candidatePolicies]?.split(' · ').map((item, idx) => (
                                <div key={idx} className="mb-1 flex items-start">
                                  <span className="text-primary mr-1.5">•</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-lg text-sm text-text-secondary">
                <p className="flex items-center mb-1"><i className="ri-information-line text-primary mr-2"></i> <span className="font-medium">안내사항</span></p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>각 후보자의 정책은 선거관리위원회 등록 자료와 공식 발표를 기반으로 작성되었습니다.</li>
                  <li>더 자세한 공약 내용은 각 후보자의 상세 페이지에서 확인하실 수 있습니다.</li>
                  <li>후보자 간 직접 소통이나 토론 내용은 포함되지 않았습니다.</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </main>

      {/* 챗봇 플로팅 버튼 */}
      <ChatBotButton />
    </div>
  );
} 