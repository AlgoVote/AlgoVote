'use client';

import React from 'react';
import Image from 'next/image';
import ChatBotButton from '../../components/ui/ChatBotButton';

// Define types locally since we might not have them in a central types file yet
interface Candidate {
  id: string;
  name: string;
  party: string;
  age: number;
  birthplace: string;
  education: string[];
  career: string[];
  slogan: string;
  profileImage: string;
}

// Mock data for candidates (will be replaced with Supabase data later)
const mockCandidates: Candidate[] = [
  {
    id: 'lee-jaemyung',
    name: '이재명',
    party: '더불어민주당',
    age: 58,
    birthplace: '경기도 안양시',
    education: ['중앙대학교 법학과 졸업'],
    career: ['제20대 더불어민주당 대선 후보', '전 경기도지사', '전 성남시장'],
    slogan: '지속 가능한 미래를 위한 혁신',
    profileImage: 'https://i.namu.wiki/i/mxVpMiNuRQ_Pv-UQUORBy4wEdyAV4YEezzrm00yeLe86MhZD-xedG7CRxepIBS83Q148EMgC9ksolJs0bYZXWpRzeypfCh9c8eAjF_L_I2m8YpIltGrxOngcgXsyl99PlyWSnFFJrXHaX3R1YBGgsA.webp',
  },
  {
    id: 'hong-junpyo',
    name: '홍준표',
    party: '국민의힘',
    age: 67,
    birthplace: '경상남도 창녕군',
    education: ['서울대학교 법학과 졸업'],
    career: ['제20대 국민의힘 대선 경선 후보', '전 자유한국당 대표', '전 경상남도지사'],
    slogan: '국민과 함께하는 새로운 정치',
    profileImage: 'https://i.namu.wiki/i/f9PmjjUT-IMUgN17d2Dkr6FvCFYooaWXwmSVYlqp-uET10o-fW4sUqstZ475862-X-TDSTncoaGgElAdPYija8jgteC2lPF6EE7MzUb9MQt64xtnR24GFM9vb9EOz_QD5ztkBvdwIkz5_eEdA-o18w.webp',
  },
  {
    id: 'lee-junseok',
    name: '이준석',
    party: '국민의힘',
    age: 36,
    birthplace: '서울특별시',
    education: ['서울대학교 컴퓨터공학과 졸업'],
    career: ['제20대 국민의힘 대표', '전 미래통합당 최고위원', '전 한국미래연합 공동대표'],
    slogan: '경제 성장과 사회 안정을 위해',
    profileImage: 'https://i.namu.wiki/i/mkTNQlg-k44NqJx41KVnEitRbGFVXExjxnrQ5_SK9nZD48iPpV7k2bYwg7ixRXRDAPuwOzKf5v5PAsK81hz_YFFuu6DKnR6YAfl-cDXKjWLvu_l5m1OPyVOHzjjo0PQ5xRBJrbmefezp8_jXt7dKOA.webp',
  },
  {
    id: 'sim-sangjeong',
    name: '심상정',
    party: '정의당',
    age: 63,
    birthplace: '서울특별시',
    education: ['한양대학교 사회학과 졸업'],
    career: ['제20대 정의당 대선 후보', '전 정의당 대표', '제21대 국회의원'],
    slogan: '불평등 해소와 정의로운 사회 실현',
    profileImage: 'https://i.namu.wiki/i/EXlP2LUYIA_ehdO9XFXkP6B_ybBNgVDYpPP3S-UZp4YAXO92TICKxaS3QmGSWb3rTCuhhNhvPDaFDG7nJYj-x9VQvyIFDfgKqG5Lsy7DyQ8EV4HmTMYrVzqQmfP_yPBs1ZnhI3JbeDrFsROVmEkdIQ.webp',
  },
  {
    id: 'ahn-cheolsoo',
    name: '안철수',
    party: '국민의당',
    age: 60,
    birthplace: '부산광역시',
    education: ['서울대학교 의과대학 졸업', 'KAIST 박사'],
    career: ['제20대 국민의당 대선 후보', '전 바른미래당 대표', '전 서울시장 후보'],
    slogan: '과학기술 혁신으로 대한민국 도약',
    profileImage: 'https://i.namu.wiki/i/QfVt1UXMzCfnOFxoNGmciPFE7Y23Gy_tTF2kkG1-3TAHmWSclA45J2-w1zdp3BnvKBKyGYWdV6bHFZH1vhqQWCuE-_nKfVPUcHv3QDkJeF4EoHlPZqT3jbCstx4aSxVWlMEe-YiNuLTxqrrVwXm6UA.webp',
  }
];

