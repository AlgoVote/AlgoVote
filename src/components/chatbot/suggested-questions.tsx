'use client';

import { SuggestedQuestion } from '@/types';

interface SuggestedQuestionsProps {
  questions: SuggestedQuestion[];
  onSelectQuestion: (question: string) => void;
}

export default function SuggestedQuestions({ questions, onSelectQuestion }: SuggestedQuestionsProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-secondary mb-2">이런 질문은 어떠세요?</h3>
      <div className="flex overflow-x-auto pb-2 space-x-2 -mx-4 px-4">
        {questions.map((question) => (
          <button
            key={question.id}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors"
            onClick={() => onSelectQuestion(question.text)}
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
} 