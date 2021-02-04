# Use a LTS version of Node as a parent image
FROM node:lts-buster

# Set the working directory to /server
WORKDIR /server

# copy package.json & yarn.lock into the container at /server
COPY package*.json /server/
COPY yarn.lock /client/

# install dependencies
RUN yarn install

# Copy the current directory contents into the container at /server
COPY . /server/

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["yarn", "start"]
