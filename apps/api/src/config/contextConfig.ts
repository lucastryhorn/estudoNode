import { ContextParameters } from 'graphql-yoga/dist/types'
import { models as db } from '../models'
import { Context } from '../types'
import { pubsub } from '.'
import { createLoaders } from '../loaders'

const context = (ctx: ContextParameters): Context => {
  const loaders = createLoaders(['Product', 'Order'])

  return {
    ...ctx,
    authUser: null,
    db,
    loaders,
    pubsub,
  }
}

export { context }
