"use client";

import Image from "next/image";
import { useRef, useState } from "react";
export default function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [fadeStarted, setFadeStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fadeLeadSeconds = 2.5;

  return (
    <div className="grainy-bg relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#af9e84] font-sans text-black">
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-3000 ${
          fadeStarted ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted={isMuted}
        playsInline
        aria-label="Father Figures background video"
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          if (
            !fadeStarted &&
            Number.isFinite(video.duration) &&
            video.duration - video.currentTime <= fadeLeadSeconds
          ) {
            setFadeStarted(true);
            setShowLogo(true);
          }
        }}
        onEnded={() => {
          setShowLogo(true);
          setVideoEnded(true);
        }}
      >
        <source src="/fatherFigures.mp4" type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 bg-[#af9e84] transition-opacity duration-3000 ${
          fadeStarted || videoEnded ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
      <button
        type="button"
        className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/75"
        onClick={() => {
          setIsMuted((prev) => !prev);
          if (isMuted) {
            videoRef.current?.play();
          }
        }}
        aria-pressed={isMuted}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
          >
            <path d="M4 9v6h4l5 4V5L8 9H4zm13.5 3a4.5 4.5 0 0 0-2.1-3.8v7.6a4.5 4.5 0 0 0 2.1-3.8zm2.5 0a7 7 0 0 1-3.3 6v-2.2a4.8 4.8 0 0 0 0-7.6V6a7 7 0 0 1 3.3 6z" />
          </svg>
        ) : (
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
          >
            <path d="M4 9v6h4l5 4V5L8 9H4zm11.5 3a4.5 4.5 0 0 0-2.1-3.8v7.6a4.5 4.5 0 0 0 2.1-3.8zM19.5 12a7 7 0 0 1-3.3 6v-2.2a4.8 4.8 0 0 0 0-7.6V6a7 7 0 0 1 3.3 6zM20.7 4.7l-1.4-1.4L3.3 19.3l1.4 1.4 16-16z" />
          </svg>
        )}
      </button>
      <main
        className={`relative z-10 flex h-[60vh] w-full max-w-3xl flex-col items-center justify-center transition-opacity duration-3000 ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Father Figures logo"
      >
        <Image
          src="/ff_logo_4x.webp"
          alt="Father Figures logo"
          width={340}
          height={340}
          className=""
        />
      </main>
    </div>
  );
}
