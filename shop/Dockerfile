# Stage 1: Build the Angular application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application using a distroless image
FROM gcr.io/distroless/nodejs

# Set the working directory
WORKDIR /app

# Copy the built Angular application from the previous stage
COPY --from=build /app/dist /app

# Expose the port the app runs on
EXPOSE 4200

# Command to run the application
CMD ["server.ts"]
