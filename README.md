# Pathfolio

## Description

An AI-powered portfolio management system

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Features

1. **Project Module:** This module contains the resume *Projects* domain as well as it use cases and other features. The current iteration of the module can allow a registered professional add a new `project` item to their resume or profile by receiving data from an existing user-inputted resume as a PDF or DOCX file, to add to the professional's profile, build one based on input from a user-facing brag-doc tool or leverage existing version control repositories' MCP system to fetch and build project data from professional's repositories.

2. **Auth Module:** This module is the central access control system of the app. It allows registration, login, logout as well as other authentication and authorization concerns.
