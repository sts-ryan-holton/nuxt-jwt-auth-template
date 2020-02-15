#!/usr/bin/env sh

# abort on errors
set -e


# API
#
# Setup our API

# get to API directory!
cd api

# prepare .env
mv .env.example .env && git checkout .env.example

# install dependencies
composer install


# API
#
# Setup our API

# get to Client directory!
cd ../client

# prepare .env
mv .env.example .env && git checkout .env.example

# install dependencies
npm install

# build the project
npm run build


# Status
#
# Tell the user what to do from here...

echo "=== API -- Add the following to your API's .env's APP_KEY variable ==="
php -r "echo md5(uniqid()).\"\n\";"
echo "=== API -- Configure your database and add your credentials to the .env ==="
echo "=== Client -- Configure your API endpoint in the .env's AUTH_API variable, by default it should be: http:localhost:8000/ ==="
echo "=== General -- After migrations and server start, view your clien't front-end!! ==="
