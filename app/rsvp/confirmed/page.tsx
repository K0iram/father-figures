import Link from "next/link";

export default function RsvpConfirmedPage() {
  return (
    <div className="grainy-bg flex min-h-screen items-center justify-center bg-[#8f8f8f57] px-6 py-16 font-sans text-black">
      <main className="w-full max-w-md rounded-2xl border border-black/10 bg-white/70 p-8 text-center backdrop-blur">
        <h1 className="ff-display text-4xl font-bold">You are in</h1>
        <p className="mt-3 text-sm text-black/70">
          Thanks for RSVPing. We will be in touch with details soon.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border border-black/70 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
        >
          Back home
        </Link>
      </main>
    </div>
  );
}
