import React from 'react';
import Link from 'next/link';

export default function VotingInfo() {
  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
        <h1 className="text-3xl font-bold text-text-primary text-center mb-10">투표 안내</h1>
        
        {/* 투표일 정보 섹션 */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <i className="ri-calendar-event-line text-primary mr-2"></i>
            투표일 안내
          </h2>
          <div className="bg-primary bg-opacity-5 p-4 rounded-lg mb-4">
            <p className="text-lg font-medium text-center">2025년 6월 3일 (목) 오전 6시 ~ 오후 8시</p>
          </div>
          <p className="text-text-secondary mb-2">※ 투표소는 오후 8시에 정확히 마감됩니다. 마감 시간 전에 투표소에 도착하여 대기하고 있더라도 투표를 할 수 없으니 이 점 유의하시기 바랍니다.</p>
          <p className="text-text-secondary">※ 사전투표: 2025년 5월 10일 (토) ~ 5월 11일 (일) 오전 6시 ~ 오후 8시</p>
        </section>
        
        {/* 투표 자격 섹션 */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <i className="ri-user-star-line text-primary mr-2"></i>
            투표 자격
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">투표일 기준</h3>
            <ul className="list-disc pl-5 text-text-secondary space-y-1">
              <li>대한민국 국민</li>
              <li>만 18세 이상</li>
              <li>선거인명부에 등재된 사람</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">준비물</h3>
            <ul className="list-disc pl-5 text-text-secondary space-y-1">
              <li>신분증(주민등록증, 운전면허증, 여권 등)</li>
              <li>투표 안내문(지참하지 않아도 투표 가능)</li>
            </ul>
          </div>
        </section>
        
        {/* 투표 방법 섹션 */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <i className="ri-file-list-3-line text-primary mr-2"></i>
            투표 절차
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="font-bold">1</span>
                </div>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">본인 확인</h3>
              <p className="text-text-secondary text-center">신분증을 제시하여 본인 확인을 합니다.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">투표용지 수령</h3>
              <p className="text-text-secondary text-center">선거인명부에 서명한 후 투표용지를 받습니다.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="font-bold">3</span>
                </div>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">기표 및 투입</h3>
              <p className="text-text-secondary text-center">기표소에서 기표한 후 투표함에 투입합니다.</p>
            </div>
          </div>
        </section>
        
        {/* 투표소 찾기 섹션 */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <i className="ri-map-pin-line text-primary mr-2"></i>
            투표소 찾기
          </h2>
          <p className="text-text-secondary mb-4">본인의 주민등록주소에 따른 투표소 위치를 확인하세요.</p>
          <div className="text-center">
            <a 
              href="https://www.nec.go.kr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-6 py-3 rounded-button inline-flex items-center font-medium hover:bg-opacity-90 transition-colors"
            >
              <i className="ri-search-line mr-2"></i>
              투표소 찾기
            </a>
          </div>
        </section>
        
        {/* 선거일 행동요령 섹션 */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <i className="ri-information-line text-primary mr-2"></i>
            선거일 행동요령
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-divider rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-error flex items-center">
                <i className="ri-close-circle-line mr-1"></i>
                금지 사항
              </h3>
              <ul className="list-disc pl-5 text-text-secondary space-y-1">
                <li>투표소 내에서 사진 촬영</li>
                <li>선거 운동 관련 복장 착용</li>
                <li>타인의 투표 용지 확인</li>
                <li>투표소 내 정치적 발언이나 행동</li>
              </ul>
            </div>
            <div className="border border-divider rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-success flex items-center">
                <i className="ri-check-line mr-1"></i>
                유의 사항
              </h3>
              <ul className="list-disc pl-5 text-text-secondary space-y-1">
                <li>신분증 반드시 지참</li>
                <li>투표용지에 날인된 선관위 도장 확인</li>
                <li>기표소에서는 반드시 기표용구만 사용</li>
                <li>기표 후 투표함에 직접 투입</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* 버튼 영역 */}
        <div className="flex justify-center mt-10">
          <Link href="/" className="bg-white border border-primary text-primary px-6 py-3 rounded-button font-medium hover:bg-primary hover:bg-opacity-5 transition-colors">
            홈으로 돌아가기
          </Link>
        </div>
        
        {/* 정보 출처 */}
        <div className="text-center text-xs text-text-secondary mt-8 mb-10">
          정보 출처: <a href="https://www.nec.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">중앙선거관리위원회</a>, 2025.04.27 기준
        </div>
      </main>
    </div>
  );
} 