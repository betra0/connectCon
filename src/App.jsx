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
import GenerateReportPage from './pages/GenerateReportPage'
import IntegrationCenterPage from './pages/IntegrationCenterPage'

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