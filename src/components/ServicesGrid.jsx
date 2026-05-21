import { useReveal } from '../hooks/useReveal.js'

function ServiceCard({ item, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal card-service group"
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="absolute top-0 left-0 w-0 h-px bg-gold-500 transition-all duration-500 group-hover:w-full" />
      <div className="flex items-start gap-4 mb-4">
        <span className="font-serif text-gold-500 text-xl tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-serif text-navy-600 text-xl leading-tight">
          {item.name}
        </h3>
      </div>
      <p className="text-navy-600/70 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

export default function ServicesGrid({
  id,
  eyebrow,
  title,
  highlight,
  intro,
  items,
  variant = 'light',
}) {
  const isLight = variant === 'light'
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${isLight ? 'bg-cream-50' : 'bg-cream-100'}`}
    >
      <div className="container-px">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="h-display text-navy-600 text-4xl sm:text-5xl lg:text-[56px]">
            {title}{' '}
            {highlight && <span className="italic text-gold-500">{highlight}</span>}
          </h2>
          <div className="gold-rule mt-8 mb-7" />
          <p className="text-navy-600/75 text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <ServiceCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
