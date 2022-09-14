const { getOwnersRoleAppAdmin } = require('../../../services/evonik/RefApplicationService');
const SendGridService = require('../../../services/SendGridService');

// This is a fake object
const users = [
    { id: 1, name: 'Federico', job: 'Fullstack Developer' },
    { id: 2, name: 'Sandeep', job: 'Backend Developer' },
    { id: 3, name: 'Touqeer', job: 'Blockchain Developer' },
    { id: 4, name: 'Vikas', job: 'Site Strategist' },
]

/**
 * Behaviour in a GraphQL server with resolvers
 */
const resolvers = {
    Query: {
        usersQuery: () => users
    },
    Mutation: {
        notifyAdminMutation: async (parent, args, context) => {
            let response = null;
            let accessToken = context.req.headers.accesstoken.replace(/\"/g, '');
            // Get owners from Azure Application (app-admin)
            const result = await getOwnersRoleAppAdmin(accessToken)
                .then((res) => {
                    response = res.data.value;
                    console.log(response);
                    return true;
                })
                .catch((error) => {
                    console.log(error)
                    return false;
                })
            if (result) {
                // Access the service for sending email
                SendGridService.sendTemplateEmail(args, response);
            }
            return {
                success: result
            };
        },


    }
};

module.exports = { resolvers };