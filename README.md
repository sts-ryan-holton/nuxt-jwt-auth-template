# :key: Nuxt JS + Laravel Lumen JWT Auth Template

A quick, simple template to get up and running with authentication using Laravel Lumen and Nuxt JS

## :rocket: Demo

1. Clone this repo.
2. Run the following:

``` bash
# prepare the project
$ sudo ./prepare-demo.sh
```

### API

1. Setup an empty database for your API and configure database credentials inside of the API `.env` file.
2. Run the following from our API:

``` bash
# generate tables
$ cd api && php artisan migrate
```

### Launch the demo!

You'll need **two** terminals open:

**:rocket: API - Terminal #1**

``` bash
cd api && php -S localhost:8000 -t public
```

**:rocket: Client - Terminal #2**

``` bash
cd client && npm run start
```
