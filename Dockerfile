# Dockerfile

# Step 1: Use node as a build environment
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Step 2: Use nginx to serve the build files
FROM nginx:alpine

# Copy the build folder from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that the app will run on
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
