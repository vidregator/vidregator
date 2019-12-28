const dotEnvResult = require('dotenv').config()
if (dotEnvResult.error) throw dotEnvResult.error

module.exports = {
  env: {
    // Put any environment variables you want exposed to the client here
  }
}