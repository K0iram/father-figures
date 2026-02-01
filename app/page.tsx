import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grainy-bg flex min-h-screen bg-[#8f8f8f57] font-sans text-black">
      <main
        className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-between gap-6 px-6 py-25"
        aria-label="Father Figures logo"
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <Image src="/ff_logo_4x.webp" alt="Father Figures logo" width={250} height={250} />
        </div>
        <div className="flex flex-col items-center gap-2 pb-2 text-center">
          <p className="text-lg uppercase tracking-wide text-black/70">
            Be the example. Space is limited
          </p>
          <Link
            href="/rsvp"
            className="text-xl font-semibold uppercase tracking-wide text-black underline decoration-black/50 underline-offset-4 transition hover:text-black/70"
          >
            Get on the list
          </Link>
        </div>
      </main>
    </div>
  );
}
