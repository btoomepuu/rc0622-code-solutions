require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  const sql = `
    select "username",
           "userId",
           "hashedPassword"
      from "users"
  `;
  db.query(sql)
    .then(result => {
      const user = result.rows.find(user => user.username === req.body.username);
      if (user === undefined) {
        throw new ClientError(401, 'invalid login');
      } else {
        argon2.verify(user.hashedPassword, req.body.password)
          .then(result => {
            if (result) {
              const payload = {
                userId: user.userId,
                username: user.username
              };
              const token = jwt.sign(payload, process.env.TOKEN_SECRET);
              const response = {
                token,
                user: payload
              };
              res.status(200).send(response);
            } else {
              throw new ClientError(401, 'invalid login');
            }
          })
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
