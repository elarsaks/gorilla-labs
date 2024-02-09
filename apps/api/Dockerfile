# Builder Stage
FROM node:20.10-alpine as builder
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --silent
COPY . .
RUN npm run build

# Production Stage
FROM node:20.10-alpine
WORKDIR /app
COPY --from=builder /app/.build ./build  
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 4000
CMD ["node", "build/index.js"]