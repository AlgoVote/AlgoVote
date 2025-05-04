'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PledgeAccordion from '@/components/candidates/PledgeAccordion';
import { Candidate, Pledge, Statement, QnA } from '@/types';

// Mock data for candidate details (will be replaced with Supabase data later)
const getMockCandidateData = (candidateId: string): { 
  candidate: Candidate; 
  pledges: Pledge[];
  statements: Statement[];
  qnas: QnA[];
} => {
  // This would be a database query in production
  console.log(`Fetching data for candidate: ${candidateId}`);
  
  return {
    candidate: {
      id: 'kim-minsu',
      name: '이재명',
      party: '더불어민주당',
      age: 54,
      birthplace: '서울특별시',
      education: [
        '서울대학교 정치외교학과 졸업 (학사)',
        '하버드대학교 케네디스쿨 행정학 석사'
      ],
      career: [
        '제21대 국회의원',
        '전 행정안전부 차관',
        '전 청와대 정무수석',
        '전 민주정책연구원 원장',
        '전 서울시 정무부시장'
      ],
      slogan: '국민의 삶을 책임지는 정치, 미래를 여는 변화',
      profileImage: '/images/candidates/lee-jaemyung.jpg',
      websiteUrl: 'https://www.candidate-website.kr'
    },
    pledges: [
      {
        id: 'pledge-1',
        candidateId: 'kim-minsu',
        title: '청년 일자리 창출 및 주거 안정 지원',
        summary: '청년 창업 지원금 확대 및 청년 전용 임대주택 공급 확대로 청년 세대의 경제적 자립 지원',
        category: '청년/일자리',
        background: '청년 실업률 증가와 주거비 부담 증가로 인한 청년 세대의 경제적 어려움을 해소하고, 청년들의 사회 진출과 자립을 지원하기 위함',
        content: [
          '청년 창업 지원금 연간 3천만원까지 확대 및 창업 인큐베이팅 센터 확충',
          '청년 전용 임대주택 5년간 10만호 공급 및 청년 주거비 지원 확대',
          '청년 일자리 창출을 위한 기업 인센티브 제도 도입',
          '청년 디지털 역량 강화 교육 프로그램 확대'
        ],
        implementation: '청년기본법 개정을 통한 청년 지원 확대, 주택법 개정을 통한 청년 주택 공급 확대, 조세특례제한법 개정을 통한 청년 고용 기업 세제 혜택 확대',
        period: '취임 즉시 추진, 임기 내 단계적 확대',
        funding: '청년 지원 특별 예산 편성(연간 5천억원), 주택도시기금 활용, 민간 투자 유치를 통한 청년 창업 지원 펀드 조성',
        order: 1
      },
      {
        id: 'pledge-2',
        candidateId: 'kim-minsu',
        title: '중소기업 및 소상공인 지원 강화',
        summary: '디지털 전환 지원 및 세제 혜택 확대를 통한 지역 경제 활성화',
        category: '경제/산업',
        background: '코로나19 이후 어려움을 겪고 있는 중소기업과 소상공인의 경영 안정과 경쟁력 강화를 통한 지역 경제 활성화',
        content: [
          '중소기업 디지털 전환 지원 사업 확대(연간 지원 기업 1만개)',
          '소상공인 온라인 판로 지원 및 배달 앱 수수료 인하 지원',
          '중소기업 및 소상공인 세제 혜택 확대',
          '지역 화폐, 활성화를 통한 지역 경제 순환 강화'
        ],
        implementation: '중소기업기본법 및 소상공인 보호법 개정, 지역 화폐 활성화를 위한 조례 제정, 중소기업 디지털 전환 지원 특별법 제정',
        period: '취임 후 6개월 내 관련 법안 발의, 임기 내 단계적 확대',
        funding: '중소기업 지원 특별 예산 편성(연간 1조원), 디지털 전환 지원 기금 조성, 민간 투자 유치',
        order: 2
      },
      {
        id: 'pledge-3',
        candidateId: 'kim-minsu',
        title: '교육 격차 해소 및 공교육 강화',
        summary: '지역 간 교육 격차 해소를 위한 교육 인프라 확충 및 디지털 교육 환경 개선',
        category: '교육',
        background: '지역 간, 계층 간 교육 격차 심화로 인한 교육 불평등 해소 및 공교육 경쟁력 강화',
        content: [
          '교육 취약 지역 학교 시설 및 교육 환경 개선',
          '디지털 교육 인프라 확충 및 교육 콘텐츠 개발',
          '교육 소외계층 맞춤형 교육 지원 확대',
          '교사 역량 강화 및 처우 개선'
        ],
        implementation: '교육기본법 및 초중등교육법 개정, 교육 격차 해소를 위한 특별법 제정, 교육 예산 확대',
        period: '취임 후 1년 내 관련 법안 발의, 임기 내 단계적 확대',
        funding: '교육 예산 확대(GDP 대비 5% 이상), 교육 격차 해소 특별 기금 조성, 민간 기업의 교육 기부 활성화',
        order: 3
      },
      {
        id: 'pledge-4',
        candidateId: 'kim-minsu',
        title: '의료복지 확대 및 공공의료 강화',
        summary: '의료 사각지대 해소와 공공의료 인프라 확충을 통한 국민 건강권 보장',
        category: '의료/복지',
        background: '의료 불평등과 의료 사각지대로 인한 건강권 침해를 해소하고, 모든 국민이 질 높은 의료 서비스를 받을 수 있도록 공공의료 체계 강화',
        content: [
          '공공병원 확충 및 공공의료 인력 확대',
          '건강보험 보장성 확대 및 의료비 부담 경감',
          '의료 취약지역 의료 인프라 확충',
          '예방 중심 건강관리 시스템 구축'
        ],
        implementation: '공공보건의료법 개정, 건강보험법 개정, 의료 취약지 지원 특별법 제정',
        period: '취임 후 1년 내 관련 법안 발의, 임기 내 단계적 확대',
        funding: '의료 예산 확대(GDP 대비 8%), 건강보험 재정 확충, 의료 취약지 지원 특별 기금 조성',
        order: 4
      },
      {
        id: 'pledge-5',
        candidateId: 'kim-minsu',
        title: '저출산 대책 및 가족 지원 강화',
        summary: '출산 및 육아 부담 경감을 통한 저출산 극복과 가족 친화적 사회 조성',
        category: '가족/복지',
        background: '심각한 저출산 문제 해결과 가족 구성원 모두가 행복한 사회 조성을 위한 종합적인 지원 체계 구축',
        content: [
          '임신, 출산, 육아 지원금 확대',
          '국공립 어린이집 및 유치원 확충',
          '육아휴직 확대 및 가족친화기업 지원 강화',
          '한부모, 다문화가족 등 다양한 가족 유형별 맞춤형 지원'
        ],
        implementation: '저출산고령사회기본법 개정, 영유아보육법 개정, 가족지원특별법 제정',
        period: '취임 즉시 추진, 임기 내 단계적 확대',
        funding: '저출산 대책 예산 확대(연간 20조원), 육아지원기금 조성, 가족지원 특별 기금 운영',
        order: 5
      },
      {
        id: 'pledge-6',
        candidateId: 'kim-minsu',
        title: '친환경 에너지 전환 및 탄소중립 실현',
        summary: '친환경 에너지 확대 및 탄소 배출 저감을 통한 지속가능한 환경 조성',
        category: '환경/에너지',
        background: '기후위기 대응 및 지속가능한 발전을 위한 친환경 에너지 정책 추진',
        content: [
          '재생에너지 비중 30% 달성을 위한 인프라 확충',
          '탄소배출 감축을 위한 산업 구조 개편 지원',
          '친환경 교통 시스템 구축 및 전기차 확대',
          '자원순환경제 활성화 및 폐기물 감축'
        ],
        implementation: '에너지전환특별법 제정, 탄소중립기본법 개정, 자원순환경제촉진법 제정',
        period: '취임 즉시 추진, 2030년까지 단계적 달성',
        funding: '그린뉴딜 특별 예산 편성(5년간 50조원), 민간 투자 활성화를 위한 그린본드 발행',
        order: 6
      },
      {
        id: 'pledge-7',
        candidateId: 'kim-minsu',
        title: '공정사회 구현 및 사회 양극화 해소',
        summary: '기회의 공정성 확보와 소득 불평등 해소를 통한 사회 통합 강화',
        category: '사회/복지',
        background: '사회 양극화와 불평등 심화로 인한 사회 갈등 해소 및 공정한 사회 구현',
        content: [
          '기회의 공정성 확보를 위한 제도 개선',
          '소득 불평등 해소를 위한 소득 재분배 강화',
          '사회안전망 확충 및 기초생활보장 강화',
          '공정경제 구현을 위한 경제민주화 추진'
        ],
        implementation: '공정사회기본법 제정, 소득재분배특별법 제정, 사회보장기본법 개정',
        period: '취임 후 6개월 내 관련 법안 발의, 임기 내 단계적 확대',
        funding: '사회안전망 확충 예산 편성(연간 10조원), 공정경제 기금 조성',
        order: 7
      },
      {
        id: 'pledge-8',
        candidateId: 'kim-minsu',
        title: '디지털 혁신 및 4차 산업혁명 대응',
        summary: '디지털 전환 가속화 및 신산업 육성을 통한 미래 경쟁력 확보',
        category: '과학/기술',
        background: '4차 산업혁명 시대에 대응하여 국가 경쟁력을 확보하고, 디지털 전환을 통한 새로운 성장 동력 창출',
        content: [
          'AI, 빅데이터, 로봇 등 4차 산업혁명 핵심 기술 개발 지원',
          '디지털 인프라 확충 및 디지털 격차 해소',
          '혁신 창업 생태계 조성 및 벤처기업 지원 강화',
          '미래 산업 인재 양성을 위한 교육 혁신'
        ],
        implementation: '디지털혁신특별법 제정, 4차산업혁명특별법 제정, 데이털기본법 개정',
        period: '취임 즉시 추진, 임기 내 단계적 확대',
        funding: '디지털 혁신 예산 편성(5년간 30조원), 4차 산업혁명 펀드 조성(10조원 규모)',
        order: 8
      },
      {
        id: 'pledge-9',
        candidateId: 'kim-minsu',
        title: '문화예술 진흥 및 여가 활성화',
        summary: '문화예술 지원 확대 및 여가 인프라 확충을 통한 국민 삶의 질 향상',
        category: '문화/예술',
        background: '문화예술의 다양성과 창의성을 존중하고, 국민 모두가 문화생활을 향유할 수 있는 여건 조성',
        content: [
          '지역 문화예술 인프라 확충 및 문화 격차 해소',
          '예술인 지원 확대 및 창작 환경 개선',
          '여가 활성화를 위한 주 52시간 근무제 안착',
          '생활체육 활성화 및 체육 인프라 확충'
        ],
        implementation: '문화예술진흥법 개정, 예술인복지법 개정, 여가활성화법 제정',
        period: '취임 후 1년 내 관련 법안 발의, 임기 내 단계적 확대',
        funding: '문화예술 예산 확대(GDP 대비 2%), 지역 문화예술 지원 기금 조성',
        order: 9
      },
      {
        id: 'pledge-10',
        candidateId: 'kim-minsu',
        title: '국가 안보 강화 및 평화통일 기반 구축',
        summary: '굳건한 안보 체계 구축과 남북관계 개선을 통한 한반도 평화 정착',
        category: '외교/안보',
        background: '한반도 평화와 번영을 위한 안보 역량 강화 및 통일 기반 조성',
        content: [
          '국방력 강화 및 첨단 무기체계 개발',
          '남북 경제협력 확대 및 인적 교류 활성화',
          '한미동맹 강화 및 주변국과의 전략적 협력 확대',
          '북한 인권 개선 및 이산가족 상봉 정례화'
        ],
        implementation: '남북관계발전법 개정, 국방개혁특별법 제정, 평화통일기반조성법 제정',
        period: '취임 즉시 추진, 임기 내 지속적 확대',
        funding: '국방 예산 확대(GDP 대비 3%), 남북협력기금 확충',
        order: 10
      }
    ],
    statements: [
      {
        id: 'statement-1',
        candidateId: 'kim-minsu',
        content: '경제 회복과 일자리 창출이 최우선 과제입니다. 중소기업과 소상공인의 경쟁력 강화를 통해 지역 경제를 활성화하고, 양질의 일자리를 만들어 나가겠습니다.',
        source: 'KBS 토론회',
        date: '2025년 4월 15일'
      },
      {
        id: 'statement-2',
        candidateId: 'kim-minsu',
        content: '청년들이 꿈을 펼칠 수 있는 환경을 만드는 것이 중요합니다. 청년 창업 지원과 주거 안정 정책을 통해 청년들의 미래를 지원하고, 저출산 문제 해결에도 기여하겠습니다.',
        source: 'MBC 인터뷰',
        date: '2025년 4월 20일'
      },
      {
        id: 'statement-3',
        candidateId: 'kim-minsu',
        content: '교육은 미래를 위한 투자입니다. 지역 간 교육 격차를 해소하고, 모든 학생들이 질 높은 교육을 받을 수 있도록 공교육을 강화하겠습니다.',
        source: '교육정책 토론회',
        date: '2025년 4월 22일'
      }
    ],
    qnas: [
      {
        id: 'qna-1',
        candidateId: 'kim-minsu',
        question: '당선되면 가장 먼저 추진할 정책은 무엇인가요?',
        answer: '경제 회복과 일자리 창출을 위한 정책을 가장 먼저 추진하겠습니다. 특히 코로나19로 어려움을 겪고 있는 중소기업과 소상공인을 위한 지원 정책을 강화하고, 청년 일자리 창출을 위한 정책을 적극적으로 추진하겠습니다. 또한 디지털 전환 지원을 통해 기업의 경쟁력을 강화하고, 새로운 산업 생태계를 조성하여 지속가능한 경제 성장의 기반을 마련하겠습니다.'
      },
      {
        id: 'qna-2',
        candidateId: 'kim-minsu',
        question: '지역 경제 활성화를 위한 구체적인 방안은 무엇인가요?',
        answer: '지역 경제 활성화를 위해 다양한 정책을 추진하겠습니다. 첫째, 지역 화폐 활성화를 통해 지역 내 소비를 촉진하고 지역 경제 순환을 강화하겠습니다. 둘째, 지역 특화 산업 육성을 통해 지역 경제의 경쟁력을 강화하겠습니다. 셋째, 소상공인 디지털 전환 지원을 통해 온라인 판로를 확대하고 경쟁력을 강화하겠습니다. 넷째, 지역 관광 자원 개발을 통해 관광 산업을 활성화하고 지역 경제에 활력을 불어넣겠습니다.'
      },
      {
        id: 'qna-3',
        candidateId: 'kim-minsu',
        question: '교육 격차 해소를 위한 정책은 무엇인가요?',
        answer: '교육 격차 해소를 위해 다양한 정책을 추진하겠습니다. 첫째, 교육 취약 지역 학교 시설 및 교육 환경 개선을 통해 지역 간 교육 격차를 해소하겠습니다. 둘째, 디지털 교육 인프라 확충 및 교육 콘텐츠 개발을 통해 모든 학생들이 질 높은 교육을 받을 수 있도록 하겠습니다. 셋째, 교육 소외계층 맞춤형 교육 지원 확대를 통해 계층 간 교육 격차를 해소하겠습니다. 넷째, 교사 역량 강화 및 처우 개선을 통해 공교육의 질을 높이겠습니다.'
      },
      {
        id: 'qna-4',
        candidateId: 'kim-minsu',
        question: '환경 보전과 탄소중립 실현을 위한 계획은 무엇인가요?',
        answer: '환경 보전과 탄소중립 실현을 위해 다양한 정책을 추진하겠습니다. 첫째, 친환경 에너지 인프라 구축을 통해 재생에너지 비중을 확대하겠습니다. 둘째, 녹지 공간 확충을 통해 도시 환경을 개선하고 탄소 흡수원을 확대하겠습니다. 셋째, 친환경 교통 수단 확대를 통해 교통 분야 탄소 배출을 줄이겠습니다. 넷째, 자원 순환 체계 구축을 통해 폐기물 발생을 줄이고 재활용률을 높이겠습니다. 이를 통해 2050년 탄소중립 목표 달성에 기여하겠습니다.'
      }
    ]
  };
};

