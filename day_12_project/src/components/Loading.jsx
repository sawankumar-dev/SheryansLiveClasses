const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 font-sans selection:bg-none">
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated Spinner with Glow Effect */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          {/* Outer Glowing Ring */}
          <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/20"></div>
          
          {/* Main Spinning Border */}
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-800 border-t-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        </div>

        {/* Loading Text & Description */}
        <div className="text-center">
          <h2 className="animate-pulse text-2xl font-bold tracking-wide text-slate-100">
            Loading
            <span className="inline-block animate-bounce [animation-delay:0.2s]">.</span>
            <span className="inline-block animate-bounce [animation-delay:0.4s]">.</span>
            <span className="inline-block animate-bounce [animation-delay:0.6s]">.</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Please wait while we set up your dashboard
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loading;
