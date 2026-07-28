![CONNECTCON Logo](./src/assets/logoConnectConV2.png)
# CONNECTCON

CONNECTCON es un prototipo web desarrollado con React y Vite que representa una plataforma de integración entre sistemas empresariales.

Su objetivo es centralizar la información proveniente de distintas aplicaciones en una única interfaz, facilitando el seguimiento de órdenes de trabajo, actividades, reportes e indicadores para apoyar la toma de decisiones.

> **Nota:** Este repositorio corresponde únicamente a un prototipo visual (Frontend) desarrollado con fines académicos. No incluye backend, base de datos ni integración con servicios reales.

## Tecnologías

- React
- Vite
- JavaScript
- CSS
- Tabler Icons
- Docker
- Docker Compose
- Nginx

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/betra0/connectCon.git
```

Ingresa al proyecto:

```bash
cd connectCon
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

## Ejecutar con Docker

```bash
docker compose up -d --build
```

La aplicación quedará disponible en:

```
http://localhost:18473
```

## Comandos

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run preview
```

Visualiza la versión compilada.

```bash
npm run lint
```

Ejecuta ESLint.

## Funcionalidades

- Dashboard principal
- Gestión visual de órdenes de trabajo
- Seguimiento de actividades
- Centro de integración
- Reportes e indicadores
- Panel de alertas
- Copilot integrado
- Diseño responsive

## Estado del proyecto

CONNECTCON es un prototipo desarrollado para un proyecto universitario. La aplicación implementa únicamente la interfaz de usuario para representar el funcionamiento de la plataforma, por lo que la información mostrada es estática y no existe conexión con sistemas externos o APIs.

## Autor

Proyecto desarrollado por el equipo **CONNECTCON** con fines académicos.