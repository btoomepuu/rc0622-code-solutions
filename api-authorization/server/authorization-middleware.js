const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  const token = req.get('x-access-token');

  if (!token) {
    throw new ClientError(401, 'authentication required');
  }

  const payload = jwt.verify(token, process.env.token.TOKEN_SECRET);
  req.user = payload;
  next();
}

module.exports = authorizationMiddleware;
