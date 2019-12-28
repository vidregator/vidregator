import redis from 'redis'
import { promisify } from 'util'

const redisEnabled = process.env.REDIS_CACHE_HOST && process.env.REDIS_CACHE_PORT && process.env.REDIS_CACHE_PASSWORD
const client = redisEnabled && redis.createClient({
  host: process.env.REDIS_CACHE_HOST,
  port: process.env.REDIS_CACHE_PORT,
  password: process.env.REDIS_CACHE_PASSWORD
})

export const get = redisEnabled ? promisify(client.get).bind(client) : () => {}
export const set = redisEnabled ?  promisify(client.set).bind(client) : () => {}