FROM node:23-alpine

# Instala Chromium y dependencias para Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    bash \
    udev \
    dumb-init

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar resto de archivos
COPY . .

# Crear carpeta para sesión
RUN mkdir -p /app/session

# Puerto para Express
EXPOSE 3000

# Inicia la app
CMD ["dumb-init", "node", "bot.js"]
