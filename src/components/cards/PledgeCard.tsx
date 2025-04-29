import React from 'react';
import { Pledge } from '@/types';

interface PledgeCardProps {
  pledge: Pledge;
  order: number;
  onViewDetail: (pledgeId: string) => void;
}

export default function PledgeCard({ pledge, order, onViewDetail }: PledgeCardProps) {
  return (
    <div className="pledge-card p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all">
      <div className="flex">
        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
          <span className="font-semibold">{order}</span>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{pledge.title}</h3>
          <p className="text-text-secondary mt-1">{pledge.summary}</p>
          <button 
            onClick={() => onViewDetail(pledge.id)}
            className="pledge-detail-btn text-primary border border-primary rounded-button px-3 py-1 text-sm inline-flex items-center mt-2 whitespace-nowrap"
          >
            <span>공약 전문 보기</span>
            <i className="ri-arrow-right-line ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
} 