const users = [
    { id: 1, name: 'Federico', job: 'Fullstack Developer' },
    { id: 2, name: 'Sandeep', job: 'Backend Developer' },
    { id: 3, name: 'Touqeer', job: 'Blockchain Developer' },
    { id: 4, name: 'Vikas', job: 'Site Strategist' },
]

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        users: () => users,
        queryExample: (parent, args, context) => {
            return {
                message: "This is the message from the query resolver.",
            };
        },
    },
    Mutation: {
        createUser: (_, newUser) => {
            console.log('new user', newUser);
            users.push(newUser.user);
            console.log('users', users)
            let result = {
                success: true,
            }
            return result;
        },
    },
};

module.exports = resolvers;