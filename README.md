# NestJs API with NextJs  
5 days challenge to build a scalable ApiRest using NestJs for backend with NextJs for frontend 

## Project overview
- [Dependencies](#dependencies)
- [Docker Installation](#docker-method)
- [Local Installation](#local-method)
- [Application access](#application-access)
- [Api routes](#api-routes)
- [Requirements](#requirements)



## Project Dependencies

#### 1. [Next.js](https://www.npmjs.com/package/next) (14.0.2)

- **Description**: A React framework for building server-rendered applications.
- **Version**: 14.0.2

#### 1. [NestJS](https://www.npmjs.com/package/@nestjs/core) (^10.0.0)

- **Description**: A framework for building efficient and scalable server-side applications with TypeScript.
- **Version**: 10.0.0

#### 2. [@prisma/client](https://www.npmjs.com/package/@prisma/client) (^5.5.2)

- **Description**: Prisma client for interacting with databases.
- **Version**: 5.5.2


## Installation

### Docker method
Make sure you have [installed](https://docs.docker.com/docker-for-windows/install/) and [configured](https://github.com/dotnet-architecture/eShopOnContainers/wiki/Windows-setup#configure-docker) docker in your environment. After that, you can run the below commands from the root directory and get started with the `PhoneBook` immediately.

```powershell
docker-compose up --build
```

### Local method
Make sure you have [installed](https://nodejs.org/en/download) NodeJs in your machine. After that, you can run the below commands to get started with the `PhoneBook` immediately.

on the ``phoneBookBackend`` folder, you will need to run:
````
npm run build
#
npm run start:prod
````
Now that we have the api running, we need to start our frontend, on the ``phoneBookFrontend`` folder, you will need to run:
````
npm run build
#
npm run start
````

## application access

You should be able to browse different components of the application by using the below URLs :

```
Frontend application : http://localhost:3000/
Backend application  :  http://localhost:8080/api/
```

## Api routes

| Route                                                    | Params | Queries | Default response |
|-----------------------------------------------------------------|:-----:|:------:|:-------------------------------------------------------------------------------:|
| users                                                           |       |        | list of all users                                                               |                
| users?page={page}                                               |       |   page | list of 5 users based on the {page} defined, with the total count of users      |                
| users/:id/phone_numbers                                         |  id   |        | list of all phone numbers registered on the user with the id searched           |    

## Requirements
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [NodeJs](https://nodejs.org/en/download)
