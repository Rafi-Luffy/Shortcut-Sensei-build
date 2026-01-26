# Multi-stage Docker build for Shortcut Sensei

# Stage 1: Build the frontend
FROM node:18-alpine AS frontend-build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Build the backend
FROM node:18-alpine AS backend-build

WORKDIR /app/backend

# Copy backend package files
COPY backend/package*.json ./

# Install backend dependencies
RUN npm ci --only=production

# Copy backend source
COPY backend/ .

# Stage 3: Production image
FROM node:18-alpine AS production

# Install nginx for serving static files
RUN apk add --no-cache nginx

# Create app directory
WORKDIR /app

# Copy built frontend from stage 1
COPY --from=frontend-build /app/build ./frontend

# Copy backend from stage 2
COPY --from=backend-build /app/backend ./backend

# Copy nginx configuration
COPY render/nginx.conf /etc/nginx/nginx.conf

# Create nginx user and directories
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    mkdir -p /var/log/nginx /var/cache/nginx /tmp/nginx && \
    chown -R nextjs:nodejs /var/log/nginx /var/cache/nginx /tmp/nginx && \
    touch /var/run/nginx.pid && \
    chown nextjs:nodejs /var/run/nginx.pid

# Switch to non-root user
USER nextjs

# Expose ports
EXPOSE 3001 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Start both nginx and the backend
CMD ["sh", "-c", "nginx && cd backend && npm start"]