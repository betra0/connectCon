import { useState } from 'react'

import {
  IconReportAnalytics,
  IconClock,
  IconFileCheck,
  IconCalendarEvent,
  IconAlertTriangle,
  IconDownload,
} from '@tabler/icons-react'

import copilotLogo from '../assets/image.png'

function CopilotLogo({ className = '' }) {
  return (
    <img
      className={`copilot-logo ${className}`}
      src={copilotLogo}
      alt="Copilot"
    />
  )
}




function ReportToggle({ checked, onChange, label }) {
  return (
    <label className="report-toggle-row">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="report-toggle" aria-hidden="true" />
    </label>
  )
}
const initialReportFields = [
  'ID Orden',
  'Descripción',
  'Estado',
  'Fecha Inicio',
  'Fecha Fin',
  'Área',
  'Responsable',
  'Costo Total',
]
const reportOrders = [
  {
    id: 'OT-10045',
    description: 'Inspección de bomba',
    area: 'Mantención',
    status: 'Completada',
    priority: 'Alta',
    responsible: 'Juan Pérez',
    start: '03/06/2024',
    end: '04/06/2024',
    cost: '$ 1.250.000',
  },
  {
    id: 'OT-10046',
    description: 'Cambio de filtro',
    area: 'Operaciones',
    status: 'Completada',
    priority: 'Media',
    responsible: 'María López',
    start: '02/06/2024',
    end: '03/06/2024',
    cost: '$ 650.000',
  },
  {
    id: 'OT-10047',
    description: 'Revisión de válvula',
    area: 'Servicios',
    status: 'En Proceso',
    priority: 'Alta',
    responsible: 'Carlos Silva',
    start: '06/06/2024',
    end: '-',
    cost: '$ 1.100.000',
  },
  {
    id: 'OT-10048',
    description: 'Lubricación de motor',
    area: 'Mantención',
    status: 'En Proceso',
    priority: 'Media',
    responsible: 'Pedro Gómez',
    start: '06/06/2024',
    end: '-',
    cost: '$ 950.000',
  },
  {
    id: 'OT-10049',
    description: 'Reparación de sensor',
    area: 'Proyectos',
    status: 'Retrasada',
    priority: 'Alta',
    responsible: 'Ana Torres',
    start: '30/05/2024',
    end: '-',
    cost: '$ 2.300.000',
  },
]

const reportAreaBars = [
  { label: 'Mantención', value: 35 },
  { label: 'Operaciones', value: 28 },
  { label: 'Proyectos', value: 22 },
  { label: 'Servicios', value: 18 },
  { label: 'Otros', value: 25 },
]






