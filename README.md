# dog-adopters <img src="public/dog_feet_logo.png" width=100px height=100px align="right">

### This is a project that i created in order to fill my portfolio, which done with high strictness under the guidance of best practice, and a lot of work that summarize my knowladge about <br /> the server side

---

This server side project stores data in the database and makes it accessible with rest apis, that are written in _NodeJS express_ language. <br /> <br />
The project includes the following apis :

-   Authentication
    -   Register user
    -   Log in user
    -   Log out user
    -   Find user by id
        -   Only admin allowed to operate
-   Dogs data
    -   Get dog by id
    -   Get custom dogs list by filter and sortable data
        -   Log in required
        -   Pagination included
    -   Create new dog
        -   Log in required
    -   Update exists dog data
        -   Log in required
        -   Only owner allowed to operate
    -   Delete exists dog
        -   Log in required
        -   Only owner allowed to operate

---

### The project also have swagger set up with full functioning on every api in the system.

**NOTE**
some apis require authentication, thats why there is a cookie field called "connect.sid" that you can collect from : Devtools > Application > Cookies > localhost > connect.sid <br />
than paste inside the relevant place in swagger.
![how to find connect.sid](/public/gif-cookie-swagger.gif) <br />

---

### **Running the project :**

**Requirements**

-   _NodeJS_ version 18.1+
-   _MongoDB service_ version 6.0.1+

**Steps**

-   **The command to run the project**
    -   `npm run start` (runs migration, build of typescript, and runs the JS compiled project)
-   Optional other commands
    -   `npm run migrationDB` (runs only migration)
    -   `npm run dev` (runs code for developement with nodemon)
    -   `npm run test` (runs only tests with jest and supertest)

---

### Technologies that i used for the project:

-   [x] _Nodejs_ : the project based on JS
-   [x] _Express_ : express used for the server side routers, middlewares controllers, and services
-   [x] _Typescript_ : the project have written in Typescript interfaces, d.ts declarations files , etc..
-   [x] _DotEnv_ : used dot env files for local and test environments, and used dotenv-expand for more flexible variables
-   [x] _Passport_ : authentication with passport-local strategy ({username, password} for request body
-   [x] _MongoDB_ : mongoose for ORM mongoDB with schemas and models that used in the controllers and services
-   [x] _Bcrypt_ : crypted the users passwords for best data secure and by best practice
-   [x] _Swagger_ : in the /swagger url you get a full api-docs and information to use the system for testing and debugging apis, that allowed to use only in non-production environments (developement uses) also used `mongoose-to-swagger` to make mongoose model into swagger schema docs.
-   [x] _swagger-jsdocs_ : i have used jsDocs for swagger docs
-   [x] _mongo-migrate_ : the migrations are for mongodb that make sure mongodb have latest updates of the data before running the project and creating necessary initialization of the database (such as create admin user, and 30 mocked dogs)

### Extra technologies i been using for development tools:

-   [x] _nodemon_ : watch and compile any changes for _typescript_ files
-   [x] _prettier_ : fix annotation and organized code by standard with prettier watcher
-   [x] _Jest_ : made _typescript tests_ with almost full coverage for crypt user password, models, services, and router apis with supertest npm package
-   [x] _mongodb-memory-server_ : for tests mongodb service on memory for tests that raise with each test.

### Another features i been using in this project:

-   [x] aggregations : i made a full aggregate request that filters dogs by query which populate dogs by owner and limit/offset data, than sort option results

-   [x] server side pagination : i made a pagination to the data of aggregation's result that fetch limited data by page number and total items per page (which also are parameters inside the api)

-   [x] passport authentication : authenticate user by compare crypted password with user plaintext password request by the bast practice
-   [x] override toJSON function by removing the password from user returned toJSON object
-   [x] mongoose schema hooks: use pre save hook that crypt the user password before creating user (update user data not applied)
-   [x] status code : returns a correct status code for http requests responses
-   [x] jest : i have tests setup that covered all the services and functions of this project
-   [x] postman : exported postman collection for postman software :`dog_adopters_rest_api.postman_collection.json`
-   [x] swagger styling : override swagger styles with custom css: `public/swagger.css`
