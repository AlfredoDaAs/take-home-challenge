# Take Home Challenge

Users API with a CRUD endpoints

## Badges

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/AlfredoDaAs/take-home-challenge/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/AlfredoDaAs/take-home-challenge/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/AlfredoDaAs/take-home-challenge/badge.svg?branch=main)](https://coveralls.io/github/AlfredoDaAs/take-home-challenge?branch=main)

## Features

- Create new users with their Pokemon IDs
- Get Users list
- Get User by ID and also return pokemons with id and name from Poke API
- Update User
- Delete User

## Pre Requisites

- Docker installed without sudo permission
- Docker compose installed without sudo
- ports free: 3000 and 5432

## How to run the App

```
chmod 711 ./up_dev.sh
./up_dev.sh
```

## How to run the tests

```
chmod 711 ./up_test.sh
./up_test.sh
```

## Areas to improve

- Improve tests structure for data and functions for init app and close app
- Error handling could be improved.
- Adding more swagger response status to api endpoints
- A seed migration could be usefull to have an already working app with data
- The ORM is being used with synchronize instead of migrations, Migrations could be the best option.

## Errors to be fixed

TBD

## Techs

- Nest: 12.0.1
- Node: 24.14.1
- TypeORM: 1.1.1
- Postgres: 8.23.0

## Decisions made

- Clean Architecture: To be able to handle further changes in the future in a proper way.
- TypeORM: Because it is already integrated ORM in the Nest js Framework and it is the most popupar ORM, so it is easy to find fixes and support.
- Docker: To make it portable.
- Vitest/Testing/E2E: Vitest a popular testing framework with integration with Nest js Framework. E2E testing was done because it is useless to test every single function or part of the code. That's why if the controller provide the proper answer the test has passed.

## Routes

- : [API Swagger](https://localhost:300/api)

## Env vars should be defined

To find an example of the values you can use .env.example