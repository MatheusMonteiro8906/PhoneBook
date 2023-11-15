# NestJs API with NextJs  
5 days challenge to build a scalable ApiRest using NestJs for backend with NextJs for frontend 

## Project Dependencies

### Frontend:

#### 1. [@emotion/react](https://www.npmjs.com/package/@emotion/react) (^11.11.1)

- **Description**: A popular library for writing styles with JavaScript.
- **Version**: 11.11.1

#### 2. [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) (^11.11.0)

- **Description**: Part of the Emotion library, this package allows for styling React components with the styled API.
- **Version**: 11.11.0

#### 3. [@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material) (^5.14.16)

- **Description**: Material-UI icons for React.
- **Version**: 5.14.16

#### 4. [@mui/material](https://www.npmjs.com/package/@mui/material) (^5.14.17)

- **Description**: A popular React UI framework implementing Google's Material Design.
- **Version**: 5.14.17

#### 5. [@mui/types](https://www.npmjs.com/package/@mui/types) (^7.2.8)

- **Description**: TypeScript types for Material-UI.
- **Version**: 7.2.8

#### 6. [next](https://www.npmjs.com/package/next) (14.0.2)

- **Description**: A React framework for building server-rendered applications.
- **Version**: 14.0.2

#### 7. [react](https://www.npmjs.com/package/react) (^18)

- **Description**: A JavaScript library for building user interfaces.
- **Version**: 18

#### 8. [react-dom](https://www.npmjs.com/package/react-dom) (^18)

- **Description**: Entry point for working with the DOM in React applications.
- **Version**: 18

#### 9. [react-router-dom](https://www.npmjs.com/package/react-router-dom) (^6.18.0)

- **Description**: DOM bindings for React Router, facilitating navigation in a React application.
- **Version**: 6.18.0

### Backend:

#### 1. [@nestjs/common](https://www.npmjs.com/package/@nestjs/common) (^10.0.0)

- **Description**: A module collection for building efficient and scalable server-side applications.
- **Version**: 10.0.0

#### 2. [@nestjs/core](https://www.npmjs.com/package/@nestjs/core) (^10.0.0)

- **Description**: The core NestJS module, providing the application architecture.
- **Version**: 10.0.0

#### 3. [@nestjs/jwt](https://www.npmjs.com/package/@nestjs/jwt) (^10.2.0)

- **Description**: JWT (JSON Web Token) utilities for NestJS.
- **Version**: 10.2.0

#### 4. [@nestjs/platform-express](https://www.npmjs.com/package/@nestjs/platform-express) (^10.0.0)

- **Description**: NestJS adapter for Express, allowing the use of Express middleware.
- **Version**: 10.0.0

#### 5. [@nestjs/swagger](https://www.npmjs.com/package/@nestjs/swagger) (^7.1.15)

- **Description**: Swagger (OpenAPI) module for NestJS, enabling API documentation.
- **Version**: 7.1.15

#### 6. [@prisma/client](https://www.npmjs.com/package/@prisma/client) (^5.5.2)

- **Description**: Prisma client for interacting with databases.
- **Version**: 5.5.2

#### 7. [class-transformer](https://www.npmjs.com/package/class-transformer) (^0.5.1)

- **Description**: A simple utility for transforming plain class objects to class instances.
- **Version**: 0.5.1

#### 8. [class-validator](https://www.npmjs.com/package/class-validator) (^0.14.0)

- **Description**: A validation library for classes.
- **Version**: 0.14.0

#### 9. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (^9.0.2)

- **Description**: Implementation of JSON Web Tokens for Node.js.
- **Version**: 9.0.2

#### 10. [nestjs-typeorm-paginate](https://www.npmjs.com/package/nestjs-typeorm-paginate) (^4.0.4)

- **Description**: Pagination support for NestJS using TypeORM.
- **Version**: 4.0.4

#### 11. [passport](https://www.npmjs.com/package/passport) (^0.6.0)

- **Description**: Authentication middleware for Node.js.
- **Version**: 0.6.0

#### 12. [passport-jwt](https://www.npmjs.com/package/passport-jwt) (^4.0.1)

- **Description**: Passport strategy for authenticating with JSON Web Token (JWT).
- **Version**: 4.0.1

#### 13. [prisma](https://www.npmjs.com/package/prisma) (^5.5.2)

- **Description**: Prisma CLI for database migrations and operations.
- **Version**: 5.5.2

#### 14. [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) (^0.1.13)

- **Description**: Library to add Reflect Metadata API polyfill to support TypeScript decorators.
- **Version**: 0.1.13

#### 15. [rxjs](https://www.npmjs.com/package/rxjs) (^7.8.1)

- **Description**: A library for reactive programming using Observables.
- **Version**: 7.8.1

#### 16. [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) (^5.0.0)

- **Description**: Swagger UI middleware for Express, providing API documentation.
- **Version**: 5.0.0

## Getting started

Make sure you have [installed](https://docs.docker.com/docker-for-windows/install/) and [configured](https://github.com/dotnet-architecture/eShopOnContainers/wiki/Windows-setup#configure-docker) docker in your environment. After that, you can run the below commands from the root directory and get started with the `PhoneBook` immediately.

```powershell
docker-compose up --build
```

You should be able to browse different components of the application by using the below URLs :

```
Frontend application : http://localhost:3000/
Backend application :  http://localhost:8080/api/
```

## Api routes

| Route                                                    | Params | Queries | Default response |
|-----------------------------------------------------------------|:-----:|:------:|:-------------------------------------------------------------------------------:|
| users                                                           |       |        | list of all users                                                               |                
| users?page={page}                                               |       |   page | list of 5 users based on the {page} defined, with the total count of users      |                
| users/:id/phone_numbers                                         |  id   |        | list of all phone numbers registered on the user with the id searched           |    


## Requirements
* Docker Desktop
