# Estágio de build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de desenvolvimento
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install  # Instala todas as dependências, incluindo as de desenvolvimento
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npx ts-node src/seed.ts && npm run start:dev"]