function GenerateReportPage() {
  const [selectedSources, setSelectedSources] = useState([
    'Máximo Mobile',
    'SAP',
    'Power BI',
    'Copilot',
  ])
  const [fields, setFields] = useState(initialReportFields)
  const [exportType, setExportType] = useState('PDF')
  const [includeCharts, setIncludeCharts] = useState(true)
  const [includeDetail, setIncludeDetail] = useState(true)

  const toggleSource = (source) => {
    setSelectedSources((current) =>
      current.includes(source)
        ? current.filter((item) => item !== source)
        : [...current, source],
    )
  }

  const removeField = (field) => {
    setFields((current) => current.filter((item) => item !== field))
  }

  return (
    <section className="report-page">
      <div className="report-heading">
        <div className="report-heading-main">
          <div className="report-heading-icon">
            <IconReportAnalytics size={24} stroke={1.8} />
          </div>

          <div>
            <h1>Generar Reporte</h1>
            <p>
              Crea reportes personalizados con datos en tiempo real de todos los
              sistemas integrados.
            </p>
          </div>
        </div>

        <button className="report-history-button" type="button">
          <IconClock size={17} stroke={1.8} />
          Historial de reportes
        </button>
      </div>

      <div className="report-progress" aria-label="Etapas de generación del reporte">
        {[
          ['Seleccionar fuente de datos', 'Elige los sistemas y módulos'],
          ['Configurar filtros', 'Define los criterios del reporte'],
          ['Visualizar reporte', 'Revisa y analiza los resultados'],
          ['Generar y compartir', 'Exporta o programa tu reporte'],
        ].map(([title, subtitle]) => (
          <div className="report-progress-step" key={title}>
            <span className="report-progress-check">
              <IconFileCheck size={16} stroke={2} />
            </span>
            <div>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="report-builder">
        <aside className="report-column report-source-column">
          <div className="report-section-heading">
            <h2>Fuentes de datos</h2>
            <p>Selecciona los sistemas que deseas consultar.</p>
          </div>

          <div className="report-source-list">
            {[
              ['Máximo Mobile', 'Órdenes, actividades e inspecciones', 'MM', 'maximo'],
              ['SAP', 'Equipos, materiales y costos', 'SAP', 'sap'],
              ['Power BI', 'Dashboards, KPI y métricas', 'PBI', 'powerbi'],
              ['Copilot', 'Análisis inteligente y resúmenes', 'C', 'copilot'],
            ].map(([name, description, abbreviation, type]) => (
              <label className="report-source-item" key={name}>
                <input
                  type="checkbox"
                  checked={selectedSources.includes(name)}
                  onChange={() => toggleSource(name)}
                />

                <span className={`report-source-logo ${type}`}>
                  {type === 'copilot' ? (
                    <CopilotLogo />
                  ) : (
                    abbreviation
                  )}
                </span>

                <span className="report-source-copy">
                  <strong>{name}</strong>
                  <small>{description}</small>
                </span>
              </label>
            ))}
          </div>

          <label className="report-control">
            <span>Módulo o tabla</span>
            <select defaultValue="Órdenes de Trabajo">
              <option>Órdenes de Trabajo</option>
              <option>Actividades</option>
              <option>Equipos</option>
              <option>Materiales</option>
            </select>
          </label>

          <div className="report-fields">
            <span className="report-control-label">Campos para incluir</span>

            <div className="report-field-chips">
              {fields.map((field) => (
                <button
                  className="report-field-chip"
                  type="button"
                  key={field}
                  onClick={() => removeField(field)}
                  title={`Quitar ${field}`}
                >
                  {field}
                  <span>×</span>
                </button>
              ))}
            </div>

            <button
              className="report-add-button"
              type="button"
              onClick={() =>
                setFields((current) =>
                  current.includes('Centro de costo')
                    ? current
                    : [...current, 'Centro de costo'],
                )
              }
            >
              + Agregar campo
            </button>
          </div>
        </aside>

        <aside className="report-column report-filter-column">
          <div className="report-section-heading">
            <h2>Filtros del reporte</h2>
          </div>

          <div className="report-date-range">
            <span className="report-control-label">Rango de fechas</span>
            <div>
              <input type="date" defaultValue="2024-06-01" />
              <span>al</span>
              <input type="date" defaultValue="2024-06-07" />
            </div>
          </div>

          {[
            ['Estado', ['Todos', 'Completada', 'En Proceso', 'Retrasada']],
            ['Área', ['Todas', 'Mantención', 'Operaciones', 'Proyectos', 'Servicios']],
            ['Prioridad', ['Todas', 'Alta', 'Media', 'Baja']],
            ['Responsable', ['Todos', 'Juan Pérez', 'María López', 'Carlos Silva']],
          ].map(([label, options]) => (
            <label className="report-control" key={label}>
              <span>{label}</span>
              <select defaultValue={options[0]}>
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          ))}

          <button className="report-add-button" type="button">
            + Agregar filtro
          </button>
        </aside>

        <section className="report-preview-column">
          <div className="report-preview-header">
            <h2>Vista previa del reporte</h2>
            <span>Datos actualizados: hace 2 min&nbsp; ↻</span>
          </div>

          <div className="report-kpis">
            {[
              ['128', 'Órdenes totales', '▲ 15% vs período anterior', 'blue', IconCalendarEvent],
              ['96', 'Completadas', '▼ 75% del total', 'green', IconFileCheck],
              ['25', 'En proceso', '▼ 20% del total', 'yellow', IconClock],
              ['7', 'Retrasadas', '▲ 5% del total', 'red', IconAlertTriangle],
            ].map(([value, label, trend, color, ReportIcon]) => (
              <article className="report-kpi" key={label}>
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
                <ReportIcon className={color} size={23} stroke={1.8} />
                <small className={color}>{trend}</small>
              </article>
            ))}
          </div>

          <div className="report-chart-grid">
            <article className="report-preview-card">
              <h3>Órdenes por estado</h3>

              <div className="report-status-chart">
                <div className="report-donut">
                  <span />
                </div>

                <div className="report-donut-legend">
                  <div>
                    <span className="report-legend-dot completed" />
                    <span>Completadas</span>
                    <strong>96 (75%)</strong>
                  </div>
                  <div>
                    <span className="report-legend-dot process" />
                    <span>En proceso</span>
                    <strong>25 (20%)</strong>
                  </div>
                  <div>
                    <span className="report-legend-dot delayed" />
                    <span>Retrasadas</span>
                    <strong>7 (5%)</strong>
                  </div>
                </div>
              </div>
            </article>

            <article className="report-preview-card">
              <h3>Órdenes por área</h3>

              <div className="report-area-chart">
                <div className="report-chart-lines" aria-hidden="true" />

                {reportAreaBars.map((bar) => (
                  <div className="report-area-bar" key={bar.label}>
                    <strong>{bar.value}</strong>
                    <span
                      className="report-area-fill"
                      style={{ height: `${(bar.value / 40) * 100}%` }}
                    />
                    <small>{bar.label}</small>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="report-preview-card report-detail-card">
            <h3>Detalle de órdenes</h3>

            <div className="report-table-scroll">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>ID Orden</th>
                    <th>Descripción</th>
                    <th>Área</th>
                    <th>Estado</th>
                    <th>Prioridad</th>
                    <th>Responsable</th>
                    <th>Fecha inicio</th>
                    <th>Fecha fin</th>
                    <th>Costo total</th>
                  </tr>
                </thead>

                <tbody>
                  {reportOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.description}</td>
                      <td>{order.area}</td>
                      <td>
                        <span
                          className={`report-table-status ${order.status
                            .toLowerCase()
                            .replace(' ', '-')}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`report-priority ${order.priority.toLowerCase()}`}
                        >
                          {order.priority}
                        </span>
                      </td>
                      <td>{order.responsible}</td>
                      <td>{order.start}</td>
                      <td>{order.end}</td>
                      <td>{order.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="report-table-footer">
              <span>Mostrando 1 a 5 de 128 órdenes</span>
              <div>
                <button type="button">‹</button>
                <button className="active" type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <span>…</span>
                <button type="button">26</button>
                <button type="button">›</button>
              </div>
            </div>
          </article>
        </section>

        <aside className="report-actions-column">
          <article className="report-side-card">
            <h2>Generar reporte</h2>

            <span className="report-control-label">Formato de exportación</span>
            <div className="report-export-types">
              {['PDF', 'Excel', 'CSV'].map((type) => (
                <button
                  className={exportType === type ? 'active' : ''}
                  type="button"
                  key={type}
                  onClick={() => setExportType(type)}
                >
                  <span className={`report-file-icon ${type.toLowerCase()}`}>
                    {type === 'Excel' ? 'XLS' : type}
                  </span>
                  {type}
                </button>
              ))}
            </div>

            <ReportToggle
              label="Incluir gráficos"
              checked={includeCharts}
              onChange={setIncludeCharts}
            />

            <ReportToggle
              label="Incluir detalle"
              checked={includeDetail}
              onChange={setIncludeDetail}
            />

            <button className="report-primary-button" type="button">
              <IconDownload size={17} stroke={1.8} />
              Generar reporte
            </button>
          </article>

          <article className="report-side-card">
            <h2>Programar reporte</h2>

            <label className="report-control">
              <span>Frecuencia</span>
              <select defaultValue="Semanal">
                <option>Diaria</option>
                <option>Semanal</option>
                <option>Mensual</option>
              </select>
            </label>

            <div className="report-schedule-row">
              <label className="report-control">
                <span>Día</span>
                <select defaultValue="Lunes">
                  <option>Lunes</option>
                  <option>Martes</option>
                  <option>Miércoles</option>
                  <option>Jueves</option>
                  <option>Viernes</option>
                </select>
              </label>

              <label className="report-control">
                <span>Hora</span>
                <input type="time" defaultValue="08:00" />
              </label>
            </div>

            <label className="report-control">
              <span>Enviar a</span>
              <input type="email" defaultValue="correo@empresa.cl" />
            </label>

            <button className="report-secondary-button" type="button">
              <IconCalendarEvent size={17} stroke={1.8} />
              Programar reporte
            </button>
          </article>
        </aside>
      </div>

      <section className="report-copilot-insights">
        <div className="report-copilot-intro">
          <CopilotLogo />
          <div>
            <strong>Análisis con Copilot</strong>
            <span>Insights y resúmenes inteligentes de tus datos.</span>
          </div>
        </div>

        <div className="report-insight-card">
          El 75% de las órdenes fueron completadas. Mantención concentra el mayor
          número de órdenes.
        </div>

        <div className="report-insight-card">
          Los costos totales aumentaron un 12% respecto al período anterior.
        </div>

        <div className="report-insight-card">
          Se detectaron 7 órdenes retrasadas que requieren atención.
        </div>

        <button
          className="report-copilot-button"
          type="button"
          onClick={() => {
            const event = new CustomEvent('open-connectcon-copilot')
            window.dispatchEvent(event)
          }}
        >
          <CopilotLogo />
          Generar resumen con Copilot
        </button>
      </section>
    </section>
  )
}



export default GenerateReportPage