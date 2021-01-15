import { gql } from 'apollo-server-micro';
import db from './db.json';

// The statements within quotes are used by GraphQL to provide
// human readable descriptions to developers using the API
export const typeDefs = gql`
	type Beast {
		"ID of beast (taken from binomial initial)"
		id: ID
		"number of legs beast has"
		legs: Int
		"a beast's name in Latin"
		binomial: String
		"a beast's name to you and I"
		commonName: String
	}

	type Query {
		beasts: [Beast]
	}
`
export const resolvers = {
	Query: {
		// Returns array of all beasts.
		beasts: () => db.beasts,
	}
}
