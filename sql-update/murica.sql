UPDATE "countries"
SET "name" = 'Murica'
WHERE "name" = 'Unites States'
RETURNING *;
