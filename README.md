# dog-adopters <img src="public/dog_feet_logo.png" width=100px height=100px align="right">

## This is a project that i created in order to fill my portfolio, which done with high strictness under the guidance of best practice, and a lot of work that summarize my knowladge in the server side

The project is server side which store data in the database and makes it accessible with rest apis written in NodeJS express language

the project includes the following apis:
-create dog
-update dog
-get dog by id
-delete dog
-get dog list by filter and sortable data
-login user
-logout user
-get user data by user id
-create new user

The project also have swagger set up with full functioning on every api in the system
note\*- some apis require authentication to do, thats why there is a cookie field of "connect.sid" that you can collect from : Devtools > Application > Cookies > localhost > connect.sid
than paste it inside the relevant place in swagger

//todo: gif of swagger use .

Running the project:

requiremants:
-NodeJS version 18.1+
-MongoDB service version 6.0.1+

steps:
-npm run start (runs migration, build of typescript, and runs the JS compiled project)
(optional other commands):
-npm run migrationDB (run only migration)  
-npm run dev (run code for developement with nodemon)
-npm run test (run only tests with jest and supertest)

---

In order to create this project i used some features like:

Technologies:
-Nodejs : the project based on JS
-Express : express used for the server side routers, middlewares controllers, and services
-Typescript : the project have written in Typescript interfaces, d.ts declarations files , etc..
-DotEnv : used dot env files for local and test environments, and used dotenv-expand for more flexible variables
-Passport : authentication with passport-local strategy ({username, password} for request body
-MongoDB : mongoose for ORM mongoDB with schemas and models that used in the controllers and services
-Bcrypt : crypted the users passwords for best data secure and by best practice
-Swagger : in the /swagger url you get a full api-docs and information to use the system for testing and debugging apis, that allowed to use only in non-production environments (developement uses) also used `mongoose-to-swagger` to make mongoose model into swagger schema docs.
-swagger-jsdocs : i have used jsDocs for swagger docs
-mongo-migrate : the migrations are for mongodb that make sure mongodb have latest updates of the data before running the project and creating necessary initialization of the database (such as create admin user, and 30 mocked dogs)

extra technologies for dev tools :
-nodemon : watch and compile any changes for _typescript_ files
-prettier : fix annotation and organized code by standard with prettier watcher
-Jest : made _typescript tests_ with almost full _coverage_ for crypt user password, models, services, and router apis with supertest npm package
-mongodb-memory-server : for tests mongodb service on memory for tests that raise with each test.

another features i have used in this project:

-aggregations : i made a full aggregate request that filters dogs by query and populate dog's owner user names and limit/offset data and sort option results
//todo change or fix this

-server side pagination : i made a pagination to the data of aggregation's result that fetch limited data by page number and total items per page (which also are parameters inside the api)

-passport authentication : authenticate user by compare crypted password with user plaintext password request by the bast practice
-override toJSON function by removing the password from user returned toJSON object
-mongoose schema hooks: use pre save hook that crypt the user password before creating user (update user data not applied)
-status code : returns a correct status code for http requests responses
-jest : i have tests setup that covered all the services and functions of this project
-postman : exported postman collection for postman software :`dog_adopters_rest_api.postman_collection.json`
-swagger styling : override swagger styles with custom css: `public/swagger.css`

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
