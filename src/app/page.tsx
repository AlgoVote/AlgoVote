import React from 'react';
import Link from 'next/link';
import CandidateCard from '@/components/cards/CandidateCard';
import { candidates } from '@/data/candidates';

export default function Home() {
  // 주요 후보자 3명만 표시
  const mainCandidates = candidates.slice(0, 4);
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">정확한 정보를 바탕으로, 현명한 선택을</h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            더 나은 대한민국을 위한 선택, 객관적인 정보 비교에서 시작됩니다.<br></br>
            알고투표는 유권자들이 정책 비전과 실행 계획, 그리고 객관적인 평가를 바탕으로 심층적으로 비교 분석하여 현명한 결정을 내릴 수 있도록 돕는 플랫폼입니다.
          </p>
          <div className="flex justify-center">
            <Link href="/chatbot" className="btn-primary whitespace-nowrap">
              후보자와 대화하기
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 후보자 섹션 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-start justify-center mb-4">
            <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">제21대 대통령 선거 주요 후보자</h2>
            <div className="relative group">
                <div className="w-6 h-6 flex items-center justify-center text-text-secondary cursor-help">
                  <i className="ri-information-line"></i>
                </div>
                <span className="absolute right-0 top-full w-64 p-3 bg-white shadow-lg rounded-lg border border-divider text-xs text-text-secondary z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  알고투표는 유권자들의 정보 접근성을 높이기 위해, 주요 후보들을 중심으로 정보를 제공하고 있습니다.
                </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {mainCandidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/compare" className="text-primary hover:underline flex items-center justify-center">
              <span>대선 공약 비교하기</span>
              <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-12 text-center">알고투표의 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-scales-3-line text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">객관적 비교</h3>
              <p className="text-text-secondary text-center">각 후보자의 공약과 정책을 객관적인 기준으로 비교하여 제공합니다.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-search-line text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">팩트 체크</h3>
              <p className="text-text-secondary text-center">후보자들의 발언과 공약에 대한 사실 확인 정보를 제공합니다.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-robot-2-line text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">AI 질의응답</h3>
              <p className="text-text-secondary text-center">AI 챗봇을 통해 후보자의 정책과 비전에 대해 궁금한 점을 질문하면 상세한 답변을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl bg-primary bg-opacity-5 rounded-2xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">투표일 안내</h2>
            <p className="text-lg text-text-secondary mb-8">2025년 6월 3일 (화) 오전 6시 ~ 오후 8시</p>
            <Link href="/voting-info" className="btn-primary inline-block whitespace-nowrap">
              투표 방법 알아보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 