import { GraphQLServer } from 'graphql-yoga'
import { resolve } from 'path'

const typeDefs = resolve(__dirname, 'schema.graphql')

const USERS = [
  { id: 1, name: 'Lucas Camargo', email: 'hual' },
  { id: 2, name: 'RONALDo', email: 'gogo@hotmail' },
]

const resolvers = {
  User: {
    name: (parent): string => {
      return 'huaç' + parent.name
    },
  },
  Query: {
    users: (): typeof USERS => USERS,
  },
  Mutation: {
    createUser: (parent, args, ctx, info): typeof USERS[0] => {
      const { data } = args
      const user = {
        ...data,
        id: USERS.length + 1,
      }
      USERS.push(user)
      return user
    },
  },
}

const server = new GraphQLServer({
  resolvers,
  typeDefs,
})

export default server
