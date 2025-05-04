'use client';

import React, { useState, useEffect } from 'react';
import { Pledge } from '@/types';

interface PledgeAccordionProps {
  pledge: Pledge;
  defaultOpen?: boolean;
  openPledgeId?: string | null;
  setOpenPledgeId?: (id: string | null) => void;
}

export default function PledgeAccordion({ 
  pledge, 
  defaultOpen = false, 
  openPledgeId, 
  setOpenPledgeId 
}: PledgeAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  // 외부에서 openPledgeId가 변경될 때 해당 아코디언을 열거나 닫음
  useEffect(() => {
    if (openPledgeId !== undefined) {
      setIsOpen(openPledgeId === pledge.id);
    }
  }, [openPledgeId, pledge.id]);

  const toggleAccordion = () => {
    // 외부 상태 관리가 있는 경우
    if (setOpenPledgeId) {
      // 이미 열려있는 경우 닫기
      if (isOpen) {
        setOpenPledgeId(null);
      } else {
        // 닫혀있는 경우 열기
        setOpenPledgeId(pledge.id);
      }
    } else {
      // 외부 상태 관리가 없는 경우 내부 상태로만 토글
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`accordion border border-gray-200 rounded-lg ${isOpen ? 'accordion-open' : ''}`}>
      <div 
        className="accordion-header flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold text-lg">{pledge.title}</h3>
        <div className="w-6 h-6 flex items-center justify-center">
          <i className={`ri-arrow-down-s-line accordion-icon ${isOpen ? 'rotate-180' : ''} transition-transform`}></i>
        </div>
      </div>
      <div className="accordion-content px-4 pb-4" style={{ maxHeight: isOpen ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
        <div className="border-t border-gray-100 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-text-primary mb-2">분야</h4>
              <p className="text-text-secondary">{pledge.category}</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-medium text-text-primary mb-2">목표 및 추진 배경</h4>
              <p className="text-text-secondary">{pledge.background}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium text-text-primary mb-2">주요 추진 내용</h4>
            <ul className="space-y-2 text-text-secondary">
              {pledge.content.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-medium text-text-primary mb-2">이행 방법</h4>
              <p className="text-text-secondary">{pledge.implementation}</p>
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-2">이행 기간</h4>
              <p className="text-text-secondary">{pledge.period}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium text-text-primary mb-2">재원 조달 방안</h4>
            <p className="text-text-secondary">{pledge.funding}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 