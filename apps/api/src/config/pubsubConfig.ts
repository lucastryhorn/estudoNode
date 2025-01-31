import { RedisPubSub } from 'graphql-redis-subscriptions'
import Redis, { RedisOptions } from 'ioredis'

const { REDIS_HOST = 'redis', REDIS_PORT = 6379, REDIS_PASSWORD } = process.env
const options: RedisOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT as number,
  password: REDIS_PASSWORD,
}

const publisher = new Redis(options)
const subscriber = new Redis(options)

const pubsub = new RedisPubSub({
  publisher,
  subscriber,
})

export { pubsub }
