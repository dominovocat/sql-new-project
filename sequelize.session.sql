CREATE TABLE users(
  id serial PRIMARY KEY,
  firstname VARCHAR(32) NOT NULL,
  lastname VARCHAR(32) NOT NULL,
  email VARCHAR(32) UNIQUE NOT NULL,
  ismale BOOLEAN NOT NULL,
  dob DATE NOT NULL,
  height DECIMAL(3, 2) NOT NULL 
)

--@block
DELETE FROM "SequelizeMeta"
WHERE name = '20220624130132-create-user.js'