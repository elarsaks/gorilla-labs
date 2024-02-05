# Build Stage
FROM node:20.10-alpine as builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --silent

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Prune development dependencies to reduce image size
RUN npm prune --production

# Production Stage
FROM node:20.10-alpine
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/.next ./.next

# Copy only production node_modules
COPY --from=builder /app/node_modules ./node_modules

# Copy public directory and package.json for runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
