BEGIN;
DROP TABLE IF EXISTS users,
types,
brands,
cars,
rentals CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    phone INT
);
CREATE TABLE types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    image TEXT
);
CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    image TEXT
);
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    door INT,
    types_id INT REFERENCES types(id),
    brands_id INT REFERENCES brands(id),
    release_year INT,
    gearbox VARCHAR(100),
    price INT,
    seats INT,
    img_car TEXT,
    description TEXT,
    color VARCHAR(100)
);
CREATE TABLE rentals (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    cars_id INT REFERENCES cars(id),
    pick_up_date_time TIMESTAMP,
    pick_of_date_time TIMESTAMP,
    total_price INT
);
COMMIT;

