"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/app/actions/contact";
import { ContactFormState } from "@/types";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="space-y-4 border border-zinc-800 p-6 md:p-8 bg-zinc-950">
      <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
        // SEND DIRECT MESSAGE
      </div>

      <div className="space-y-1">
        <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase">
          NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name or company"
          className="w-full bg-black border border-zinc-800 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-mono"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full bg-black border border-zinc-800 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-mono"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="content" className="block text-xs font-mono text-zinc-400 uppercase">
          MESSAGE
        </label>
        <textarea
          id="content"
          name="content"
          rows={4}
          required
          placeholder="Tell me about your project or inquiry..."
          className="w-full bg-black border border-zinc-800 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-mono resize-none"
        />
      </div>

      {state.message && (
        <div
          className={`text-xs font-mono p-3 border ${
            state.success
              ? "border-emerald-800 bg-emerald-950/50 text-emerald-400"
              : "border-red-800 bg-red-950/50 text-red-400"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors disabled:opacity-50"
      >
        {isPending ? "[ SENDING... ]" : "[ SUBMIT MESSAGE ]"}
      </button>
    </form>
  );
}