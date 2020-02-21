import express from 'express'
import bodyParser from 'body-parser'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

router.use(bodyParser())
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/auth', (req, res) => {
  req.session.auth = req.body.token
  return res.json({ ok: true, data: req.session.auth })
})

router.delete('/auth', (req, res) => {
  delete req.session.auth
  res.json({ ok: true })
})

// Export the server middleware
export default {
  path: '/session',
  handler: router
}
