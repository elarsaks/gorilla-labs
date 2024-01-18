FROM node:20.10-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# TODO: This build is not really working (BUIL_ID issue with out host build)
RUN npm run build 
EXPOSE 3000
CMD ["npm", "start"]
