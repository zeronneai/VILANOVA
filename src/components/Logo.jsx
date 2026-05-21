// Logo en SVG inline. Sustituir por el isotipo real cuando esté disponible.
export default function Logo({ className = '', variant = 'light' }) {
  const stroke = variant === 'light' ? '#F7F3EC' : '#0B1F3A'
  const accent = '#B08A3E'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="44" height="44" stroke={stroke} strokeWidth="1.2" />
        <path
          d="M12 14 L24 36 L36 14"
          stroke={stroke}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="square"
        />
        <circle cx="24" cy="22" r="2.2" fill={accent} />
      </svg>
      <div className="leading-none">
        <div
          className="font-serif text-lg tracking-wide"
          style={{ color: stroke }}
        >
          Vilanova
        </div>
        <div
          className="text-[9px] uppercase tracking-widest2 mt-0.5 opacity-80"
          style={{ color: stroke }}
        >
          Fianzas &amp; Seguros
        </div>
      </div>
    </div>
  )
}
