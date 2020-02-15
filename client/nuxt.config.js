require('dotenv').config();

export default {
  mode: 'spa',

  env: {
    AUTH_API: process.env.AUTH_API || "http://localhost:8000"
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },


  /*
  ** Global CSS
  */
  css: [
  ],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],


  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],


  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],


  /*
  ** Configure Auth Module
  */
  auth: {
    strategies: {
      local: {
        login: { url: 'login', method: 'post', propertyName: 'token' },
        logout: { url: 'logout', method: 'post' },
        user: { url: 'user', method: 'get', propertyName: 'user' }
      }
    }
  },


  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.AUTH_API
  },


  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },


    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
