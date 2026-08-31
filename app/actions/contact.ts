'use server';

import { supabase } from '@/lib/supabase';
import { ContactFormState } from '@/types';

export async function sendContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const content = formData.get('content') as string;

  // Validation logic matching string[] error types
  const errors: ContactFormState['errors'] = {};

  if (!company || company.trim() === '') {
    errors.company = ['Company name is required.'];
  }

  if (!email || !email.includes('@')) {
    errors.email = ['Valid email is required.'];
  }

  if (!content || content.trim() === '') {
    errors.content = ['Message content is required.'];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fix the errors in the form.',
      errors,
    };
  }

  try {
    const { error } = await supabase.from('contact_messages').insert([
      {
        company: company.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : null,
        message: content.trim(),
      },
    ]);

    if (error) {
      console.error('Supabase error inserting contact message:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
      };
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (err) {
    console.error('Unexpected error in contact action:', err);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}