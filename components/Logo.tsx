type LogoProps = {
  light?: boolean;
  compact?: boolean;
};

export default function Logo({
  light = false,
  compact = false,
}: LogoProps) {
  const primaryText = light ? "text-white" : "text-slate-950";
  const secondaryText = light ? "text-cyan-100" : "text-cyan-700";

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-600 shadow-lg shadow-cyan-500/20">
        <div className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-white/20 blur-md" />

        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="relative h-8 w-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="26"
            y="10"
            width="12"
            height="44"
            rx="4"
            fill="white"
          />

          <rect
            x="10"
            y="26"
            width="44"
            height="12"
            rx="4"
            fill="white"
          />

          <path
            d="M12 39H22L27 31L33 43L39 34H52"
            stroke="#A7F3D0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!compact && (
        <div className="leading-none">
          <p
            className={`text-base font-black tracking-[-0.03em] sm:text-lg ${primaryText}`}
          >
            CALIS DOCTOR
          </p>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-px w-5 bg-cyan-500" />

            <p
              className={`text-[9px] font-black uppercase tracking-[0.25em] sm:text-[10px] ${secondaryText}`}
            >
              Medical Care
            </p>
          </div>
        </div>
      )}
    </div>
  );
}