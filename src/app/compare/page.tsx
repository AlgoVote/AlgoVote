'use client';

import React from 'react';
import Image from 'next/image';
import ChatBotButton from '../../components/ui/ChatBotButton';
import { candidates, comparisonData, categoryDescriptions } from '@/data/candidates';

export default function Compare() {
  const [tooltipVisible, setTooltipVisible] = React.useState<string | null>(null);
  const [viewType, setViewType] = React.useState<'category' | 'region'>('category');
  const [selectedCategory, setSelectedCategory] = React.useState('economy');
  const [selectedRegion, setSelectedRegion] = React.useState('capital');
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({});

  // 항상 모든 후보를 선택한 상태로 설정 (4명)
  const allCandidateIds = candidates.slice(0, 4).map(candidate => candidate.id);

  const showTooltip = (category: string) => {
    setTooltipVisible(category);
  };

  const hideTooltip = () => {
    setTooltipVisible(null);
  };

  const handleViewTypeChange = (type: 'category' | 'region') => {
    setViewType(type);
  };

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    // DOM 조작을 위한 setTimeout 추가
    setTimeout(() => {
      const toggleButtons = document.querySelectorAll('.toggle-btn');
      toggleButtons.forEach(button => {
        const content = button.nextElementSibling as HTMLElement;
        if (content && content.classList.contains('toggle-content')) {
          const buttonElement = button as HTMLElement;
          const span = buttonElement.querySelector('span');
          const icon = buttonElement.querySelector('i');
          
          if (content.style.display === 'block') {
            content.style.display = 'none';
            if (span) span.textContent = '더 보기';
            if (icon) icon.className = 'ri-arrow-down-s-line';
          } else {
            content.style.display = 'block';
            if (span) span.textContent = '접기';
            if (icon) icon.className = 'ri-arrow-up-s-line';
          }
        }
      });
    }, 0);
  };

  // 초기화 함수 추가
  React.useEffect(() => {
    const toggleContents = document.querySelectorAll('.toggle-content');
    toggleContents.forEach(content => {
      (content as HTMLElement).style.display = 'none';
    });
    
    // 토글 버튼 이벤트 리스너 추가
    const handleToggleClick = (e: Event) => {
      const button = e.currentTarget as HTMLElement;
      const content = button.nextElementSibling as HTMLElement;
      
      if (content && content.classList.contains('toggle-content')) {
        const span = button.querySelector('span');
        const icon = button.querySelector('i');
        
        if (content.style.display === 'block') {
          content.style.display = 'none';
          if (span) span.textContent = '더 보기';
          if (icon) icon.className = 'ri-arrow-down-s-line';
        } else {
          content.style.display = 'block';
          if (span) span.textContent = '접기';
          if (icon) icon.className = 'ri-arrow-up-s-line';
        }
      }
    };
    
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
      button.addEventListener('click', handleToggleClick);
    });
    
    return () => {
      toggleButtons.forEach(button => {
        button.removeEventListener('click', handleToggleClick);
      });
    };
  }, [viewType, selectedCategory]); // 뷰 타입이나 카테고리가 변경될 때마다 재실행

  // 예시 정책 데이터
  const policyItems = [
    {
      id: 'youth-jobs',
      title: '청년 일자리 창출',
      policies: [
        {
          candidate: '이재명',
          summary: '청년 일자리 100만개 창출 및 청년 기업가 지원 확대',
          details: [
            '청년 창업 지원금 확대 (최대 5천만원)',
            '청년 일자리 매칭 플랫폼 구축',
            '청년 기업 세금 감면 혜택 3년간 제공',
            '지역 청년 일자리 지원 특별 프로그램 운영'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '윤석열',
          summary: '민간 주도 일자리 창출 및 청년 취업 지원 정책 강화',
          details: [
            '기업 주도 청년 일자리 창출 세제 혜택 제공',
            '청년 구직 활동 지원금 확대 (월 80만원)',
            '중소기업 청년 취업자 소득세 감면 확대',
            '청년 취업 교육 바우처 제도 도입'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '심상정',
          summary: '공공 부문 중심 양질의 청년 일자리 확대',
          details: [
            '공공기관 청년 의무 고용 비율 30% 확대',
            '청년 취업자 주거 지원 특별 프로그램',
            '첫 취업 청년 소득세 3년 면제',
            '청년 창업 실패 시 재기 지원 프로그램'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '안철수',
          summary: '디지털 경제 중심 청년 일자리 확대',
          details: [
            '디지털 전환 일자리 50만개 창출',
            '스타트업 청년 고용 지원금 확대',
            'AI 및 빅데이터 분야 전문 인력 양성',
            '청년 창업 특구 10개 조성'
          ],
          source: '후보 공식 정책집 (PDF)'
        }
      ]
    },
    {
      id: 'small-business',
      title: '중소기업 지원',
      policies: [
        {
          candidate: '이재명',
          summary: '중소기업 디지털 전환 지원 및 금융 지원 확대',
          details: [
            '중소기업 디지털 전환 지원금 2조원 편성',
            '중소기업 저금리 대출 확대 (금리 1.5%)',
            '중소기업 기술 보호 강화 제도 마련',
            '중소기업 수출 지원 프로그램 확대'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '윤석열',
          summary: '중소기업 규제 완화 및 세제 혜택 확대',
          details: [
            '중소기업 규제 샌드박스 제도 도입',
            '중소기업 법인세 감면 확대 (최대 20%)',
            '중소기업 R&D 세액공제 확대',
            '중소기업 상생협력 지원 강화'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '심상정',
          summary: '노동친화적 중소기업 지원 확대',
          details: [
            '중소기업 근로시간 단축 지원금 확대',
            '노동자 복지 증진 중소기업 세제 지원',
            '중소기업 직원 교육비 지원 확대',
            '중소기업 안전 투자 지원금 신설'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '안철수',
          summary: '중소기업 기술 혁신 집중 지원',
          details: [
            '중소기업 R&D 전담 지원 센터 설립',
            '혁신 중소기업 세액 공제 확대',
            '중소기업-대학 협력 지원 강화',
            '신기술 개발 중소기업 특허 비용 지원'
          ],
          source: '후보 공식 정책집 (PDF)'
        }
      ]
    },
    {
      id: 'real-estate',
      title: '부동산 정책',
      policies: [
        {
          candidate: '이재명',
          summary: '공공주택 공급 확대 및 부동산 투기 근절',
          details: [
            '공공주택 50만호 추가 공급',
            '다주택자 종합부동산세 강화',
            '임대차 3법 보완 및 강화',
            '토지 공개념 도입 검토'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '윤석열',
          summary: '민간 주도 주택 공급 확대 및 부동산 규제 완화',
          details: [
            '민간 주택 공급 확대를 위한 규제 완화',
            '재건축·재개발 규제 완화',
            '종합부동산세 개편 및 완화',
            '1가구 1주택자 양도소득세 부담 경감'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '심상정',
          summary: '주거 공공성 강화 및 투기 근절',
          details: [
            '공공 임대주택 100만호 확대',
            '초과이익환수제 재도입',
            '토지공개념 및 불로소득 환수',
            '1가구 1주택 원칙 세제 지원'
          ],
          source: '후보 공식 정책집 (PDF)'
        },
        {
          candidate: '안철수',
          summary: '시장 안정화 및 주거 복지 확대',
          details: [
            '시장 수요에 맞는 공급 정책 도입',
            '부동산 과세 체계 합리적 개편',
            '청년·신혼부부 주택 구매 지원 확대',
            '임대주택 품질 개선 및 관리 강화'
          ],
          source: '후보 공식 정책집 (PDF)'
        }
      ]
    }
  ];

  // 지역별 공약 데이터
  const regionalPromises = {
    capital: [
      {
        candidate: '이재명',
        policies: [
          { icon: 'ri-train-line', text: 'GTX D노선 추가 및 GTX A·B·C 조기 완공' },
          { icon: 'ri-hospital-line', text: '수도권 공공병원 10개소 추가 설립' },
          { icon: 'ri-building-4-line', text: '수도권 주택 30만호 공급 계획 추진' },
          { icon: 'ri-recycle-line', text: '수도권 미세먼지 저감 특별 대책 추진' },
          { icon: 'ri-government-line', text: '경기도 행정수도 기능 일부 이전 검토' }
        ]
      },
      {
        candidate: '윤석열',
        policies: [
          { icon: 'ri-train-line', text: '수도권 광역철도망 확충 및 고속도로 확장' },
          { icon: 'ri-building-line', text: '수도권 그린벨트 조정을 통한 주택 공급 확대' },
          { icon: 'ri-community-line', text: '수도권 신도시 교통·교육·의료 인프라 확충' },
          { icon: 'ri-building-2-line', text: '수도권 노후 아파트 재건축 규제 완화' },
          { icon: 'ri-seedling-line', text: '수도권 환경 오염 저감 및 친환경 산업단지 조성' }
        ]
      },
      {
        candidate: '심상정',
        policies: [
          { icon: 'ri-building-4-line', text: '수도권 공공임대주택 확대' },
          { icon: 'ri-route-line', text: '수도권 대중교통 공공성 강화' },
          { icon: 'ri-leaf-line', text: '수도권 녹지 30% 확대 계획' },
          { icon: 'ri-government-line', text: '수도권-지방 상생 발전 모델 구축' },
          { icon: 'ri-building-line', text: '수도권 과밀화 해소 및 계획적 분산' }
        ]
      },
      {
        candidate: '안철수',
        policies: [
          { icon: 'ri-global-line', text: '판교 제3테크노밸리 조성' },
          { icon: 'ri-building-2-line', text: '수도권 첨단산업 클러스터 구축' },
          { icon: 'ri-taxi-wifi-line', text: '수도권 스마트 교통망 확충' },
          { icon: 'ri-home-8-line', text: '수도권 지역별 맞춤형 주택 공급' },
          { icon: 'ri-plant-line', text: '수도권 미세먼지 저감 그린벨트 조성' }
        ]
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
        <h1 className="text-3xl font-bold text-text-primary text-center mb-10">공약 비교하기</h1>
        
        {/* 비교 기준 선택 영역 */}
        <div className="mb-8 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">비교 기준 선택</h2>
            <div className="relative group">
              <div className="w-6 h-6 flex items-center justify-center text-text-secondary cursor-help">
                <i className="ri-information-line"></i>
              </div>
              <span className="absolute right-0 top-full w-64 p-3 bg-white shadow-lg rounded-lg border border-divider text-xs text-text-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                동시에 두 기준을 선택할 수는 없습니다.
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <input 
                type="radio" 
                id="category-view" 
                name="view-type" 
                className="absolute opacity-0 w-0 h-0"
                checked={viewType === 'category'}
                onChange={() => handleViewTypeChange('category')}
              />
              <label
                htmlFor="category-view"
                className={`block border-2 rounded-full px-5 py-2 font-medium cursor-pointer ${
                  viewType === 'category' 
                    ? 'border-primary bg-primary bg-opacity-5 text-primary' 
                    : 'border-gray-300 text-text-secondary hover:border-gray-400'
                }`}
              >
                정책 카테고리별 보기
              </label>
            </div>

            <div className="relative">
              <input 
                type="radio" 
                id="region-view" 
                name="view-type" 
                className="absolute opacity-0 w-0 h-0"
                checked={viewType === 'region'}
                onChange={() => handleViewTypeChange('region')}
              />
              <label
                htmlFor="region-view"
                className={`block border-2 rounded-full px-5 py-2 font-medium cursor-pointer ${
                  viewType === 'region' 
                    ? 'border-primary bg-primary bg-opacity-5 text-primary' 
                    : 'border-gray-300 text-text-secondary hover:border-gray-400'
                }`}
              >
                지역별 보기
              </label>
            </div>
          </div>
        </div>

        {/* 정책 카테고리별 보기 섹션 */}
        <section id="category-section" className={`mb-8 ${viewType === 'category' ? 'block' : 'hidden'}`}>
          <div className="overflow-x-auto whitespace-nowrap pb-4 mb-6">
            <div className="flex space-x-3">
              {['economy', 'welfare', 'education', 'environment', 'diplomacy', 'housing'].map((category) => (
                <div key={category} className="relative">
                  <input 
                    type="radio" 
                    id={category} 
                    name="category" 
                    className="absolute opacity-0 w-0 h-0"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <label
                    htmlFor={category}
                    className={`block rounded-full px-5 py-2 font-medium cursor-pointer ${
                      selectedCategory === category 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                    }`}
                  >
                    {category === 'economy' && '경제'}
                    {category === 'welfare' && '복지'}
                    {category === 'education' && '교육'}
                    {category === 'environment' && '환경'}
                    {category === 'diplomacy' && '외교·안보'}
                    {category === 'housing' && '주거'}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left w-[15%]">정책 항목</th>
                  {candidates.slice(0, 4).map(candidate => (
                    <th key={candidate.id} className="p-4 text-left w-[21.25%]">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mr-3">
                          {candidate.profileImage && (
                            <Image 
                              src={candidate.profileImage} 
                              alt={candidate.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <span className="font-bold text-lg">{candidate.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {policyItems.map((item) => (
                  <tr key={item.id}>
                    <td className="p-4 border-t border-gray-200 align-top">
                      <div className="font-medium">{item.title}</div>
                    </td>
                    {item.policies.map((policy, index) => (
                      <td key={index} className="p-4 border-t border-gray-200">
                        <div className="bg-white rounded-lg shadow-sm p-4">
                          <p>{policy.summary}</p>
                          <div className="mt-2">
                            <button
                              className="toggle-btn flex items-center text-sm text-primary"
                            >
                              <span>더 보기</span>
                              <div className="w-5 h-5 flex items-center justify-center ml-1">
                                <i className="ri-arrow-down-s-line"></i>
                              </div>
                            </button>
                            <div className="toggle-content mt-2 text-sm text-gray-600">
                              {policy.details.map((detail, detailIndex) => (
                                <p key={detailIndex}>- {detail}</p>
                              ))}
                              <div className="mt-2 text-xs text-gray-500">
                                출처:
                                <a href="#" className="text-primary underline ml-1">
                                  {policy.source}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 지역별 보기 섹션 */}
        <section id="region-section" className={`mb-8 ${viewType === 'region' ? 'block' : 'hidden'}`}>
          <div className="overflow-x-auto whitespace-nowrap pb-4 mb-6">
            <div className="flex space-x-3">
              {['capital', 'chungcheong', 'yeongnam', 'honam', 'gangwon', 'jeju'].map((region) => (
                <div key={region} className="relative">
                  <input 
                    type="radio" 
                    id={region} 
                    name="region" 
                    className="absolute opacity-0 w-0 h-0"
                    checked={selectedRegion === region}
                    onChange={() => setSelectedRegion(region)}
                  />
                  <label
                    htmlFor={region}
                    className={`block rounded-full px-5 py-2 font-medium cursor-pointer ${
                      selectedRegion === region 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                    }`}
                  >
                    {region === 'capital' && '수도권'}
                    {region === 'chungcheong' && '충청'}
                    {region === 'yeongnam' && '영남'}
                    {region === 'honam' && '호남'}
                    {region === 'gangwon' && '강원'}
                    {region === 'jeju' && '제주'}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidates.slice(0, 4).map((candidate, candidateIndex) => {
              const regionalData = regionalPromises[selectedRegion as keyof typeof regionalPromises]?.[candidateIndex];
              return (
                <div key={candidate.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 mr-4">
                        {candidate.profileImage && (
                          <Image 
                            src={candidate.profileImage} 
                            alt={candidate.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-bold">{candidate.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-medium text-gray-700 mb-4">
                      {selectedRegion === 'capital' && '수도권 공약'}
                      {selectedRegion === 'chungcheong' && '충청 공약'}
                      {selectedRegion === 'yeongnam' && '영남 공약'}
                      {selectedRegion === 'honam' && '호남 공약'}
                      {selectedRegion === 'gangwon' && '강원 공약'}
                      {selectedRegion === 'jeju' && '제주 공약'}
                    </h4>
                    <ul className="space-y-3">
                      {regionalData?.policies.map((policy, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5 mr-2">
                            <i className={policy.icon}></i>
                          </div>
                          <span>{policy.text}</span>
                        </li>
                      )) || (
                        <li className="flex items-start">
                          <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5 mr-2">
                            <i className="ri-information-line"></i>
                          </div>
                          <span>해당 지역 공약 정보가 없습니다.</span>
                        </li>
                      )}
                    </ul>
                    <a href="#" className="inline-flex items-center text-primary mt-6">
                      <span>출처 보기</span>
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-external-link-line"></i>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 챗봇 배너 */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mr-4">
              <i className="ri-chat-3-line text-xl text-primary"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium">더 궁금한 공약이 있으신가요?</h3>
              <p className="text-text-secondary">AI 챗봇에게 질문하고 더 자세한 정보를 얻어보세요.</p>
            </div>
          </div>
          <a href="/chatbot" className="bg-primary text-white px-6 py-3 rounded-button font-medium whitespace-nowrap">
            챗봇에게 질문하러 가기
          </a>
        </div>
      </main>

      {/* 챗봇 플로팅 버튼 */}
      <ChatBotButton />
    </div>
  );
} 