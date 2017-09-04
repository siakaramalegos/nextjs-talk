const express = require('express')
const next = require('next')

// Set dev to true if not production
const dev = process.env.NODE_ENV !== 'production'
// Tell next whether to run in dev mode
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/character/:id', (req, res) => {
    const pathname = '/character'
    const queryParams = { id: req.params.id }
    app.render(req, res, pathname, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
