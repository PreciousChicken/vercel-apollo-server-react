import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro'
import { typeDefs, resolvers  } from './schema';

export default new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
}).createHandler({
    path: '/api/graphql',
})
