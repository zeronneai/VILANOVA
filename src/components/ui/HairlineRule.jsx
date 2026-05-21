// Línea editorial con eyebrow numerado a la izquierda.
export default function HairlineRule({ num, label, onDark = false, maxLine = 280 }) {
  return (
    <div className={`flex items-center gap-4 ${onDark ? 'text-platinum-200' : 'text-graphite-500'}`}>
      <span className={`eyebrow ${onDark ? 'on-dark' : ''}`}>
        <span className="eyebrow-dot" />
        <span className="eyebrow-num">{num}</span>
        <span className="eyebrow-label">— {label}</span>
      </span>
      <span
        className="h-px flex-1"
        style={{
          maxWidth: maxLine,
          background: onDark ? 'var(--hairline-d)' : 'var(--hairline)',
        }}
      />
    </div>
  )
}
