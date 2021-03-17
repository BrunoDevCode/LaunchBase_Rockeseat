CREATE TABLE "costumers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "cpf" int NOT NULL,
  "order_id" int,
  "address_id" int NOT NULL
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text NOT NULL,
  "number" int NOT NULL,
  "neighborhood" text NOT NULL,
  "state" text NOT NULL
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "color" text,
  "plate" text,
  "state" int DEFAULT 1,
  "model_id" int NOT NULL
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text NOT NULL,
  "model" text,
  "quantity" int DEFAULT 0,
  "year" timestamp NOT NULL
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "phone" text NOT NULL,
  "email" text UNIQUE,
  "address_id" int NOT NULL
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "costumer_id" int NOT NULL,
  "agency_id" int NOT NULL,
  "car_id" int NOT NULL
);

ALTER TABLE "costumers" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "agencies" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("costumer_id") REFERENCES "costumers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");
