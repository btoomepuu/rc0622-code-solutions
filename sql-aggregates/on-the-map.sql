SELECT "countries"."name",
      COUNT("c") AS "numberOfCities"
FROM "countries"
JOIN "cities" AS "c" USING ("countryId")
GROUP BY "countryId"
ORDER BY "countries"."name";
