const AzureAuthorization = (req, res, next) => {
    console.log('AUTHORIZED')
    next()
}

module.exports = AzureAuthorization;