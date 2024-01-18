FROM node:20.10-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
COPY .next ./.next

EXPOSE 3000
CMD ["npm", "start"]
