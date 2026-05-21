import { assets } from '../data/copy.js'

export default function Logo({ className = '', variant = 'dark', size = 'md' }) {
  // variant 'dark' = logo sobre fondo claro (texto graphite)
  // variant 'light' = logo sobre fondo oscuro (texto offwhite, logo posiblemente invertido)
  const isLight = variant === 'light'
  const sizes = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  }
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={assets.logoPng}
        alt="Vilanova Consultores"
        className={`${sizes[size]} w-auto select-none ${
          isLight ? 'brightness-0 invert' : ''
        }`}
        draggable={false}
      />
      <div className="leading-none hidden sm:block">
        <div
          className={`font-display text-[18px] tracking-tight ${
            isLight ? 'text-offwhite' : 'text-graphite-700'
          }`}
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
        >
          Vilanova
        </div>
        <div
          className={`text-[9px] uppercase tracking-widest3 mt-1 font-mono opacity-70 ${
            isLight ? 'text-offwhite' : 'text-graphite-500'
          }`}
        >
          Fianzas &amp; Seguros · MCMLV
        </div>
      </div>
    </div>
  )
}
