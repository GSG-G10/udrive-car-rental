BEGIN;
DROP TABLE IF EXISTS users, types, brands, cars, rentals, reviews CASCADE;

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
    image TEXT,
    icon TEXT
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
    type_id INT REFERENCES types(id) ON UPDATE CASCADE ON DELETE CASCADE,
    brand_id INT REFERENCES brands(id) ON UPDATE CASCADE ON DELETE CASCADE,
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
    user_id INT REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    car_id INT REFERENCES cars(id) ON UPDATE CASCADE ON DELETE CASCADE,
    location TEXT,
    pick_up_date_time TIMESTAMPTZ,
    pick_off_date_time TIMESTAMPTZ,
    total_price DECIMAL
);
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    review TEXT,
    rental_id INT REFERENCES rentals(id) ON UPDATE CASCADE ON DELETE CASCADE,
    rate FLOAT
);
COMMIT;

