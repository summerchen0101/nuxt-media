
let webpack = require('webpack');
require('dotenv').config()
module.exports = {
  router: {
    linkActiveClass: 'select'
  },
  mode: 'universal',
  loading: '~/components/Loading.vue',
  /*
  ** Headers of the page
  */
  head: {
    title: "抖影电影 DOING MOVIE",
    link: [
      {rel: "icon", type: "image/x-icon", href: "/images/favicon.png"},
      {rel: "stylesheet", href: "/bootstrap/css/bootstrap.css"},
      {rel: "stylesheet", href: "/fonts/font-awesome/css/font-awesome.css"},
      {rel: "stylesheet", href: "/fonts/webfonts/style.css"},
      {rel: "stylesheet", href: "/plugins/slick/slick.css"},
      {rel: "stylesheet", href: "/plugins/slick/slick-theme.css"},
      {rel: "stylesheet", href: "/plugins/fancyBox/jquery.fancybox.css"},
      {rel: "stylesheet", href: "/css/style.css"},
    ],
    script: [
      { type: 'text/javascript', src: '/plugins/jquery.min.js' },
      { type: 'text/javascript', src: '/bootstrap/js/bootstrap.min.js' },
      { type: 'text/javascript', src: '/plugins/modernizr.js' },
      { type: 'text/javascript', src: '/plugins/imgLiquid-min.js' },
      { type: 'text/javascript', src: '/plugins/fancyBox/jquery.fancybox.pack.js' },
      // { type: 'text/javascript', src: '/plugins/slick/slick.js' },
      // { type: 'text/javascript', src: '/js/script.js', defer: true }
    ]
    // changed (newInfo, addedTags, removedTags) {
    //   console.log('Metadata was updated!')
    // },
    // afterNavigation(metaInfo) {
    //   console.log("afterNavigation")
    // }
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#666' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/mixins',
    '@/plugins/jquery',
    '@/plugins/components',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.VUE_APP_API_PATH,
    withCredentials: true,
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    // vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
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
  },
}
