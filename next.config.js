const dotEnvResult = require('dotenv').config()
if (dotEnvResult.error) throw dotEnvResult.error

module.exports = {
  env: {
    SITE_NAME: process.env.SITE_NAME
    // Put any environment variables you want exposed to the client here
  }
}