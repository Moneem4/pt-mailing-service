require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const SERVER_PORT = process.env.PORT || 5000;

/**
 * Import typeDefs and resolvers definition.
 */
const typeDefs = require('./src/graphql/typedefs/index');
const resolvers = require('./src/graphql/resolvers/index');

/**
 * API mapping.
 */
const routes = require('./src/routes/ApiRouter');

(async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
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
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());

    await server.start();
    server.applyMiddleware({ app });

    await new Promise(resolve => app.listen({ port: SERVER_PORT }, resolve));
    console.log(`🚀 Server ready at ${process.env.APP_URL}:${SERVER_PORT}`);
    console.log(`🚀 Server GraphQl ready at ${process.env.APP_URL}:${SERVER_PORT}${process.env.GRAPHQL_PATH}`);
})();