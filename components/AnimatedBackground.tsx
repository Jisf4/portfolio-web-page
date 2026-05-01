"use client";
export default function AnimatedBackground() {
  return (
    
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
        className="
            absolute inset-0
            opacity-[0.015]
            mix-blend-soft-light
        "
        style={{
            backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
        />
        <div
        className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:60px_60px]

            dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
        "
        />

        <div
        className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_65%)]
        "
        />
      
      {/* Cyan Blob */}
      <div
        className="
          absolute
          top-[-10rem]
          left-[-5rem]
          w-[35rem]
          h-[35rem]
          rounded-full
          bg-cyan-400/20
          dark:bg-cyan-500/20
          blur-3xl
          animate-blob
        "
      />

      {/* Purple Blob */}
      <div
        className="
          absolute
          top-[20rem]
          right-[-10rem]
          w-[40rem]
          h-[40rem]
          rounded-full
          bg-purple-400/20
          dark:bg-purple-500/20
          blur-3xl
          animate-blob animation-delay-2000
        "
      />

      {/* Blue Blob */}
      <div
        className="
          absolute
          bottom-[-10rem]
          left-[30%]
          w-[35rem]
          h-[35rem]
          rounded-full
          bg-blue-400/20
          dark:bg-blue-500/20
          blur-3xl
          animate-blob animation-delay-4000
        "
      />
    </div>
  );
}