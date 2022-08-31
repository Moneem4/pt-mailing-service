const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Example {
        message: String
    }
    type User {
        id: Int!
        name: String
        job: String
    }
    input UserData {
        id: Int!
        name: String
        job: String
    }
    type Response {
        success: Boolean
    }
    
    type Query {
        hello: String
        users: [User]
        queryExample: Example
    }
    type Mutation {
        createUser(user: UserData): Response
    }
`;

module.exports = typeDefs;