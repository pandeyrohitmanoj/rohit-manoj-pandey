# Use a Node.js base image
FROM node:18-alpine as builder

ENV NEXT_PUBLIC_EMAILJS="MQBRvZaBn7mdQUqXM"
ENV NEXT_PUBLIC_SERVICE_ID="service_u8z52da"
ENV NEXT_PUBLIC_TEMPLATE_KEY="template_czlfb6e"
ENV NEXT_PUBLIC_EMAIL="rohitpandey20002017@gmail.com"

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller production image
FROM node:18-alpine

# Copy the built files from the builder stage
COPY --from=builder /app/out /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Expose the default port (3000)
EXPOSE 3000

# Start the Next.js production server
CMD ["node", "server.js"]