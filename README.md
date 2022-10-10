# dog-adopters <img src="public/dog_feet_logo.png" width=100px height=100px align="right">

### This is a server side project, it's a part of fullstack project, which done with high strictness under the guidance of best practices and standards, a lot of work that summarize my knowladge about <br />

---

This server side project stores data in the database and makes it accessible with **REST APIs**, that are written in _NodeJS and typescript_ language, with _express ts_ for the server. <br /> <br />
The project includes the following APIs :

| For authentication and users        | For dogs data                                                  |
| ----------------------------------- | -------------------------------------------------------------- |
| + Register user                     | + Get dog by id                                                |
| + Login user                        | + Get dog list by query filters and sortable data              |
| + Logout user                       | &emsp; - Authentication is required                            |
| + Get user by id                    | &emsp; - Pagination included in the response                   |
| &emsp; - Authentication is required | + Create new dog                                               |
|                                     | &emsp; - Authentication is required                            |
|                                     | &emsp; - Automatic assign owner id from the authenticated user |
|                                     | + Update exists dog data                                       |
|                                     | &emsp; - Authentication is required                            |
|                                     | &emsp; - Only owner/admin allowed to operate                   |
|                                     | + Delete exists dog                                            |
|                                     | &emsp; - Only owner/admin allowed to operate                   |

### The project also have swagger APIs docs at <br /> `http://localhost:3000/swagger` <br />

For all the REST APIs described above

**NOTE:**
some apis require authentication, thats why there is a cookie field called "connect.sid" that you can collect from : <br />
`Dev-tools > Application > Cookies > localhost > connect.sid` <br />
than paste inside the relevant place in swagger.
![how to find connect.sid](/readme-resources/gif-cookie-swagger.gif) <br />

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

### Test Coverage:
![coverage test](/readme-resources/test-coverage.PNG)
---

### Technologies that i used for the project:

-   [x] _**Nodejs**_ : the project based on JS.
-   [x] _**Express**_ : used for the server side routers, middlewares controllers, and services.
-   [x] _**Typescript**_ : the project have written in _typescript_ interfaces, `<filenames>.d.ts` declarations files , etc..
-   [x] _**DotEnv**_ : used dot env files for local and test environments, and used _dotenv-expand_ for more flexible variables.
-   [x] _**Passport**_ : authentication with _passport-local_ strategy `{username, password}` for request body.
-   [x] _**MongoDB**_ : _**mongoose**_ for _mongoDB_ with schemas and models that used in the controllers and services.
-   [x] _**Bcrypt**_ : crypted the users passwords for best data secure and by the guidance of best practice.
-   [x] _**Swagger**_ : in the `/swagger` url you get a full api-docs and information to use the system for testing and debugging apis, that allowed to use only in non-production environments (developement uses) also used _**mongoose-to-swagger**_ to make mongoose model into swagger schema docs.
-   [x] _**swagger-jsdocs**_ : i have used _jsDocs_ for the swagger docs.
-   [x] _**mongo-migrate**_ : the **migrations** are for _mongodb_ that make sure _mongodb_ have latest updates of the data before running the project and creating necessary initialization of the database (such as create admin user, and 30 mocked dogs).

### Extra technologies i been using for development tools:

-   [x] _**nodemon**_ : watch and compile any changes for _typescript_ files.
-   [x] _**prettier**_ : fix annotation and organized code by standard with _prettier_ watcher.
-   [x] _**Jest**_ : made _typescript tests_ with almost full coverage for crypt user password, models, services, and router apis with _supertest_ package.
-   [x] _**mongodb-memory-server**_ : tests _mongodb_ service on memory for tests that raise with each test.

### Another features i been using in this project:

-   [x] **aggregations** : i made a full aggregate request that filters dogs by query which populate dogs by owner and limit/offset data, than sort option results.
-   [x] **server side pagination** : i made a pagination to the data of aggregation's result that fetch limited data by page number and total items per page (which also are parameters inside the api).<br />

    ```json
    {
    "pagination": {
        "totalItems": 487,
        "page": 5,
        "itemsPerPage": 20,
        "totalPages": 25
    },
    "data": [...]
    }
    ```

-   [x] **_passport_ authentication** : authenticate user by compare crypted password with user plaintext password request by the bast practice guidance.
-   [x] **override toJSON** : for removing the password from user returned toJSON object.
-   [x] **_mongoose_ schema hooks** : use pre save hook that crypt the user password before creating user (update user data not applied).
-   [x] **status code** : returns a correct status code for http requests responses.
-   [x] **_jest_** : i have tests setup that covered all the services and functions of this project.
-   [x] **_postman_** : exported postman collection for _postman_ software :
        `dog_adopters_rest_api.postman_collection.json`
-   [x] **_swagger_ styling** : override _swagger_ styles with custom _css_: `public/swagger.css` .
