# Agrarspace

![workflow](https://github.com/penhersky/agrarspace-api/actions/workflows/ci.yml/badge.svg) ![GitHub package.json version](https://img.shields.io/github/package-json/v/penhersky/agrarspace-api) ![GitHub](https://img.shields.io/github/license/penhersky/agrarspace-api)

### Agricultural platform for balancing and comparing annual crop yields

![](https://storage.pixteller.com/designs/designs-images/2021-11-07/02/agrarspace-v1-1-6187c189b6c83.png)

![](https://cdn.pixabay.com/photo/2021/08/09/17/08/combine-harvester-6533855_960_720.jpg)

#### Technology

- TypeScript
- Koa
- Apollo-server-koa
- Sequelize
- PostgreSQL

### Usage

```
npm install
```

#### create .env file

- NODE_ENV
- PORT
- LOG_LEVEL

- DB_USER
- DB_PASSWORD
- DB_DEV_NAME
- DB_LOCAL_NAME
- DB_TEST_NAME
- DB_PROD_NAME
- DB_HOST

- JWT_SECRET - password salt (default 10)

- PASSWORD_SALT

- TEXT_PASS - password for test users (default 12345@A)

#### Migrate database tables

```
npm run migrate:local
```

#### Fill the database with test data

```
npm run seed:local
```

#### Run app for development

```
npm run dev
```
