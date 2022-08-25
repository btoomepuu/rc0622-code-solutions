SELECT "title",
       "genres"."name",
       "releaseYear"
FROM "films"
JOIN "filmGenre" USING ("filmId")
JOIN "genres" USING ("genreId")
WHERE "title" = 'Boogie Amelie';
