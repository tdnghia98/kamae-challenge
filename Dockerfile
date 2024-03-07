FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Set environment variable for the port
ENV PORT 5173 

# Expose the port
EXPOSE $PORT

# Start the app
CMD ["npm", "start"]