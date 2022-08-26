SELECT "name",
        COUNT("g") AS "total"
FROM "actors" AS "a"
JOIN "castMembers" AS "cm" USING ("actorId")
JOIN "filmGenre" USING ("filmId")
JOIN "genres" as "g" USING ("genreId")
WHERE "a"."firstName" = 'Lisa'
      and "a"."lastName" = 'Monroe'
GROUP BY ("genreId");
