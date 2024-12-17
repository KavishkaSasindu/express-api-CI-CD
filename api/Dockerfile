#import base image
FROM node:22-alpine

#create working directory
WORKDIR /app

#copy package files
COPY package*.json ./

#install dependencies
RUN npm install

#copy project files
COPY . . 

#expose port
EXPOSE 5000

#start the app
CMD [ "npm", "start" ]