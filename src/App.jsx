import { useEffect, useState } from 'react'
import {
  IconAlertTriangle,
  IconBell,
  IconCalendarEvent,
  IconChartCovariate,
  IconChevronRight,
  IconClock,
  IconDownload,
  IconFileCheck,
  IconHome,
  IconInfoCircle,
  IconMenu2,
  IconQuestionMark,
  IconReportAnalytics,
  IconSend2,
  IconSettingsCode,
  IconUser,
  IconX,
} from '@tabler/icons-react'
import connectconLogo from './assets/logoConnectCon.png'
import copilotLogo from './assets/image.png'
import './index.css'

const menuItems = [
  { label: 'Inicio', icon: IconHome, active: true },
  { label: 'Órdenes de Trabajo', icon: IconCalendarEvent },
  { label: 'Actividades', icon: IconFileCheck },
  { label: 'Reportes', icon: IconReportAnalytics, expandable: true },
  { label: 'Dashboards', icon: IconChartCovariate },
  { label: 'Alertas', icon: IconBell },
  { label: 'Integraciones', icon: IconSettingsCode, expandable: true },
  { label: 'Configuración', icon: IconSettingsCode },
  { label: 'Usuarios', icon: IconUser },
]

const summaryCards = [
  {
    title: 'Órdenes de Trabajo',
    value: '128',
    trend: '▲ 15% vs ayer',
    trendType: 'positive',
    icon: IconCalendarEvent,
    iconType: 'blue',
  },
  {
    title: 'Actividades Completadas',
    value: '96',
    trend: '▲ 12% vs ayer',
    trendType: 'positive',
    icon: IconFileCheck,
    iconType: 'green',
  },
  {
    title: 'Órdenes en Proceso',
    value: '32',
    trend: '▼ 5% vs ayer',
    trendType: 'negative',
    icon: IconClock,
    iconType: 'yellow',
  },
  {
    title: 'Retrasos',
    value: '7',
    trend: '▲ 40% vs ayer',
    trendType: 'danger',
    icon: IconAlertTriangle,
    iconType: 'red',
  },
]

const activities = [
  {
    activity: 'Inspección de bomba',
    order: 'OT-10045',
    area: 'Mantención',
    status: 'Completada',
    statusClass: 'completed',
    date: '07-06-2024 09:15',
  },
  {
    activity: 'Cambio de filtro',
    order: 'OT-10046',
    area: 'Operaciones',
    status: 'Completada',
    statusClass: 'completed',
    date: '07-06-2024 08:45',
  },
  {
    activity: 'Revisión de válvula',
    order: 'OT-10047',
    area: 'Servicios',
    status: 'En Proceso',
    statusClass: 'in-progress',
    date: '07-06-2024 08:30',
  },
  {
    activity: 'Lubricación de motor',
    order: 'OT-10048',
    area: 'Mantención',
    status: 'Pendiente',
    statusClass: 'pending',
    date: '07-06-2024 08:10',
  },
]

const bars = [
  { area: 'Mantención', value: 45 },
  { area: 'Operaciones', value: 32 },
  { area: 'Proyectos', value: 18 },
  { area: 'Servicios', value: 16 },
  { area: 'Otros', value: 17 },
]

function CopilotLogo({ className = '' }) {
  return (
    <img
      className={`copilot-logo ${className}`}
      src={copilotLogo}
      alt="Copilot"
    />
  )
}


