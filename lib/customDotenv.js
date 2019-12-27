import fs from 'fs'

export default () => {
  const dotenv = fs.readFileSync(require.resolve('../.env'))
    .toString()
    .split('\n')
    .map((line) => line.split('='))

  for (let [ key, value ] of dotenv) {
    process.env[key] = value
  }
}