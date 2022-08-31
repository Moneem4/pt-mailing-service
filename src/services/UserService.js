const axios = require('axios');

const UserService = {
    async getUsers(req, res) {
        try {
            const body =  {
                query: `
                query {
                    users {
                      id
                      name
                      job
                    }
               }
            `,
                variables: {}
            }
            const options = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await axios.post(`${process.env.APP_URL}:${process.env.PORT}${process.env.GRAPHQL_PATH}`, body, options);
            res.send(response.data.data);
        } catch (error) {
            res.send(error.message);
        }
    }
}

module.exports = UserService;