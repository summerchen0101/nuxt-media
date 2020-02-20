/**
 * TODO: 加上element-ui 客製化色系
 * TODO: 加上vee-validate 做表單驗證
 */
require('dotenv').config()
const host = require('./config/host')
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  router: {
    linkActiveClass: 'select'
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '抖影电影 DOING MOVIE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: '/bootstrap/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/fonts/font-awesome/css/font-awesome.css' },
      { rel: 'stylesheet', href: '/fonts/webfonts/style.css' },
      { rel: 'stylesheet', href: '/plugins/slick/slick.css' },
      { rel: 'stylesheet', href: '/plugins/slick/slick-theme.css' },
      { rel: 'stylesheet', href: '/plugins/fancyBox/jquery.fancybox.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { type: 'text/javascript', src: '/plugins/jquery.min.js' },
      { type: 'text/javascript', src: '/bootstrap/js/bootstrap.min.js' },
      { type: 'text/javascript', src: '/plugins/modernizr.js' },
      { type: 'text/javascript', src: '/plugins/imgLiquid-min.js' },
      { type: 'text/javascript', src: '/plugins/fancyBox/jquery.fancybox.pack.js' },
      { type: 'text/javascript', src: '/plugins/slick/slick.js' },
      { type: 'text/javascript', src: '/js/script.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#666' },
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/vuex-persist', ssr: false },
    '@/plugins/vee-validate',
    '@/plugins/mixins',
    '@/plugins/components',
    '@/plugins/fetch',
    '@/plugins/apiHub'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: isDev ? '/api' : `http://${host.prefix}.${host[process.env.DEV_ENV]}`,
    withCredentials: true
  },
  proxy: isDev ? {
    '/api': {
      target: `http://${host.prefix}.${host[process.env.DEV_ENV]}`,
      pathRewrite: {
        '^/api': '/'
      }
    }
  } : {},
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  }
}
