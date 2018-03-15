# Atelier initiation AdonisJS par [Etienne Rouzeaud](https://medium.com/@etiennerouzeaud/)

## Pré-requis (Database)

Pour faire fonctionner cette app (résultat de l'atelier de Etienne), vous avez besoin de 2 bases de donnée PostgreSQL (une pour le dev et une pour les tests)

Afin de connecter les 2 bases, vous devez créer et renseigner 2 fichiers :

### .env

```shell
HOST=127.0.0.1
PORT=3333
APP_URL=http://${HOST}:${PORT}
NODE_ENV=development
CACHE_VIEWS=false
APP_KEY=trestessecretkeypourauthentification
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=VOTRE_DB_USER
DB_PASSWORD=VOTRE_DB_PWD
DB_DATABASE=VOTRE_DB_NAME
```

### .env.testing

```shell
HOST=127.0.0.1
PORT=4000
NODE_ENV=testing
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=VOTRE_DB_USER
DB_PASSWORD=VOTRE_DB_PWD
DB_DATABASE=VOTRE_DB_NAME_DE_TEST
```

## Setup

`$ npm i -g @adonisjs/cli`

`$ npm install`

`$ adonis migration:run`

## Start

`$ adonis serve dev`

## Test

`$ adonis test`

---

## Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
