# Use the official Node.js image as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server file, HTML file and QR scanner library
COPY server.js .
COPY index.html .
COPY qr-scanner.min.js .

# Expose port 3000
EXPOSE 3000

# Add a health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost:3000 || exit 1

# Start the Node.js server
CMD ["node", "server.js"]
