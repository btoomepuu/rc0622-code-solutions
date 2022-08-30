const nextId = 9;
const express = require('express');
const pg = require('pg');

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }

});

app.use(express.json());

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: 'grade id must be a positive integer'
    });
    return;
  }

  const sql = `
  select *
  from "grades"
  where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(results => {
      const grade = results.rows[0];

      if (!grade) {
        res.status(404).json({
          error: `no grade founf with ${gradeId}`
        });
        return;
      }

      res.json(grade);
    });
});

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql)
    .then(result => {
      result.rows.forEach(row => {
        gradeArray.push(row);

      });
      res.json(gradeArray);
    });
});

app.post('/api/grades', (req, res) => {
  req.body.gradeId = nextId;
  const sql = `
  INSERT INTO grades(gradeId, name, course, score)
        VALUES(req.body.gradeId, req.body.name, req.body.course, req.body.score)
  `;

  db.query(sql)
    .then(result => {
    });
  // nextId++;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT: 3000');
});
