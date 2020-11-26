# ResturantsWebsite

This repositiry contains the code of a website which displays some resturants along side with their info.

The application is 2 parts:
	-Backend using Java SpringBoot
	-Frontend using React js
	
	
	
To setup the project, you need to setup the database first. you can do that by ethier by using the database 
schema provided or by setting up your own database.

To create your database, first, you need to have postgresql install.
Then you need to create a database with the name: restaurantdb. you can use the following command:
CREATE DATABASE restaurantdb;

After that we run our backend program. When we run our backend, the tables of the database will be created if they werent 
already their.

To populate the restaurants table we need have a random UUID for the id attribute in the restaurants table. one way to do
that is to use the sql function "uuid_generate_v4()". To use this function you need first to create the proper extension
with following command: CREATE EXTENSION "uuid-ossp";
Concerning the pictures of the restaurants we are using a free hosting image hosting service to store our images. we uplaod 
our image to "https://imgbb.com/". After we upload our images, we will optain a direct link to each image. we will save these
links in the photo attribute of the restaurants table in our database.

These are the links we used in our database:
https://i.ibb.co/WyrkMDw/NoImage.jpg
https://i.ibb.co/bWDMm5b/Roadster-Diner.jpg
https://i.ibb.co/W62P0gM/Swiss-Butter.jpg
https://i.ibb.co/vktRkVV/The-BBQ-House.jpg
https://i.ibb.co/x2GXCcr/Tomatomatic.jpg
https://i.ibb.co/ctZnJBJ/Bou-Melhem.jpg
https://i.ibb.co/jk7nXTL/Chopsticks.jpg
https://i.ibb.co/HztCPHT/KFC.jpg
https://i.ibb.co/fXK1yJ2/La-Pizz-Aria.jpg
https://i.ibb.co/F7Kms9Y/Little-China.jpg
https://i.ibb.co/p17xQz0/Mr-Brown.jpg

If the restaurants has no image you can use the first link which contains an image of photo that says no image.

These are some sample insert statements you can use to populate the restaurants table:

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Tomatomatic','Italian',35000,'Hazmieh Baabda District',
'1544','https://i.ibb.co/x2GXCcr/Tomatomatic.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'La PizzAria','Italian',60000,'Gouraud Street, Gemmayze,
 Beirut District','01585586','https://i.ibb.co/fXK1yJ2/La-Pizz-Aria.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'KFC', 'American', 30000, 'Chiyah, Baabda District',
'1277','https://i.ibb.co/HztCPHT/KFC.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'The BBQ House', 'American', 50000, 'Deir El Nasra Street,
 Ashrafieh, Beirut District','01338060','https://i.ibb.co/vktRkVV/The-BBQ-House.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Mr. Brown', 'American', 30000, 'Istiklal Street, Ashrafieh,
 Beirut District','01205206','https://i.ibb.co/p17xQz0/Mr-Brown.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Murray', 'Lebanese', 65000, 'Restaurants Street, Antelias,
 Metn','04444213','https://i.ibb.co/ZmvrW4C/Murray.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Bou Melhem', 'Lebanese', 25000, 'Dimitri Hayek Street,
 Sin El Fil, Metn','01497666', 'https://i.ibb.co/ctZnJBJ/Bou-Melhem.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Little China', 'Chinese', 60000, 'Monot Street, Ashrafieh,
 Beirut District','01497666','https://i.ibb.co/F7Kms9Y/Little-China.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Chopsticks', 'Chinese', 50000, 'Main Street, Facing Saroulla Center',
'01335334','https://i.ibb.co/jk7nXTL/Chopsticks.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Swiss Butter', 'French', 80000, 'Gouraud Street, Near Police Station,
 Gemmayze, Beirut District','01444480','https://i.ibb.co/W62P0gM/Swiss-Butter.jpg');

INSERT INTO restaurants(id, name, type, cost_for_two, address, phone_nb, photo)
VALUES (uuid_generate_v4(),'Roadster Diner', 'American', 60000, 'Uruguay Street, Downtown,
 Beirut District','1585','https://i.ibb.co/bWDMm5b/Roadster-Diner.jpg');


The visits table must be populated by the website. When we click the visit restaurant button, a 
row will be added to the visits table, with proper ids and the current dates. However, you can populate 
the visits table using sql insert statements too.

The following is an example commad to add a row to the visits table. However, you must make sure the 
restaurant_id attribute and the id attribute are equale and reffer to a valid restaurant in the 
database.

INSERT INTO  visits (vid, visit_date, restaurant_id,id)
VALUES(uuid_generate_v4(),'2020-11-22','c3cbae6e-03b8-48c8-bc27-8e73f06163b3','c3cbae6e-03b8-48c8-bc27-8e73f06163b3');
















