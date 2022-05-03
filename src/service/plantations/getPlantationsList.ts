// SELECT plantation."id",
// 		plantation."status",
// 		plantation."areaSize",
// 		year."plantedArea",
// 		plantation."region",
// 		culture."id" as culture_id,
// 		culture."name" as culture_name,
// 		plantation."updatedAt"
//       FROM plantation
//       INNER JOIN year ON plantation.id = year."plantationId"
// 	  INNER JOIN culture ON culture.id = year."cultureId"
// 	  WHERE plantation."organizationId" = 25
// 	  	AND plantation."areaSize" > 0 AND plantation."areaSize" < 1000
// 	  	AND year."plantedArea" > 0 AND year."plantedArea" < 1000
// 		AND culture."id" = 325
// 		AND plantation."status" IS NULL
// 	  LIMIT 10;

// SELECT MAX("areaSize"),
// 		MIN("areaSize"),
// 		MAX("plantedArea"),
// 		MIN("plantedArea")
// 			FROM (SELECT plantation."id",
// 				plantation."status",
// 				plantation."areaSize",
// 				year."plantedArea",
// 				plantation."region",
// 				culture."id" as culture_id,
// 				culture."name" as culture_name,
// 				plantation."updatedAt"
// 			  FROM plantation
// 			  INNER JOIN year ON plantation.id = year."plantationId"
// 			  INNER JOIN culture ON culture.id = year."cultureId"
// 	  WHERE plantation."organizationId" = 25
// 	  	  AND plantation."areaSize" > 0 AND plantation."areaSize" < 1000
// 				AND year."plantedArea" > 0 AND year."plantedArea" < 1000
// 				AND culture."id" = 325
// 				AND plantation."status" IS NULL
// 		LIMIT 10) as Temp;

// SELECT status
// 			FROM (SELECT plantation."id",
// 				plantation."status",
// 				plantation."areaSize",
// 				year."plantedArea",
// 				plantation."region",
// 				culture."id" as culture_id,
// 				culture."name" as culture_name,
// 				plantation."updatedAt"
// 			  FROM plantation
// 			  INNER JOIN year ON plantation.id = year."plantationId"
// 			  INNER JOIN culture ON culture.id = year."cultureId"
// 	  WHERE plantation."organizationId" = 25
// 	  	  AND plantation."areaSize" > 0 AND plantation."areaSize" < 1000
// 				AND year."plantedArea" > 0 AND year."plantedArea" < 1000
// 				AND culture."id" = 325
// 		LIMIT 10) as Temp
// 		GROUP BY status;

// SELECT culture_id, culture_name
// 			FROM (SELECT plantation."id",
// 				plantation."status",
// 				plantation."areaSize",
// 				year."plantedArea",
// 				plantation."region",
// 				culture."id" as culture_id,
// 				culture."name" as culture_name,
// 				plantation."updatedAt"
// 			  FROM plantation
// 			  INNER JOIN year ON plantation.id = year."plantationId"
// 			  INNER JOIN culture ON culture.id = year."cultureId"
// 	  WHERE plantation."organizationId" = 25
// 	  	  AND plantation."areaSize" > 0 AND plantation."areaSize" < 1000
// 				AND year."plantedArea" > 0 AND year."plantedArea" < 1000
// 				AND plantation."status" IS NULL
// 		LIMIT 10) as Temp
// 		GROUP BY culture_id, culture_name;