// More detailed mock data for comparison table
const mockComparisonData = {
  "경제": {
    "lee-jaemyung": "디지털 경제 전환 가속화 · AI 산업 육성 · 중소기업 혁신 지원 · 공정경제 생태계 구축",
    "hong-junpyo": "대기업 규제 완화 · 투자 활성화 · 세금 감면 · 기업 중심 경제 회복",
    "lee-junseok": "스타트업 생태계 육성 · 디지털 혁신 기업 지원 · 청년 창업 지원 · 미래산업 투자 확대",
    "sim-sangjeong": "대기업 지배구조 개혁 · 노동자 경영참여 · 사회적 경제 확대 · 재벌개혁과 경제민주화",
    "ahn-cheolsoo": "디지털 기술기반 경제 혁신 · 벤처기업 지원 확대 · R&D 투자 증가 · 규제 샌드박스 도입"
  },
  "복지": {
    "lee-jaemyung": "기본소득 도입 · 전국민 재난지원금 · 복지사각지대 해소 · 돌봄노동 공공화",
    "hong-junpyo": "선별적 복지 확대 · 민간 참여 확대 · 자립형 복지체계 · 고령화 대비 연금개혁",
    "lee-junseok": "청년 기본소득 · 디지털 복지플랫폼 · 맞춤형 복지서비스 · 세대 간 형평성 제고",
    "sim-sangjeong": "보편적 복지 확대 · 국가책임 돌봄체계 · 아동수당 확대 · 기초연금 강화",
    "ahn-cheolsoo": "과학기술 기반 스마트 복지 · 예방중심 의료체계 · 맞춤형 사회안전망 · 삶의 질 향상"
  },
  "교육": {
    "lee-jaemyung": "교육 불평등 해소 · 공교육 강화 · 평생학습 체계 · 디지털 교육 확대",
    "hong-junpyo": "교육 자율성 확대 · 경쟁력 강화 · 수월성 교육 · 입시제도 안정화",
    "lee-junseok": "AI 교육 혁신 · 디지털 리터러시 · 평생교육 체계 · 메타버스 교육 플랫폼",
    "sim-sangjeong": "무상교육 확대 · 대학서열화 해소 · 교육불평등 해소 · 민주시민교육 강화",
    "ahn-cheolsoo": "디지털 교육 혁명 · 창의융합 인재양성 · 글로벌 교육 경쟁력 강화 · 교사 전문성 강화"
  },
  "외교/안보": {
    "lee-jaemyung": "한미동맹 강화 · 남북 평화경제 · 균형외교 · 동북아 협력체계 구축",
    "hong-junpyo": "한미일 안보협력 강화 · 북핵 강경대응 · 국방력 증강 · 자주국방 역량 강화",
    "lee-junseok": "실용적 대미외교 · 글로벌 디지털 협력 · 신흥 안보 대응 · 스마트 국방",
    "sim-sangjeong": "평화외교 · 남북대화 재개 · 동북아 평화체제 구축 · 평화적 핵문제 해결",
    "ahn-cheolsoo": "과학기술 외교 강화 · 사이버 안보 강화 · 실용적 대북정책 · 글로벌 협력 확대"
  },
  "환경": {
    "lee-jaemyung": "2050 탄소중립 추진 · 녹색일자리 창출 · 순환경제 활성화 · 신재생에너지 전환",
    "hong-junpyo": "원전 확대 · 친환경 산업 육성 · 그린뉴딜 추진 · 미세먼지 저감",
    "lee-junseok": "스마트 그린시티 · 그린테크 산업 육성 · 신재생에너지 확대 · 디지털 탄소중립",
    "sim-sangjeong": "그린뉴딜 강화 · 탈원전 정책 · 환경정의 실현 · 생태계 보전 확대",
    "ahn-cheolsoo": "과학기술 활용 환경문제 해결 · 원전-신재생 조화 · 녹색기술 혁신 · 탄소중립 로드맵"
  },
  "주거/부동산": {
    "lee-jaemyung": "250만호 주택공급 · 공공임대 확대 · 부동산 투기 근절 · 1인 가구 주거 지원",
    "hong-junpyo": "규제 완화로 주택공급 확대 · 재건축 활성화 · 세제 개편 · 민간 중심 주택시장",
    "lee-junseok": "청년 주택 공급 확대 · 스마트 주거서비스 · 세대별 맞춤형 주택정책 · 도심 재생",
    "sim-sangjeong": "주택공공성 강화 · 주택불평등 해소 · 토지공개념 도입 · 1가구 1주택 정책",
    "ahn-cheolsoo": "기술 기반 주택공급 혁신 · 스마트시티 개발 · 주거복지 향상 · 미래형 주택 보급"
  },
  "일자리": {
    "lee-jaemyung": "공공일자리 100만개 창출 · 디지털 일자리 육성 · 노동권 강화 · 일자리 안전망 확충",
    "hong-junpyo": "기업 중심 일자리 창출 · 노동시장 유연화 · 소상공인 지원 · 신산업 육성",
    "lee-junseok": "청년 혁신 일자리 · 플랫폼 노동 보호 · 미래형 일자리 교육 · 세대상생형 고용",
    "sim-sangjeong": "노동시간 단축 · 양질의 공공일자리 · 정규직 전환 · 노동자 권리 보장",
    "ahn-cheolsoo": "디지털 혁신 일자리 · 벤처창업 생태계 · AI-인간 협업형 일자리 · 글로벌 인재 양성"
  },
  "보건/의료": {
    "lee-jaemyung": "공공의료 확대 · 감염병 대응체계 구축 · 건강보험 보장성 강화 · 의료격차 해소",
    "hong-junpyo": "민간 의료 혁신 지원 · 디지털 헬스케어 육성 · 의료 효율성 제고 · 바이오산업 육성",
    "lee-junseok": "디지털 헬스케어 플랫폼 · AI 의료 서비스 · 의료 빅데이터 활용 · 미래 의료 혁신",
    "sim-sangjeong": "국가 책임 의료 · 의료 공공성 강화 · 의료불평등 해소 · 의약품 공공성 확대",
    "ahn-cheolsoo": "의사 출신의 전문성 · 디지털 의료 혁신 · 바이오 신약 개발 · 국가 의료체계 효율화"
  }
};

// Information tooltips for categories
const categoryTooltips = {
  "경제": "각 후보의 경제 정책, 산업 육성, 경제 성장, 공정경제 관련 공약",
  "복지": "사회 안전망, 기본소득, 연금, 사회보장 관련 정책",
  "교육": "교육 정책, 교육 개혁, 디지털 교육, 학제 개편 등",
  "외교/안보": "외교 정책, 국방, 안보, 한반도 평화, 국제 관계 등",
  "환경": "환경 정책, 탄소중립, 신재생에너지, 환경 보호 등",
  "주거/부동산": "주택 정책, 부동산 규제, 임대 정책, 주거 복지 등",
  "일자리": "고용 정책, 일자리 창출, 노동권, 노동시장 개혁 등",
  "보건/의료": "의료 정책, 건강보험, 공공의료, 감염병 대응, 의료 혁신 등"
};

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
                {mockCandidates.map((candidate) => (
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
                {mockCandidates
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
                        const candidate = mockCandidates.find(c => c.id === candidateId);
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
                    {Object.entries(mockComparisonData).map(([category, candidatePolicies], index) => (
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
                                {categoryTooltips[category as keyof typeof categoryTooltips]}
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