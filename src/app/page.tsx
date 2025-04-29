import React from 'react';
import Link from 'next/link';
import CandidateCard from '@/components/cards/CandidateCard';
import { candidates } from '@/data/candidates';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">정확한 정보를 바탕으로, 현명한 선택을</h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            알고투표는 객관적인 정보를 통해 유권자들이 편향 없이 후보자를 비교하고
            현명한 선택을 할 수 있도록 돕는 플랫폼입니다. 정확한 정보로 민주주의의 가치를 높입니다.
          </p>
          <div className="flex justify-center">
            <Link href="/compare" className="btn-primary whitespace-nowrap">
              공약 비교하기
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 후보자 섹션 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">제21대 대통령 선거 주요 후보자</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {candidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
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
                <i className="ri-user-voice-line text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">시민 참여</h3>
              <p className="text-text-secondary text-center">유권자들이 직접 질문하고 토론할 수 있는 참여형 플랫폼을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl bg-primary bg-opacity-5 rounded-2xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">투표일 안내</h2>
            <p className="text-lg text-text-secondary mb-8">2025년 6월 3일 (목) 오전 6시 ~ 오후 8시</p>
            <Link href="/voting-info" className="btn-primary inline-block whitespace-nowrap">
              투표 방법 알아보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 