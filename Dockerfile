# Use a Node.js base image
FROM node:18-alpine as builder

# Set environment variables
ENV NEXT_PUBLIC_EMAILJS="MQBRvZaBn7mdQUqXM"
ENV NEXT_PUBLIC_SERVICE_ID="service_u8z52da"
ENV NEXT_PUBLIC_TEMPLATE_KEY="template_czlfb6e"
ENV NEXT_PUBLIC_EMAIL="rohitpandey20002017@gmail.com"

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /usr/src/app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000

CMD ["npm", "start"]