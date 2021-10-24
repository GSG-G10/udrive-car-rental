BEGIN;
DROP TABLE IF EXISTS users, types, brands, cars, rentals CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    isAdmin BOOLEAN,
    phone int
);
CREATE TABLE types (
    id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 image text
);
CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 image text
);
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    door int,
     types_id int REFERENCES types(id),
     brands_id int REFERENCES brands(id),
     release_type int,
    gearbox VARCHAR(100),
    price  int,
    seats int,
    img_car text,
    description text,
    color VARCHAR(100)
);
CREATE TABLE rentals (
    id SERIAL PRIMARY KEY,
    users_id int REFERENCES users(id),
    cars_id   int REFERENCES cars(id),
    pick_up_date_time timestamp,
    pick_of_date_time timestamp,
    total_price int
);



COMMIT;