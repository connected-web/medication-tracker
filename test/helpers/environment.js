const port = 14500
const environments = {
  dev: {
    name: 'DEV',
    port,
    serviceUrl: `http://localhost:${port}/`
  },
  production: {
    name: 'PRODUCTION',
    serviceUrl: 'https://connected-web.github.io/medication-tracker/'
  }
}

module.exports = environments[process.env.NODE_ENV || 'dev']
