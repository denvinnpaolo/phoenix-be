Project Phoenix: Ouro 
--------------------------------------------

API Deployed at
---------------------------------------------


Librarys Used 
---------------------------------------------
- BcyrptJs - Hashes passwords to s btore safely in your database. 
- CORS - Middleware that configures the Access-Control-Allow-Origin. 
- Cross-env - Runs scripts that set and use environment variables across platforms.
- Dotenv - Loads environment variables from a .env file into process.env. 
- Express - Fast, unopinionated, minimalist web framework for Node.js.
- Helmet - Secures your Express.js apps by setting various HTTP headers.
- JsonWebToken - Allows you to generate, verify and decode tokens for authorization. 
- Knex - A multi-dialect query builder for Node.js.
- Knex-Cleaner - Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex. Great for integration tests.
- Sqlite3 - Relational database management system (RDBMS).


Auth Endpoints
--------------------------------------------

| Table    |  Method   |  Endpoint | Required Fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| users    |  Get     | /users      |                     |Returns ALL the users in users database |
| users    | Post     | /login    | email, password | Fetches user information if credentials inputted is in the database      |
| users|  Post     | /register | company_name, company_size, type,  | Creates a new user profile, returns the username , id, type and a jsonwebtoken in the body of the response|
| operator or diner    |  Post     | api/login | username, password, typee |Uses the username and passowrd sent up to verify the user, if they match, returns the username , id, type and a jsonwebtoken in the body of the response|

Status Codes

- 200 - If you successfully register or log in a user the endpoint will return a response with a status code 200.
- 201 - If you have successfully created a content in a 
- 422 - If you are missing a required field the endpoint will return a response with a status code 422.
- 401 - If you attempt to login with a username or password that does not match what the system has the endpoint will return a response with a status code 401.
- 500 - If there is a server error, the endpoint will return a response with a status code 500.



