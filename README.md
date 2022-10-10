# dog-adopters <img src="public/dog_feet_logo.png" width=100px height=100px align="right">

### This is a server side project, it's a part of fullstack project, which done with high strictness under the guidance of best practices and standards, a lot of work that summarize my knowladge about <br />

---

This server side project stores data in the database and makes it accessible with REST APIs, that are written in _NodeJS and typescript_ language, with _express ts_ for the server. <br /> <br />
The project includes the following APIs :

<table>
    <tr>
        <th>
            For authentication and users
        </th>
        <th>
            For dogs data
        </th>
    </tr>
    <tr>
        <td style="display: flex;"> 
            <ul> 
                <li>Register user</li>
                <li>Login user</li>
                <li>Logout user</li>
                <li>Get user by id</li>
                    <p>Authentication is required</p>
            </ul>
        </td>
        <td> 
            <ul>
                <li>Get dog by id</li>
                <li>Get dog list by query filters and sortable data</li>
                    <p style="margin: 0;">- Authentication is required</p>
                    <p>- Pagination included in the response</p>
                <li>Create new dog</li>
                    <p style="margin: 0;">- Authentication is required</p>
                    <p>- Automatic assign owner id from the authenticated user</p>
                <li>Update exists dog data</li>
                    <p style="margin: 0;">- Authentication is required</p>
                    <p>- Only owner allowed to operate</p>
                <li>Delete exists dog</li>
                    <p style="margin: 0;">- Authentication is required</p>
                    <p>- Only owner allowed to operate</p>
            </ul>
        </td>
    </tr>
</table>

### The project also have swagger APIs docs at <br /> `http://localhost:3000/swagger` <br />

For all the REST APIs described above

**NOTE:**
some apis require authentication, thats why there is a cookie field called "connect.sid" that you can collect from : <br />
`Dev-tools > Application > Cookies > localhost > connect.sid` <br />
than paste inside the relevant place in swagger.
![how to find connect.sid](/public/gif-cookie-swagger.gif) <br />
//switch gif to real running of app

---

### **Running the project :**

**Requirements**

-   _NodeJS_ version 18.1+
-   _MongoDB service_ version 6.0.1+

**Command lines**

-   **The command to run the project**
    -   `npm run start`<br /> (runs migration, build of typescript, and runs the JS compiled project)
-   Optional other commands
    -   `npm run migrationDB`
        <br />(runs only migration)
    -   `npm run dev`<br /> (runs _typescript_ code for developement with _nodemon_)
    -   `npm run test`<br /> (runs only tests with _jest_ + _supertest_ for APIs tests)

---

### Technologies that i used for the project:

-   [x] _*Nodejs*_ : the project based on JS.
-   [x] _Express_ : used for the server side routers, middlewares controllers, and services.
-   [x] _Typescript_ : the project have written in _typescript_ interfaces, d.ts declarations files , etc..
-   [x] _DotEnv_ : used dot env files for local and test environments, and used _dotenv-expand_ for more flexible variables.
-   [x] _Passport_ : authentication with _passport-local_ strategy ({username, password} for request body.
-   [x] _MongoDB_ : _mongoose_ for ORM _mongoDB_ with schemas and models that used in the controllers and services.
-   [x] _Bcrypt_ : crypted the users passwords for best data secure and by the guidance of best practice.
-   [x] _Swagger_ : in the /swagger url you get a full api-docs and information to use the system for testing and debugging apis, that allowed to use only in non-production environments (developement uses) also used _mongoose-to-swagger_ to make mongoose model into swagger schema docs.
-   [x] _swagger-jsdocs_ : i have used _jsDocs_ for the swagger docs.
-   [x] _mongo-migrate_ : the migrations are for _mongodb_ that make sure _mongodb_ have latest updates of the data before running the project and creating necessary initialization of the database (such as create admin user, and 30 mocked dogs).

### Extra technologies i been using for development tools:

-   [x] _nodemon_ : watch and compile any changes for _typescript_ files.
-   [x] _prettier_ : fix annotation and organized code by standard with _prettier_ watcher.
-   [x] _Jest_ : made _typescript tests_ with almost full coverage for crypt user password, models, services, and router apis with _supertest_ package.
-   [x] _mongodb-memory-server_ : tests _mongodb_ service on memory for tests that raise with each test.

### Another features i been using in this project:

-   [x] aggregations : i made a full aggregate request that filters dogs by query which populate dogs by owner and limit/offset data, than sort option results.

-   [x] server side pagination : i made a pagination to the data of aggregation's result that fetch limited data by page number and total items per page (which also are parameters inside the api).

-   [x] _passport_ authentication : authenticate user by compare crypted password with user plaintext password request by the bast practice guidance.
-   [x] override toJSON function by removing the password from user returned toJSON object.
-   [x] _mongoose_ schema hooks: use pre save hook that crypt the user password before creating user (update user data not applied).
-   [x] status code : returns a correct status code for http requests responses.
-   [x] _jest_ : i have tests setup that covered all the services and functions of this project.
-   [x] _postman_ : exported postman collection for _postman_ software :
        //todo: add the exported updated collection for this rest api.
-   [x] _swagger_ styling : override _swagger_ styles with custom _css_: `public/swagger.css` .
