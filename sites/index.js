import customDotenv from '../lib/customDotenv'
import test from './test'
import netflix from './netflix'
import youtube from './youtube'

customDotenv()

module.exports = [
  netflix,
  youtube,
  test
]