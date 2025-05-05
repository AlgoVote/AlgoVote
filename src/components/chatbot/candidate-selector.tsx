'use client';

import { Candidate } from '@/types';
import CandidateCard from './candidate-card';

interface CandidateSelectorProps {
  candidates: Candidate[];
  selectedCandidateId: string | null;
  onSelectCandidate: (candidateId: string) => void;
}

export default function CandidateSelector({
  candidates,
  selectedCandidateId,
  onSelectCandidate
}: CandidateSelectorProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">후보를 선택해주세요</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            isSelected={candidate.id === selectedCandidateId}
            onSelect={onSelectCandidate}
          />
        ))}
      </div>
    </div>
  );
} 