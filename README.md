# dog-adapters <img src="public/dog_feet_logo.png" width=100px height=100px align="right">

## This project have vision of **creating better world for us and our dogs** by creating platform that allow people to adopt "homeless" dogs that are looking for true love.

---

In order to create this project i used some packages as you can see :

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

available operations in my app:

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
