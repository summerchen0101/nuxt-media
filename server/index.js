const path = require('path')
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const serve = require('koa-static')
// const opn = require('opn')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(serve(path.join(__dirname, '/static')), '/static')

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  const url = `http://${host}:${port}`
  // opn(url, { app: 'google chrome' })
  consola.ready({
    message: `Server listening on ${url}`,
    badge: true
  })
}

start()
