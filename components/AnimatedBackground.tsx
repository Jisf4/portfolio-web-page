"use client";
export default function AnimatedBackground() {
  return (
    
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">




        <div
        className="absolute inset-0"
        style={{
            background: `
            radial-gradient(
                circle at center,
                rgba(6,182,212,0.15),
                transparent 65%
            )
            `,
        }}
        />

        <div
        className="
            absolute inset-0
            opacity-[1]
            mix-blend-soft-light
        "
        style={{
            backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        />


      
      {/* Cyan Blob */}
      <div
        className="
          absolute
          top-[7rem]
          left-[-5rem]
          w-[35rem]
          h-[35rem]
          rounded-full
          dark:bg-blue-500/20
          blur-[120px]
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
  
          dark:bg-purple-500/20
          blur-[120px]
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
          dark:bg-cyan-500/20
          blur-[120px]
          animate-blob animation-delay-4000
        "
      />
    </div>
  );
}