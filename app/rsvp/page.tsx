"use client";

import { useState } from "react";

const formAction = process.env.NEXT_PUBLIC_RSVP_FORM_ACTION ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export default function RsvpPage() {
  const [phone, setPhone] = useState("");

  return (
    <div className="grainy-bg flex min-h-screen bg-[#8f8f8f57] px-6 py-16 font-sans text-black">
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-10">
        <div className="text-center">
          <h1 className="ff-display text-5xl font-bold">RSVP</h1>
          <p className="mt-3 text-md tracking-wide text-black/70">
            Space is limited. Get on the list for our next event.
          </p>
        </div>
        <form className="flex flex-col gap-8" action={formAction} method="post">
          <input type="hidden" name="redirect" value={siteUrl ? `${siteUrl}/rsvp/confirmed` : ""} />
          <label className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-black/70">
            Name
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Full name"
              className="border-b border-black/40 bg-transparent pb-2 text-2xl font-semibold uppercase tracking-wide text-black outline-none placeholder:text-black/30 focus:border-black"
            />
          </label>
          <label className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-black/70">
            Phone
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              pattern="\(\d{3}\) \d{3}-\d{4}"
              title="Use format (000) 000-0000"
              placeholder="(000) 000-0000"
              value={phone}
              onChange={(event) => setPhone(formatPhone(event.target.value))}
              className="border-b border-black/40 bg-transparent pb-2 text-2xl font-semibold uppercase tracking-wide text-black outline-none placeholder:text-black/30 focus:border-black"
            />
          </label>
          <label className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-black/70">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
              className="border-b border-black/40 bg-transparent pb-2 text-2xl font-semibold uppercase tracking-wide text-black outline-none placeholder:text-black/30 focus:border-black"
            />
          </label>
          <button
            type="submit"
            className="mt-2 self-start text-lg font-semibold uppercase tracking-wide text-black underline decoration-black/50 underline-offset-4 transition hover:text-black/70 cursor-pointer"
          >
            Submit RSVP
          </button>
        </form>
      </main>
    </div>
  );
}
