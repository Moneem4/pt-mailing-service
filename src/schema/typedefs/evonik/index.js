const { gql } = require('apollo-server-express');
/**
 * Defining schemas: The Schema Definition Language
 */
const typeDefs = gql`
    type User @key(fields: "id") {
        id: ID!
        name: String!
        job: String!
    }
    input ContentDataInput {
        key: String!
        value: String!
    }
    input DynamicTemplateDataInput {
        subject: String!
        mainText: String!
        content: [ContentDataInput!]!
        textBeforeButton: String!
        buttonText: String!
        buttonUrl: String!
    }
    input NotifyAdminInput {
        version: String!
        dynamicTemplateData: DynamicTemplateDataInput!
    }
    type Result {
        success: Boolean
    }
    type Query {
        usersQuery: [User]
        _empty: String
    }
    type Mutation {
        notifyAdminMutation(notifyAdmin: NotifyAdminInput): Result
    }
`;

module.exports = { typeDefs };