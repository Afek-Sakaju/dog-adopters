# dog-adapters <img src="public/dog_feet_logo.png" width=100px height=100px align="right">

## This project have vision of **creating better world for us and our dogs** by creating platform that allow people to adopt "homeless" dogs that are looking for true love.

i wanted from the start to create this project in order to help people to find their best partner
to find a true friend, i have dog for over a year and he makes me really happy, when you play with your dog and have fun with him it makes all the problems disappeare from your mind.
thats why i want to help people who can adopt dog to have this happiness, also there are poor dogs
that dont have home, they are looking for family and they deserve it, so i really think that this project can make the world better place for humans and for the dogs around us.

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
-at the development of the project i created files of typescript that after that were compiled
to js, typescript allowed me to add another line of assurance to the project and to make sure
that there is no variables that defind with no use, to check that each variable have his own type
and that im using it the correct way, that way my project can have much less bugs.
![typescript file example](/public/ts%20Scrnshot.PNG)
-in this project i also used a lot of testing features and packages that allowed me
to cover system check as much as possible and to prevent bugs\unwanted procceces from happening
in my app, in order to do that i used: jest, supertest, mongodb-memory-server.
jest+supertest allowed me to run tests on the system outputs + to check every aspect of
functions\services\routes in my project, for example:
![example of test](/public/test%20scrnshot.PNG)
also the mongodb-memory-server allowes this tests to run on temporary mongodb data base
without modifying the app's original database.
-another package i used and find really helpful is swagger, this one allowed me to debug procceses
of my app like login\logout\creating new dog to the system\updating exists dog data, all of this in easy way, before that i was using postman which is really nice but not accessible and comfort
as swagger.
![swagger site](/public/swagger%201.PNG)
![swagger operation check](/public/swagger%202.PNG)

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
