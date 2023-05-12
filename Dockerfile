FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
RUN npm install

# Bundle app source
COPY ./src ./src

# Runs the dev npm script to build & start the server
CMD npm run dev
