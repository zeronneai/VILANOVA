import { useMemo, useState } from 'react'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { bonds, insurance } from '../data/services.js'
import { siteConfig } from '../data/siteConfig.js'

const PLAZAS = ['Chihuahua', 'Torreón', 'Xalapa', 'Querétaro']
const TIPO_CLIENTE = ['Contratista', 'Empresa', 'Persona física']
const SERVICIO_TIPO = ['Fianzas', 'Seguros']

const initial = {
  nombre: '',
  empresa: '',
  telefono: '',
  plaza: '',
  tipoCliente: '',
  servicioTipo: '',
  servicioLinea: '',
  monto: '',
  mensaje: '',
}

export default function LeadForm() {
  const [data, setData] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const lineOptions = useMemo(() => {
    if (data.servicioTipo === 'Fianzas') return bonds.map((b) => b.name)
    if (data.servicioTipo === 'Seguros') return insurance.map((s) => s.name)
    return []
  }, [data.servicioTipo])

  const update = (k) => (e) => {
    const v = e?.target ? e.target.value : e
    setData((d) => ({
      ...d,
      [k]: v,
      ...(k === 'servicioTipo' ? { servicioLinea: '' } : {}),
    }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: null }))
  }

  const validate = () => {
    const e = {}
    if (!data.nombre.trim() || data.nombre.trim().length < 2)
      e.nombre = 'Ingresa tu nombre completo.'
    if (!data.telefono.trim() || !/^[\d\s+()-]{8,}$/.test(data.telefono))
      e.telefono = 'Ingresa un teléfono válido.'
    if (!data.plaza) e.plaza = 'Selecciona la plaza.'
    if (!data.tipoCliente) e.tipoCliente = 'Selecciona el tipo de cliente.'
    if (!data.servicioTipo) e.servicioTipo = 'Selecciona Fianzas o Seguros.'
    if (!data.servicioLinea) e.servicioLinea = 'Selecciona la línea específica.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return

    const payload = [
      '*Nueva solicitud Vilanova Consultores*',
      '',
      `*Nombre:* ${data.nombre}`,
      data.empresa && `*Empresa:* ${data.empresa}`,
      `*Teléfono:* ${data.telefono}`,
      `*Plaza:* ${data.plaza}`,
      `*Tipo de cliente:* ${data.tipoCliente}`,
      `*Servicio:* ${data.servicioTipo} — ${data.servicioLinea}`,
      data.monto && `*Monto estimado:* ${data.monto}`,
      data.mensaje && `*Mensaje:* ${data.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(payload)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-ink-50 p-10 sm:p-14 text-center shadow-soft">
        <CheckCircle2 size={48} className="text-bronze-500 mx-auto mb-6" />
        <h3 className="font-serif text-3xl text-ink-600 mb-3">
          Hemos recibido tu solicitud.
        </h3>
        <p className="text-ink-600/75 max-w-md mx-auto mb-8">
          Un consultor Vilanova te contactará en las próximas horas hábiles. Si
          tu necesidad es urgente, también puedes continuar la conversación por
          WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(initial)
            setSubmitted(false)
          }}
          className="btn-outline-ink"
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-ink-50 p-7 sm:p-10 lg:p-12 shadow-soft">
      <h3 className="font-serif text-ink-600 text-3xl mb-2">
        Solicita tu asesoría sin costo
      </h3>
      <p className="text-ink-600/70 mb-9 text-sm">
        Completa los datos y un consultor te contactará el mismo día hábil.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Nombre completo *"
          error={errors.nombre}
          input={
            <input
              type="text"
              className="input-field"
              value={data.nombre}
              onChange={update('nombre')}
              placeholder="Ej. Juan Pérez"
            />
          }
        />
        <Field
          label="Empresa"
          input={
            <input
              type="text"
              className="input-field"
              value={data.empresa}
              onChange={update('empresa')}
              placeholder="Razón social"
            />
          }
        />
        <Field
          label="Teléfono / WhatsApp *"
          error={errors.telefono}
          input={
            <input
              type="tel"
              className="input-field"
              value={data.telefono}
              onChange={update('telefono')}
              placeholder="(614) 000 0000"
            />
          }
        />
        <Field
          label="Plaza *"
          error={errors.plaza}
          input={
            <select
              className="input-field"
              value={data.plaza}
              onChange={update('plaza')}
            >
              <option value="">Selecciona…</option>
              {PLAZAS.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          }
        />
        <Field
          label="Tipo de cliente *"
          error={errors.tipoCliente}
          input={
            <select
              className="input-field"
              value={data.tipoCliente}
              onChange={update('tipoCliente')}
            >
              <option value="">Selecciona…</option>
              {TIPO_CLIENTE.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          }
        />
        <Field
          label="Servicio de interés *"
          error={errors.servicioTipo}
          input={
            <select
              className="input-field"
              value={data.servicioTipo}
              onChange={update('servicioTipo')}
            >
              <option value="">Selecciona…</option>
              {SERVICIO_TIPO.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          }
        />
        <Field
          label="Línea específica *"
          error={errors.servicioLinea}
          input={
            <select
              className="input-field"
              value={data.servicioLinea}
              onChange={update('servicioLinea')}
              disabled={!data.servicioTipo}
            >
              <option value="">
                {data.servicioTipo
                  ? 'Selecciona la línea…'
                  : 'Primero elige Fianzas o Seguros'}
              </option>
              {lineOptions.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          }
        />
        <Field
          label="Monto estimado (MXN)"
          input={
            <input
              type="text"
              className="input-field"
              value={data.monto}
              onChange={update('monto')}
              placeholder="Ej. $1,500,000"
            />
          }
        />
        <div className="sm:col-span-2">
          <Field
            label="Mensaje"
            input={
              <textarea
                rows={4}
                className="input-field resize-none"
                value={data.mensaje}
                onChange={update('mensaje')}
                placeholder="Cuéntanos brevemente sobre tu proyecto, contrato o necesidad."
              />
            }
          />
        </div>
      </div>

      <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
        <p className="text-xs text-ink-600/55 max-w-md">
          Al enviar aceptas ser contactado por un consultor Vilanova. No
          compartimos tus datos.
        </p>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn-primary group"
        >
          Enviar solicitud
          <Send size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

function Field({ label, input, error }) {
  return (
    <div>
      <label className="label-field">{label}</label>
      {input}
      {error && (
        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-600">
          <AlertCircle size={13} />
          {error}
        </div>
      )}
    </div>
  )
}
