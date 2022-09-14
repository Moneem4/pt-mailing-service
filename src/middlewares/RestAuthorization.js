const RestAuthorization = (req, res, next) => {
    console.log('AUTHORIZED')
    next()
}

module.exports = { RestAuthorization };