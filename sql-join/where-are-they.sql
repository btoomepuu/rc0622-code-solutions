SELECT "line1",
       "district",
       "cities"."name" AS "city",
       "countries"."name" AS "country"
FROM "addresses"
JOIN "cities" USING ("cityId")
JOIN "countries" USING ("countryId");
