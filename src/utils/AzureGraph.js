const axios = require('axios');
const URL = 'https://graph.microsoft.com/v1.0/';

/**
 * Calls the endpoint with authorization bearer token.
 * @param {string} endpoint
 * @param {string} accessToken
 */
const AzureGraph = {
    async getApi(endpoint, accessToken) {
        const options = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        try {
            const response = await axios.get(`${URL}${endpoint}`, options);
            return response;
        } catch (error) {
            throw ({
                "status": error.response.status,
                "statusText": error.response.statusText,
                "message": error.message
            });
        }
    }
}

module.exports = AzureGraph;