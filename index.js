require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const SERVER_PORT = process.env.PORT || 5000;

/**
 * Import typeDefs and resolvers definition.
 */
const { typeDefs } = require('./src/schema/typedefs/evonik');
const { resolvers } = require('./src/schema/resolvers/evonik');

/**
 * API mapping.
 */
const routes = require('./src/routes/RestApiRouter');

(async () => {
    const app = express();
    const server = new ApolloServer({
        // ApolloServer supports passing an array of DocumentNode along with a single
        // map of resolvers to build a schema.
        schema: buildSubgraphSchema({
            typeDefs,
            resolvers
        }),
        csrfPrevention: true,
        formatError: error => {
            return error
        },
        context: async ({ req, res }) => {
            const context = {
                req,
                res,
            };
            return context;
        },
    });

    app.use(routes);
    // Parse incoming request bodies in a middleware before handlers
    app.use(bodyParser.json());

    await server.start();
    server.applyMiddleware({ app });

    await new Promise(resolve => app.listen({ port: SERVER_PORT }, resolve));
    console.log(`🚀 Server GraphQl ready at ${process.env.APP_URL}:${SERVER_PORT}${process.env.GRAPHQL_PATH}`);
})();