const reportSubpages = [
  'Dashboard de Reportes',
  'Reportes Generados',
  'Generar Reporte',
  'Programación de Reportes',
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



const integrationSubpages = ['Centro de Integración', 'Conectores']

const integrationActivity = [
  {
    time: '09:16:24',
    source: 'Máximo Mobile',
    sourceType: 'maximo',
    data: 'OT-10048 · Lubricación de motor',
    destination: 'SAP',
    destinationType: 'sap',
    status: 'Completado',
    detail: 'Costos y materiales actualizados',
    duration: '1,2 s',
  },
  {
    time: '09:15:58',
    source: 'SAP',
    sourceType: 'sap',
    data: 'OT-10048 · Datos financieros',
    destination: 'Power BI',
    destinationType: 'powerbi',
    status: 'Actualizado',
    detail: 'Dashboard de Mantención',
    duration: '0,8 s',
  },
  {
    time: '09:15:59',
    source: 'Power BI',
    sourceType: 'powerbi',
    data: 'KPI actualizados · 7 indicadores',
    destination: 'Copilot',
    destinationType: 'copilot',
    status: 'Resumen generado',
    detail: 'Informe diario generado',
    duration: '1,5 s',
  },
  {
    time: '09:15:30',
    source: 'Máximo Mobile',
    sourceType: 'maximo',
    data: 'OT-10047 · Revisión de válvula',
    destination: 'SAP',
    destinationType: 'sap',
    status: 'Completado',
    detail: 'Información sincronizada',
    duration: '1,1 s',
  },
  {
    time: '09:14:45',
    source: 'Máximo Mobile',
    sourceType: 'maximo',
    data: 'OT-10046 · Cambio de filtro',
    destination: 'SAP',
    destinationType: 'sap',
    status: 'Completado',
    detail: 'Costos y materiales actualizados',
    duration: '1,0 s',
  },
]

const integrationHealth = [
  ['Máximo Mobile', 'maximo', '99.9%'],
  ['SAP', 'sap', '99.8%'],
  ['Power BI', 'powerbi', '99.9%'],
  ['Copilot', 'copilot', '99.7%'],
]

function SystemLogo({ type, compact = false }) {
  if (type === 'copilot') {
    return <CopilotLogo className={compact ? 'compact' : ''} />
  }

  const labels = {
    maximo: 'M',
    connectcon: 'C',
    sap: 'SAP',
    powerbi: '▥',
  }

  return (
    <span
      className={`system-logo ${type}${compact ? ' compact' : ''}`}
      aria-hidden="true"
    >
      {labels[type]}
    </span>
  )
}

function ConnectedSystemsPanel() {
  return (
    <div className="connected-systems-panel">
      <h3>Sistemas conectados</h3>

      {integrationHealth.map(([name, type]) => (
        <div className="connected-system-row" key={name}>
          <SystemLogo type={type} compact />
          <span>{name}</span>
          <strong>Conectado</strong>
        </div>
      ))}
    </div>
  )
}

function IntegrationCenterPage() {
  const flowSystems = [
    {
      type: 'maximo',
      title: 'Máximo Mobile',
      subtitle: 'Órdenes, actividades, inspecciones y activos',
      status: 'Conectado',
    },
    {
      type: 'connectcon',
      title: 'CONNECTCON',
      subtitle: 'Validación, transformación y orquestación de datos',
      status: 'Operativo',
      featured: true,
    },
    {
      type: 'sap',
      title: 'SAP',
      subtitle: 'Costos, materiales, recursos y activos',
      status: 'Sincronizado',
    },
    {
      type: 'powerbi',
      title: 'Power BI',
      subtitle: 'Dashboards, KPI e indicadores',
      status: 'Actualizado',
    },
    {
      type: 'copilot',
      title: 'Copilot',
      subtitle: 'Resúmenes, alertas y análisis inteligente',
      status: 'Reportes disponibles',
    },
  ]

  return (
    <section className="integration-page">
      <div className="integration-heading">
        <h1>Centro de Integración</h1>
        <p>Monitorea el estado y flujo de integración entre todos los sistemas.</p>
      </div>

      <section className="integration-stats">
        <article className="integration-stat-card">
          <span className="integration-stat-icon blue">↻</span>
          <div>
            <small>Sincronizaciones hoy</small>
            <strong>1.284</strong>
            <p className="positive">▲ 18% vs ayer</p>
          </div>
        </article>

        <article className="integration-stat-card">
          <span className="integration-stat-icon purple">
            <IconClock size={28} stroke={1.8} />
          </span>
          <div>
            <small>Tiempo promedio de sincronización</small>
            <strong>1,8 s</strong>
            <p className="positive">▼ 0,4 s vs ayer</p>
          </div>
        </article>

        <article className="integration-stat-card">
          <span className="integration-stat-icon red">
            <IconAlertTriangle size={29} stroke={1.8} />
          </span>
          <div>
            <small>Errores de integración</small>
            <strong>0</strong>
            <p className="positive">✓ 100% sin errores</p>
          </div>
        </article>

        <article className="integration-stat-card last-sync">
          <span className="integration-stat-icon blue">
            <IconCalendarEvent size={29} stroke={1.8} />
          </span>
          <div>
            <small>Última sincronización</small>
            <strong>Hace 32 segundos</strong>
            <p>07-06-2024 09:16:24</p>
          </div>
        </article>
      </section>

      <article className="integration-flow-panel">
        <div className="integration-panel-title">
          <h2>Estado de integraciones en tiempo real</h2>
          <span className="live-indicator">
            <i />
            En línea
          </span>
        </div>

        <div className="integration-system-flow">
          {flowSystems.map((system, index) => (
            <div className="integration-flow-fragment" key={system.title}>
              <article
                className={`integration-system-card${
                  system.featured ? ' featured' : ''
                }`}
              >
                <h3>{system.title}</h3>

                <SystemLogo type={system.type} />

                <p>{system.subtitle}</p>

                <span className="system-status">
                  <i />
                  {system.status}
                </span>
              </article>

              {index < flowSystems.length - 1 && (
                <span className="integration-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="integration-feedback-line">
          <span>↳</span>
          <div />
          <strong>Retroalimentación y resumen automático</strong>
        </div>

        <div className="integration-legend">
          <span><b className="legend-arrow">→</b> Flujo de datos</span>
          <span><b className="legend-dashed">⇢</b> Retroalimentación</span>
          <span><i className="green" /> Conectado</span>
          <span><i className="yellow" /> Advertencia</span>
          <span><i className="red" /> Error</span>
        </div>
      </article>

      <section className="integration-bottom-grid">
        <article className="integration-activity-panel">
          <div className="integration-panel-title">
            <h2>Actividad reciente de integración</h2>
            <button type="button">Ver todas</button>
          </div>

          <div className="integration-table-scroll">
            <table className="integration-table">
              <thead>
                <tr>
                  <th>Hora</th>
                  <th>Sistema origen</th>
                  <th>Datos</th>
                  <th>Destino</th>
                  <th>Estado</th>
                  <th>Detalle</th>
                  <th>Duración</th>
                </tr>
              </thead>

              <tbody>
                {integrationActivity.map((row, index) => (
                  <tr key={`${row.time}-${index}`}>
                    <td>{row.time}</td>
                    <td>
                      <span className="integration-system-cell">
                        <SystemLogo type={row.sourceType} compact />
                        {row.source}
                      </span>
                    </td>
                    <td>{row.data}</td>
                    <td>
                      <span className="integration-system-cell">
                        <SystemLogo type={row.destinationType} compact />
                        {row.destination}
                      </span>
                    </td>
                    <td>
                      <span className="integration-success-status">
                        ✓ {row.status}
                      </span>
                    </td>
                    <td>{row.detail}</td>
                    <td>{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="integration-table-footer">
            <span>↻ Actualización automática cada 10 segundos</span>

            <div>
              <span>Mostrando 1 a 5 de 48 registros</span>
              <button type="button">‹</button>
              <button className="active" type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <span>…</span>
              <button type="button">10</button>
              <button type="button">›</button>
            </div>
          </div>
        </article>

        <aside className="integration-health-panel">
          <div className="integration-panel-title">
            <h2>Salud de integraciones</h2>
          </div>

          <div className="integration-health-list">
            {integrationHealth.map(([name, type, availability]) => (
              <div className="integration-health-item" key={name}>
                <div>
                  <span>
                    <SystemLogo type={type} compact />
                    {name}
                  </span>
                  <strong>{availability}</strong>
                </div>
                <div className="integration-health-track">
                  <span style={{ width: availability }} />
                </div>
              </div>
            ))}
          </div>

          <div className="integration-availability">
            <span>Disponibilidad general</span>
            <strong>99,8%</strong>
            <small>✓ Excelente</small>
          </div>
        </aside>
      </section>

      <section className="integration-security-strip">
        <span className="security-icon">
          <IconFileCheck size={22} stroke={2} />
        </span>

        <div>
          <strong>Integración segura y confiable</strong>
          <p>
            CONNECTCON utiliza conexiones seguras, autenticación por token y
            encripta la información en tránsito y reposo.
          </p>
        </div>

        <button type="button">
          <IconSettingsCode size={16} stroke={1.8} />
          Ver configuración de seguridad
        </button>
      </section>
    </section>
  )
}


function App() {
  const [currentPage, setCurrentPage] = useState('Inicio')
  const [reportsOpen, setReportsOpen] = useState(false)
  const [integrationsOpen, setIntegrationsOpen] = useState(false)
  const [copilotOpen, setCopilotOpen] = useState(false)

  useEffect(() => {
    const openCopilot = () => setCopilotOpen(true)
    window.addEventListener('open-connectcon-copilot', openCopilot)
    return () => window.removeEventListener('open-connectcon-copilot', openCopilot)
  }, [])

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand-area">
          <button className="top-icon-button" type="button" aria-label="Abrir menú">
            <IconMenu2 size={20} stroke={1.8} />
          </button>

          <img className="brand-logo" src={connectconLogo} alt="ConnectCon" />

          {currentPage === 'Generar Reporte' && (
            <div className="top-report-breadcrumb">
              <span>Reportes</span>
              <IconChevronRight size={14} stroke={1.8} />
              <strong>Generar Reporte</strong>
            </div>
          )}

          {currentPage === 'Centro de Integración' && (
            <div className="top-report-breadcrumb">
              <span>Integraciones</span>
              <IconChevronRight size={14} stroke={1.8} />
              <strong>Centro de Integración</strong>
            </div>
          )}
        </div>

        <div className="top-actions">
          <button className="top-icon-button notification-button" type="button" aria-label="Notificaciones">
            <IconBell size={20} stroke={1.8} />
            <span className="notification-badge">3</span>
          </button>

          <button className="top-icon-button" type="button" aria-label="Ayuda">
            <IconQuestionMark size={20} stroke={1.8} />
          </button>

          <div className="top-user">
            <div className="top-avatar">NM</div>
            <div className="top-user-copy">
              <strong>Nicolás Moreno</strong>
              <span>Administrador</span>
            </div>
          </div>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <nav className="sidebar-nav" aria-label="Navegación principal">
            {menuItems.map((item) => {
              const ItemIcon = item.icon
              const isReports = item.label === 'Reportes'
              const isIntegrations = item.label === 'Integraciones'
              const reportSectionActive =
                isReports && reportSubpages.includes(currentPage)
              const integrationSectionActive =
                isIntegrations && integrationSubpages.includes(currentPage)

              const isActive =
                isReports
                  ? reportSectionActive
                  : isIntegrations
                    ? integrationSectionActive
                    : currentPage === item.label

              const submenuOpen =
                isReports
                  ? reportsOpen
                  : isIntegrations
                    ? integrationsOpen
                    : false

              const handleItemClick = () => {
                if (isReports) {
                  setReportsOpen((open) => !open)

                  if (!reportSectionActive) {
                    setCurrentPage('Generar Reporte')
                  }

                  return
                }

                if (isIntegrations) {
                  setIntegrationsOpen((open) => !open)

                  if (!integrationSectionActive) {
                    setCurrentPage('Centro de Integración')
                  }

                  return
                }

                setCurrentPage(item.label)
              }

              return (
                <div className="nav-group" key={item.label}>
                  <button
                    className={`nav-link${isActive ? ' active' : ''}`}
                    type="button"
                    aria-current={isActive ? 'page' : undefined}
                    aria-expanded={item.expandable ? submenuOpen : undefined}
                    onClick={handleItemClick}
                  >
                    <ItemIcon size={18} stroke={1.8} />
                    <span>{item.label}</span>

                    {item.expandable && (
                      <IconChevronRight
                        className={`nav-chevron${submenuOpen ? ' open' : ''}`}
                        size={15}
                        stroke={1.8}
                      />
                    )}
                  </button>

                  {isReports && reportsOpen && (
                    <div className="report-submenu">
                      {reportSubpages.map((page) => (
                        <button
                          className={currentPage === page ? 'active' : ''}
                          type="button"
                          key={page}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                  )}

                  {isIntegrations && integrationsOpen && (
                    <div className="report-submenu">
                      {integrationSubpages.map((page) => (
                        <button
                          className={currentPage === page ? 'active' : ''}
                          type="button"
                          key={page}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {integrationSubpages.includes(currentPage) && (
            <>
              <ConnectedSystemsPanel />
              <div className="sidebar-version">
                <strong>CONNECTCON</strong>
                <span>v1.0.0</span>
              </div>
            </>
          )}
        </aside>

        <main
          className={`dashboard${
            currentPage === 'Generar Reporte'
              ? ' report-active'
              : currentPage === 'Centro de Integración'
                ? ' integration-active'
                : currentPage !== 'Inicio'
                  ? ' empty-page'
                  : ''
          }`}
        >
          {currentPage === 'Inicio' ? (
            <>
          <h1>Inicio</h1>

          <section className="summary-grid" aria-label="Resumen">
            {summaryCards.map((card) => {
              const CardIcon = card.icon

              return (
                <article className="summary-card" key={card.title}>
                  <div>
                    <p>{card.title}</p>
                    <strong>{card.value}</strong>
                    <small className={card.trendType}>{card.trend}</small>
                  </div>

                  <div className={`summary-icon ${card.iconType}`}>
                    <CardIcon size={27} stroke={1.8} />
                  </div>
                </article>
              )
            })}
          </section>

          <section className="charts-grid">
            <article className="panel state-panel">
              <div className="panel-title">
                <h2>Órdenes de Trabajo por Estado</h2>
              </div>

              <div className="state-chart-layout">
                <div className="donut-chart" aria-label="Gráfico circular de estados">
                  <div className="donut-hole" />
                </div>

                <div className="chart-legend">
                  <div>
                    <span className="legend-dot green" />
                    <span>Completadas</span>
                    <strong>96 (45%)</strong>
                  </div>
                  <div>
                    <span className="legend-dot yellow" />
                    <span>En Proceso</span>
                    <strong>32 (25%)</strong>
                  </div>
                  <div>
                    <span className="legend-dot blue" />
                    <span>Pendientes</span>
                    <strong>21 (16%)</strong>
                  </div>
                  <div>
                    <span className="legend-dot red" />
                    <span>Retrasadas</span>
                    <strong>7 (14%)</strong>
                  </div>
                </div>
              </div>
            </article>

            <article className="panel">
              <div className="panel-title">
                <h2>Órdenes por Área</h2>
              </div>

              <div className="bar-chart">
                <div className="y-axis">
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>

                <div className="bar-plot">
                  <div className="horizontal-lines" aria-hidden="true" />

                  {bars.map((bar) => (
                    <div className="bar-column" key={bar.area}>
                      <span className="bar-value">{bar.value}</span>
                      <div
                        className="bar-fill"
                        style={{ height: `${(bar.value / 60) * 100}%` }}
                        title={`${bar.area}: ${bar.value}`}
                      />
                      <span className="bar-label">{bar.area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <section className="bottom-grid">
            <article className="panel activity-panel">
              <div className="panel-title">
                <h2>Actividades Recientes</h2>
              </div>

              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Actividad</th>
                      <th>Orden</th>
                      <th>Área</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>

                  <tbody>
                    {activities.map((item) => (
                      <tr key={item.order}>
                        <td>{item.activity}</td>
                        <td>{item.order}</td>
                        <td>{item.area}</td>
                        <td>
                          <span className={`status ${item.statusClass}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="panel alerts-panel">
              <div className="panel-title">
                <h2>Alertas Activas</h2>
              </div>

              <div className="alert-row">
                <IconAlertTriangle className="alert-icon red" size={26} stroke={1.8} />
                <div className="alert-copy">
                  <strong>Orden OT-10030 retrasada</strong>
                  <span>Área: Mantención</span>
                </div>
                <time>Hace 25 min</time>
              </div>

              <div className="alert-row">
                <IconAlertTriangle className="alert-icon yellow" size={26} stroke={1.8} />
                <div className="alert-copy">
                  <strong>Stock bajo: Filtro de aceite</strong>
                  <span>Bodega: B1</span>
                </div>
                <time>Hace 1 hora</time>
              </div>

              <div className="alert-row">
                <IconInfoCircle className="alert-icon blue" size={26} stroke={1.8} />
                <div className="alert-copy">
                  <strong>Sincronización con SAP exitosa</strong>
                </div>
                <time>Hace 2 horas</time>
              </div>

              <button className="all-alerts-button" type="button">
                Ver todas las alertas
              </button>
            </article>
          </section>
            </>
          ) : currentPage === 'Generar Reporte' ? (
            <GenerateReportPage />
          ) : currentPage === 'Centro de Integración' ? (
            <IntegrationCenterPage />
          ) : (
            <section className="empty-window" aria-labelledby="current-page-title">
              <h1 id="current-page-title">{currentPage}</h1>
            </section>
          )}
        </main>

      </div>

      <button
        className="copilot-floating-button"
        type="button"
        aria-label="Abrir Copilot"
        aria-expanded={copilotOpen}
        onClick={() => setCopilotOpen(true)}
      >
        <CopilotLogo />
        <span className="copilot-online-dot" />
      </button>

      {copilotOpen && (
        <div
          className="copilot-overlay"
          role="presentation"
          onMouseDown={() => setCopilotOpen(false)}
        >
          <section
            className="copilot-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="copilot-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="copilot-header">
              <div className="copilot-heading">
                <CopilotLogo />
                <div>
                  <h2 id="copilot-title">Copilot</h2>
                  <span>Asistente de ConnectCon</span>
                </div>
              </div>

              <button
                className="copilot-close-button"
                type="button"
                aria-label="Cerrar Copilot"
                onClick={() => setCopilotOpen(false)}
              >
                <IconX size={18} stroke={2} />
              </button>
            </div>

            <div className="copilot-content">
              <div className="chat-row user-message">
                <div className="message-bubble">
                  Muéstrame un resumen de las órdenes de trabajo de esta semana
                </div>
              </div>

              <div className="chat-row assistant-message">
                <CopilotLogo />
                <div className="message-bubble">
                  Claro, aquí tienes un resumen de las órdenes de trabajo de esta semana.
                </div>
              </div>

              <article className="weekly-summary">
                <h3>Resumen semanal</h3>
                <p>01-06-2024 al 07-06-2024</p>

                <dl>
                  <div>
                    <dt>Órdenes totales</dt>
                    <dd>128</dd>
                  </div>
                  <div>
                    <dt>Completadas</dt>
                    <dd>96 (75%)</dd>
                  </div>
                  <div>
                    <dt>En Proceso</dt>
                    <dd>25 (19%)</dd>
                  </div>
                  <div>
                    <dt>Retrasadas</dt>
                    <dd>7 (6%)</dd>
                  </div>
                </dl>
              </article>

              <button className="pdf-button" type="button">
                <IconDownload size={18} stroke={1.8} />
                Generar reporte PDF
              </button>
            </div>

            <form
              className="copilot-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="text"
                placeholder="Pregunta algo..."
                aria-label="Pregunta a Copilot"
              />
              <button type="submit" aria-label="Enviar pregunta">
                <IconSend2 size={18} stroke={1.8} />
              </button>
            </form>
          </section>
        </div>
      )}

    </div>
  )
}

export default App