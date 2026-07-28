# Etapa 1: compilar la aplicación React/Vite
FROM node:22-alpine AS builder

WORKDIR /app

# Copiamos primero los archivos de dependencias para aprovechar la caché.
COPY package.json package-lock.json ./

RUN npm ci

# Copiamos el resto del proyecto y generamos la versión de producción.
COPY . .

RUN npm run build


# Etapa 2: servir los archivos estáticos con Nginx
FROM nginx:1.27-alpine

# Eliminamos la configuración predeterminada.
RUN rm /etc/nginx/conf.d/default.conf

# Configuración para una SPA.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos la aplicación compilada.
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
