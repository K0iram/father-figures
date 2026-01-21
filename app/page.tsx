export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fecd96] font-sans text-black">
      <main
        className="h-[60vh] w-full max-w-3xl bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/ff_logo.webp')" }}
        aria-label="Father Figures logo"
      />
    </div>
  );
}
