"use server";

import { ContactFormState } from "@/types";

export async function sendContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;

  // Basic validation
  if (!name || !email || !content) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    // Here we will insert into Supabase or trigger notification
    // For now, we simulate success
    return {
      success: true,
      message: "Message delivered successfully. I will get back to you shortly.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}