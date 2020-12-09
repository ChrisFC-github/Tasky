// @ts-nocheck
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
// const { domain, audience } = require('../../.env');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://taskycalendar.us.auth0.com/.well-known/jwks.json`,
    }),

    audience: `https://tasky-api/`,
    issuer: `https://taskycalendar.us.auth0.com/`,
    algorithms: ['RS256'],
});

module.exports = {
    checkJwt,
};