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
const integrationHealth = [
  ['Máximo Mobile', 'maximo', '99.9%'],
  ['SAP', 'sap', '99.8%'],
  ['Power BI', 'powerbi', '99.9%'],
  ['Copilot', 'copilot', '99.7%'],
]
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

export default IntegrationCenterPage