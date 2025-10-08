FROM node:20-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies if needed
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 7777

# Start dev server with live reload
CMD ["npm", "run", "dev"]
