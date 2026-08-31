export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    company?: string[];
    email?: string[];
    phone?: string[];
    content?: string[];
  };
}

export interface Project {
  id: string;
  created_at: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  highlights_ar: string[];
  highlights_en: string[];
  image_url: string | null;
  demo_url: string | null;
  display_order: number;
  category_ar?: string | null;
  category_en?: string | null;
}