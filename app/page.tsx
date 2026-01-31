import Image from "next/image";
export default function Home() {
  return (
    <div className="grainy-bg flex min-h-screen items-center justify-center bg-[#fecd96] font-sans text-black">
      <main
        className="h-[60vh] w-full max-w-3xl bg-center bg-no-repeat bg-contain flex flex-col items-center justify-center"
        aria-label="Father Figures logo"
      >
        <Image src="/ff_logo.webp" alt="Father Figures logo" width={250} height={250} />
      </main>
    </div>
  );
}
