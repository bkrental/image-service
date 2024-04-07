FROM node:18

# Install packages
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

# Copy the rest of the application
COPY . /app

# Expose the port the app runs on
EXPOSE 5002

# Serve the app
CMD ["npm", "start"]
