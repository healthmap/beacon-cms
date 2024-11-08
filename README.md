# beacon-content-manager-intneral

## Content Management - STRAPI

### Postgres

* Install Postgres on your machine (If you haven't already)
* Run `psql postgres`
* Run `\du` to display the list of users
* You can create a user here and use the newly created user while setting up Strapi or go with default 'postgres' user
* Run `Create database beaconcms;` to create a database
* RUN `Grant all privileges on database beaconcms to postgres;`

* If you are running the project on Docker, please create a user, database and grant privileges using the following...

```
    CREATE USER postgres;
    CREATE DATABASE beaconcms;
    GRANT ALL PRIVILEGES ON DATABASE beaconcms TO postgres;

```

### Strapi setup
* Make sure the NODE version is up-to-date
* Run `nvm list`
* You should see the list of NODE versions (If you manage Node using NVM)

   ![](./beaconcms/images/nvmlist.png)

* NOTE: Strapi can ONLY be installed within an EMPTY folder
* Run `npm create strapi-app beaconcms`

   ![](./beaconcms/images/strapi_setup_1.png)

* Above assumes that we chose Postgres instead of standard SQLITE DB that comes with Strapi
* You can SKIP the login or setup an account via the terminal itself
* Once the above is done, run `npm run develop`

   ![](./beaconcms/images/strapi_setup_2.png)

* 

### Access Strapi Swagger documentation
* Navigate to `http://localhost:1337/documentation/v1.0.0#/`
* You will see the swagger documentation
* Note: for this to work, we would need to install a plugin -> `npm install @strapi/plugin-documentation`