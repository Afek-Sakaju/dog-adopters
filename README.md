# dog-adapters <img src="public/dog_feet_logo.png" width=100px height=100px align="right">

## This project have vision of **creating better world for us and our dogs** by creating platform that allow people to adopt "homeless" dogs that are looking for true love.

---

In order to create this project i used some features like:

-best practice - in order to create high code quality that will be more understandable
-setting up backend server with express
-iv'e used mongodb and mongoose in order to create database which will include all the
dogs and users that created in my app
-in order to make a working system of user management such as registering new users
to the app\ log in\log out, i used package called passport with speciefic configuration
-in order to make sure that the app will be secure i used bcrypt, every time a new user
register to the system it hashes his plain text password and then save his data, which prevent
the passwords of the users from revealing by a harmful factor in case of the database getting
hijacked.
-in the login proccess our system uses bcrypt to compare the given password in order to
make sure that its the correct one, bcrypt have his own features to know if the plain text
is the real password even if its saved hashed in the database.
-in this project i realized that some data can be modified from time to time, such as : ip,port,ect.. so i used a packages called: dotenv + dotenv-expand in order to save this variables in
speciefic file and export them to the files that uses them, as you can see:
![dotenv saved variables file](/public/dotenv%20Scrnshot.PNG)
![dotenv configuration file](/public/dotenv%20config%20scrnshot.PNG)
![import variables from dotenv](/public/import%20from%20dotenv.PNG)

| packages-list         |  version |
| :-------------------- | -------: |
| express               | `4.18.1` |
| express-session       | `1.17.3` |
| body-parser           | `1.20.0` |
| path                  | `0.12.7` |
| passport              |  `0.6.0` |
| passport-local        |  `1.0.0` |
| dotenv                | `16.0.2` |
| dotenv-expand         |  `9.0.0` |
| bcrypt                |  `5.1.0` |
| mongoose              |  `6.5.5` |
| mongoose-to-swagger   |  `1.4.0` |
| mongodb-memory-server |  `8.9.3` |
| swagger-jsdoc         |  `6.2.5` |
| swagger-ui-express    |  `4.5.0` |
| typescript            |  `4.7.4` |
| ts-node               | `10.9.1` |
| ts-jest               | `29.0.2` |
| jest                  | `29.1.1` |
| supertest             |  `6.2.4` |
| prettier              |  `2.7.1` |
| nodemon               | `2.0.19` |

#### Available operations in my app:

-   Authentication
    -   Register user
    -   Log in
    -   Log out
    -   Find user by id (admin only)
-   Dogs data
    -   Find dog by his id
    -   Find custom dogs list by query
        -   Log in required
        -   Pagination included
    -   Create new dog
        -   Log in required
    -   Update exists dog data
        -   Log in required
        -   Only owner allowed to operate
    -   Delete exists dog
        -   Log in required
        -   Only admin allowed to operate
