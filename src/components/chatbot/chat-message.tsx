import { ChatMessage, Candidate } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface ChatMessageProps {
  message: ChatMessage;
  candidate?: Candidate;
}

export default function ChatMessageComponent({ message, candidate }: ChatMessageProps) {
  if (message.role === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-primary text-white py-3 px-4 rounded-2xl rounded-tr-sm max-w-[80%]">
          <p>{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mb-4">
      {candidate && (
        <div className="flex-shrink-0 mr-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={candidate.profileImage}
              alt={`${candidate.name} 후보`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col max-w-[80%]">
        <div className="bg-gray-100 py-3 px-4 rounded-2xl rounded-tl-sm">
          <p>{message.content}</p>
        </div>
        
        {(message.sourceUrl || message.sourceDescription) && (
          <div className="mt-2 bg-gray-50 border border-divider rounded-md p-3">
            <p className="text-xs font-medium text-secondary mb-1">📎 출처</p>
            {message.sourceDescription && (
              <p className="text-sm mb-1">{message.sourceDescription}</p>
            )}
            {message.sourceUrl && (
              <Link 
                href={message.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                공식 문서 보기 →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 