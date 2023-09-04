FROM node:16

# create folder
RUN mkdir -p /app

# move to folder
WORKDIR /app

# copy package
COPY package*.json ./

# install dependencies
RUN npm install

# copy project
COPY . .

# port
EXPOSE 4000

# test
RUN npm run test

# build
RUN npm run build

# delete files
RUN rm -rf node_modules

# start app
ENTRYPOINT ["node", "dist/src/index.js"]