SELECT "customerId",
      "firstName",
      "lastName",
       SUM("payments"."amount") AS "rentalTotal"
FROM "payments"
JOIN "customers" USING ("customerId")
GROUP BY "customerId"
ORDER BY "rentalTotal" DESC;
