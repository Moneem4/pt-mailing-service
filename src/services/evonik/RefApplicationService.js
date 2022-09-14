/**
 * Import the utility AzureGraph
 */
const AzureGraph = require('../../utils/AzureGraph');
const reference = 'applications/';

/**
 * Is possible to define a list di calls async to retrieve the data from the reference name
 */
const getOwnersRoleAppAdmin = async (accessToken) => {
    const endpoint = `${reference}${process.env.AZURE_APPLICATION_ID}/owners`;
    return await AzureGraph.getApi(endpoint, accessToken)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        })
}

module.exports = { getOwnersRoleAppAdmin };