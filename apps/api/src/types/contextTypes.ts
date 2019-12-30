import { AuthUser, Models, DataLoaders } from '.'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { RedisPubSub } from 'graphql-redis-subscriptions'

export interface Context extends ContextParameters {
  authUser: AuthUser
  db: Models
  loaders: DataLoaders
  pubsub: RedisPubSub
}
