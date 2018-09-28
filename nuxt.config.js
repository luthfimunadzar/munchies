module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Munchies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sandwich.png' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Raleway:400,700,800' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Pacifico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  plugins: [
    {
      src: '~/plugins/vue-markdown.js',
      ssr: true,
    }
  ],

  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

