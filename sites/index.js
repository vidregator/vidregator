// import customDotenv from '../lib/customDotenv'
import dotenv from 'dotenv'
import test from './test'
import netflix from './netflix'
import disneyPlus from './disneyPlus'
import youtube from './youtube'

dotenv.config()

module.exports = [
  netflix,
  disneyPlus,
  // youtube,
  // test
]