export default function CandidateDetail() {
  // useParams 훅을 사용하여 params 가져오기
  const params = useParams();
  const id = params.id as string;
  
  // candidateId를 사용하여 데이터 가져오기
  const { candidate, pledges, statements, qnas } = getMockCandidateData(id);
  
  // 현재 열려있는 공약 ID 상태 관리
  const [openPledgeId, setOpenPledgeId] = useState<string | null>(null);
  
  // 공약 상세 버튼 클릭 핸들러
  const handlePledgeDetailClick = (pledgeId: string) => {
    // 해당 공약 아코디언 열기
    setOpenPledgeId(pledgeId);
    
    // 상세 공약 섹션으로 스크롤
    document.getElementById('detailed-pledges')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
        {/* 후보자 기본 정보 섹션 */}
        <section className="candidate-card bg-white rounded-2xl p-6 mb-8 border border-gray-100 transition-shadow">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <img
                src={candidate.profileImage}
                alt={`${candidate.name} 후보`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-bold mb-2">{candidate.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 mb-4">
                <span className="mr-4">{candidate.party}</span>
                <span className="hidden sm:block mx-2">|</span>
                <span>서울특별시 강남구 제1선거구</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">출생</span>
                    <span>{candidate.birthplace} ({candidate.age}세)</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">학력</span>
                    <span>{candidate.education[0]}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">경력</span>
                    <span>{candidate.career[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 핵심 슬로건 섹션 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            &quot;{candidate.slogan}&quot;
          </h2>
          <p className="text-text-secondary">국민과 함께 더 나은 미래를 만들어 나가겠습니다</p>
        </section>

        {/* 10대 핵심 공약 섹션 */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">10대 핵심 공약</h2>
          <div className="space-y-4">
            {pledges.slice(0, 3).map((pledge) => (
              <div key={pledge.id} className="pledge-card p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold">{pledge.order}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{pledge.title}</h3>
                    <p className="text-text-secondary mt-1">{pledge.summary}</p>
                    <button 
                      className="pledge-detail-btn text-primary border border-primary rounded-button px-3 py-1 text-sm inline-flex items-center mt-2 whitespace-nowrap"
                      onClick={() => handlePledgeDetailClick(pledge.id)}
                    >
                      <span>공약 전문 보기</span>
                      <i className="ri-arrow-right-line ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button 
              className="bg-primary text-white py-2 px-6 rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
              onClick={() => document.getElementById('detailed-pledges')?.scrollIntoView({ behavior: 'smooth' })}
            >
              10대 공약 전체 보기
            </button>
          </div>
        </section>

        {/* 세부 공약 상세 섹션 */}
        <section id="detailed-pledges" className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">세부 공약 상세</h2>
          
          <div className="space-y-4">
            {pledges.map((pledge) => (
              <PledgeAccordion 
                key={pledge.id} 
                pledge={pledge} 
                openPledgeId={openPledgeId}
                setOpenPledgeId={setOpenPledgeId}
              />
            ))}
          </div>
        </section>

        {/* 최근 발언 요약 섹션 */}
        {/* <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">최근 발언 요약</h2>
          <div className="space-y-6">
            {statements.map((statement) => (
              <div key={statement.id} className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                <p className="italic text-text-primary">{statement.content}</p>
                <p className="text-sm text-text-secondary mt-3">- {statement.date}, {statement.source}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* 후보 Q&A 섹션 */}
        {/* <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">후보 Q&A</h2>
          <div className="space-y-6">
            {qnas.map((qna) => (
              <div key={qna.id} className="p-5 border border-gray-100 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-semibold">Q</span>
                  </div>
                  <p className="font-medium text-text-primary">{qna.question}</p>
                </div>
                <div className="flex items-start pl-11">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-semibold text-text-secondary">A</span>
                  </div>
                  <p className="text-text-secondary">{qna.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* 하단 버튼 영역 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 mb-6">
          <Link 
            href="/compare" 
            className="bg-primary text-white py-3 px-8 rounded-button text-center font-medium whitespace-nowrap transition-all hover:bg-opacity-90 hover:scale-102"
          >
            비교하기
          </Link>
          <Link 
            href="/" 
            className="border border-primary text-primary py-3 px-8 rounded-button text-center font-medium whitespace-nowrap transition-all hover:bg-primary hover:bg-opacity-5"
          >
            뒤로가기
          </Link>
        </div>
        
        <div className="text-center text-xs text-text-secondary mb-10">
          정보 출처: <a href="https://www.nec.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">중앙선거관리위원회</a>, 2025.04.27 기준
        </div>
      </main>
    </div>
  );
} 