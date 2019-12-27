import { AuthUser, Models } from '.'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { RedisPubSub } from 'graphql-redis-subscriptions'

export interface Context extends ContextParameters {
  authUser: AuthUser
  db: Models
  pubsub: RedisPubSub
}
