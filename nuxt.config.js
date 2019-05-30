import pkg from './package'
import generators from './assets/content/generators.json'
require('dotenv').config()

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: 'https://res.cloudinary.com/codotype/image/upload/v1552257221/codotype-icons/favicon.png' }]
  },

  // Generate static pages for all generators
  // Must be done because generator routes are dynamic
  // Doc: https://nuxtjs.org/api/configuration-generate
  generate: {
    routes: generators.map(g => '/generators/' + g.id)
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/sass/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/contentful.js',
    '~/plugins/fontawesome.js',
    '~/plugins/jsonld.js',
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/hotjar.js', ssr: false },
    { src: '~plugins/mailchimp.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://www.npmjs.com/package/vue-github-buttons#using-with-nuxt
    'vue-github-buttons/nuxt',
  ],

  // Bootstrap vue configuration
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },

  // Environment variable configuration
  // Doc: https://nuxtjs.org/api/configuration-env
  env: {
    HOTJAR_SITE_ID: process.env.HOTJAR_SITE_ID ? Number(process.env.HOTJAR_SITE_ID) : undefined,
    GA_TRACKING_ID: String(process.env.GA_TRACKING_ID),
    MAILCHIMP_BASE_URL: String(process.env.MAILCHIMP_BASE_URL),
    MAILCHIMP_UUID: String(process.env.MAILCHIMP_UUID),
    MAILCHIMP_LID: String(process.env.MAILCHIMP_LID),
    CODOTYPE_APP_HOST: String(process.env.CODOTYPE_APP_HOST) || 'http://localhost:8080',
    CTF_SPACE_ID: String(process.env.CTF_SPACE_ID),
    CTF_CDA_ACCESS_TOKEN: String(process.env.CTF_CDA_ACCESS_TOKEN),
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
