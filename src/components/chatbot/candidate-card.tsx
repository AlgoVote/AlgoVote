'use client';

import { Candidate } from '@/types';
import Image from 'next/image';

interface CandidateCardProps {
  candidate: Candidate;
  isSelected: boolean;
  onSelect: (candidateId: string) => void;
}

export default function CandidateCard({ candidate, isSelected, onSelect }: CandidateCardProps) {
  return (
    <div
      className={`flex flex-col items-center p-4 border rounded-xl transition-all cursor-pointer
                 ${isSelected ? 'border-primary bg-primary/5 ring-2 ring-primary' : 'border-divider hover:bg-gray-50'}`}
      onClick={() => onSelect(candidate.id)}
    >
      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2">
        <Image
          src={candidate.profileImage}
          alt={`${candidate.name} 후보`}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-base font-medium">{candidate.name}</h3>
      <p className="text-xs text-secondary">{candidate.party}</p>
    </div>
  );
} 