import { GraphQLServer } from 'graphql-yoga'
import { resolve } from 'path'
import { context } from './config'
import resolvers from './resolvers'
import { catchErrorsMiddleware } from './middlewares'
import { AuthDirective } from './directives'

const typeDefs = resolve(__dirname, 'schema.graphql')

const server = new GraphQLServer({
  resolvers,
  typeDefs,
  context,
  middlewares: [catchErrorsMiddleware],
  schemaDirectives: {
    auth: AuthDirective,
  },
})

export default server
