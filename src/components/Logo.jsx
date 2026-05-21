export default function Logo({ className = '', variant = 'light' }) {
  const stroke = variant === 'light' ? '#F4EFE6' : '#0A1628'
  const accent = '#A47148'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="44" height="44" stroke={stroke} strokeWidth="1.1" />
        <path
          d="M12 14 L24 36 L36 14"
          stroke={stroke}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="square"
        />
        <circle cx="24" cy="22" r="2.2" fill={accent} />
      </svg>
      <div className="leading-none">
        <div
          className="font-serif text-[19px] tracking-wide"
          style={{ color: stroke }}
        >
          Vilanova
        </div>
        <div
          className="text-[9px] uppercase tracking-widest3 mt-1 opacity-75 font-mono"
          style={{ color: stroke }}
        >
          Fianzas &amp; Seguros · MCMLV
        </div>
      </div>
    </div>
  )
}
