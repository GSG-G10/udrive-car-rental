# Udrive

## [Live Demo](https://udrive-car-rental.herokuapp.com/) 📺

## Problem
The user lacks knowledge of how to rent the right car for him and also know the full details of the car like the best price, color, type, brand, and maybe he dont know about anything about the cars.
## Solution 💡
Use technology to create a smooth and tidy system, as well as employ its advantages in durability by creating a web application to provide the specific requirements including the reservation form and database history for each user and the car he rented while providing some features that facilitate the user's use of the site as a filter and search by time and date and also According to the type of car, we give the user an easy-to-use site that can rent the car with full details of it quite easily.

## User Journey  ✏️
The user see list of cars, brand cars and types, he can choose a car to rent, edit the rent or delete it, and he can add his review after he finish his renting and see all his rental car.

## User Stories 📋
**AS a User:**
1.  I want to be able sign in/up and logout the site.
1.  I can see all cars and it's information(type/colors/discription/number)
1.  I want to be able filter cars by price and search about specific car.
1.  I want to be able rent any car I want.
1.  I want to be able see all cars I rented it before.
1.  I want to be able delete pending car for him.
1.  I want to be able edit pending car for him.

**AS an Admin**
1. I want to be able sign in/up and logout the site.
1. I want to be able to add new car to site.
1. I want to be able to see pendding car.
1. I want to be able to delete any car.
1. I want to be able to edit to any car details.
1. I want to be able to add type of cars.
1. I want to be able to add brand of cars.





## Prototype
#### [Our Prototype](https://www.figma.com/file/uaDPvk625l6HhLg69qnOvk/Car-rental?node-id=1%3A2) 
[![](https://i.imgur.com/H5OBdpv.png)](https://www.figma.com/file/uaDPvk625l6HhLg69qnOvk/Car-rental?node-id=1%3A2)

## DB schema
![](https://i.imgur.com/KJrULPZ.png)

## Technologies 💻:-
**BackEnd**: Node JS & Express JS.
**FrontEnd**: React JS,Material Ui.
**Database**: PostgreSQL.

## How to Launch App Locally
 * clone this repo by typing this command in the terminal:
 ```git clone https://github.com/GSG-G10/udrive-car-rental.git```
* Run `npm i` to install the packages for the app as general.
* Run `cd client` and `npm i` to install the packages for the client- React Js.
### Database Setup 📋
* Make sure you have installed PostgreSQL and pgcli
```
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
* Test DB:
 Do the same as before but make sure to change the names.
* Run the following command in the database pgcli terminal
`\i server/database/config/build.sql` .


### Start the App :-
To start the App Locally you can start the server First then start client-side or vice versa!

To run Server, In your terminal Type:

* `npm run dev` then you should be able to go to [localhost](http://localhost:5000/) 
 To run client-side, In your terminal Type:
* `cd client` => `npm start` then you will be able to run [localhost](http://localhost:3000/) 
Now you can view the app live in the Browser!

## Team Members :busts_in_silhouette::-
1.  Asmaa Alnajjar
2.  Ahmad Abo Abadi
3.  Rawand Jaradh
4.  Abdallah Abu Amra
## Resources :-
* [Node Js](https://nodejs.org/en/)
* [React Js](https://docs.retool.com/docs?_keyword=react%20js&adgroupid=128852669435&utm_source=google&utm_medium=search&utm_campaign=14877543325&utm_term=react%20js&utm_content=550425168395&hsa_acc=7420316652&hsa_cam=14877543325&hsa_grp=128852669435&hsa_ad=550425168395&hsa_src=g&hsa_tgt=aud-917062731253:kwd-354476686967&hsa_kw=react%20js&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwn8SLBhAyEiwAHNTJbXUVHzWY75yJO7v8Of_mWoeT4CATwwRs_j32u9XDKNmCDVmCKsJ-whoCerAQAvD_BwE)
* [Express](https://expressjs.com/)
* [Postgress](https://www.postgresql.org/docs/)
* [Material Ui](https://mui.com/)