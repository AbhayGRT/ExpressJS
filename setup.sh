#!/bin/bash

sudo apt update
# Install npm
sudo apt install npm -y

# Initialize Node.js project
npm init -y

# Install Express.js
npm install express

# Run the server
node server.js
