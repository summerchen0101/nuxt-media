import express from 'express'
import bodyParser from 'body-parser'
// import session from 'express-session'
// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

router.use(bodyParser())
// router.use(session({
//   secret: 'summer-is-cool',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 60000 }
// }))
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/auth', (req, res) => {
  console.log(req.body)
  req.session.auth = req.body.token
  return res.json({ ok: true, data: req.session.auth })
  // if (req.body.username === 'demo' && req.body.password === 'demo') {
  //   req.session.authUser = { username: 'demo' }
  //   return res.json({ username: 'demo' })
  // }
  // res.status(401).json({ message: 'Bad credentials' })
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
