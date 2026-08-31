import { supabase } from '@/lib/supabase';
import { Project } from '@/types';

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching projects from Supabase:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Unexpected error fetching projects:', err);
    return [];
  }
}