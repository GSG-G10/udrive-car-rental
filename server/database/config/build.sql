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
    is_admin BOOLEAN DEFAULT FALSE,
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
    id SERIAL PRIMARY KEY ,
    name VARCHAR(100) NOT NULL,
    door INT,
    types_id INT REFERENCES types(id) ON UPDATE CASCADE ON DELETE CASCADE,
    brands_id INT REFERENCES brands(id) ON UPDATE CASCADE ON DELETE CASCADE,
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
    users_id INT REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    cars_id INT REFERENCES cars(id) ON UPDATE CASCADE ON DELETE CASCADE,
    pick_up_date_time TIMESTAMPTZ,
    pick_of_date_time TIMESTAMPTZ,
    total_price INT
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment TEXT,
    rentals_id INT REFERENCES rentals(id) ON UPDATE CASCADE ON DELETE CASCADE,
    rate INT
);
COMMIT;

