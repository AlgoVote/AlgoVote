import { supabase } from './client';
import { Candidate, Pledge, Statement, QnA, TeamMember } from '@/types';

// Candidate services
export const getCandidates = async (): Promise<Candidate[]> => {
  const { data, error } = await supabase
    .from('candidates')
    .select('*')
    .order('name');
  
  if (error) {
    console.error('Error fetching candidates:', error);
    return [];
  }
  
  return data as Candidate[];
};

export const getCandidateById = async (id: string): Promise<Candidate | null> => {
  const { data, error } = await supabase
    .from('candidates')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching candidate ${id}:`, error);
    return null;
  }
  
  return data as Candidate;
};

// Pledge services
export const getPledgesByCandidate = async (candidateId: string): Promise<Pledge[]> => {
  const { data, error } = await supabase
    .from('pledges')
    .select('*')
    .eq('candidateId', candidateId)
    .order('order');
  
  if (error) {
    console.error(`Error fetching pledges for candidate ${candidateId}:`, error);
    return [];
  }
  
  return data as Pledge[];
};

// Statement services
export const getStatementsByCandidate = async (candidateId: string): Promise<Statement[]> => {
  const { data, error } = await supabase
    .from('statements')
    .select('*')
    .eq('candidateId', candidateId);
  
  if (error) {
    console.error(`Error fetching statements for candidate ${candidateId}:`, error);
    return [];
  }
  
  return data as Statement[];
};

// QnA services
export const getQnAsByCandidate = async (candidateId: string): Promise<QnA[]> => {
  const { data, error } = await supabase
    .from('qnas')
    .select('*')
    .eq('candidateId', candidateId);
  
  if (error) {
    console.error(`Error fetching Q&As for candidate ${candidateId}:`, error);
    return [];
  }
  
  return data as QnA[];
};

// Team member services
export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('id');
  
  if (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
  
  return data as TeamMember[];
};

// Candidate comparison services
export const getComparisonData = async (
  candidateIds: string[],
  categories: string[]
): Promise<Record<string, Record<string, string>>> => {
  const { data, error } = await supabase
    .from('comparisons')
    .select('*')
    .in('candidateId', candidateIds)
    .in('category', categories);
  
  if (error) {
    console.error('Error fetching comparison data:', error);
    return {};
  }
  
  // Transform the data into the required format
  const result: Record<string, Record<string, string>> = {};
  
  interface ComparisonItem {
    category: string;
    candidateId: string;
    content: string;
  }
  
  data.forEach((item: ComparisonItem) => {
    if (!result[item.category]) {
      result[item.category] = {};
    }
    result[item.category][item.candidateId] = item.content;
  });
  
  return result;
}; 