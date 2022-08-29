const express = require('express');
const pg = require('pg');

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

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
      res.json('testing GET api/grade/:gradeId');
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT: 3000');
});
