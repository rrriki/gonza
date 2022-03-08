# Challenge

This is a small app, composed of a React frontend ([Nextjs](nextjs.org/)) and a Node backend ([Nestjs](https://nestjs.com/)).  

It uses MongoDB to store a Employees collection, with Salary information.


it exposes 2 endpoints:  

- **Create Employee** - `POST /employees`

> Expectes a body like:

```ts
{
"name": string,
"salary": number,
"department": string
}
```

- **Get Department Salary Description** - `GET /employees/:department/salaries`

Inside the backend folder, there's an `insomnia.json` collection which can be imported into Insomnia or Postman for easy access to the endpoints.

## Getting started

1. Once you've cloned the repository, you can start the mongoDB docker container:  

```sh
$ cd backend
$ docker-compose up

```
  

2. You'll want to add the necessary environment variables to each project:
Add an `.env` file at the root of the `backend` folder, for example:
```

# SERVER
HTTP_PORT=8080

# MONGODB
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_INITDB_DATABASE='test'
MONGO_INITDB_ROOT_USERNAME='admin'
MONGO_INITDB_ROOT_PASSWORD='extrasupersecretpassword'
MONGO_USERNAME='user' # Any username would do, really
MONGO_PASSWORD='supersecretpassword'
```

Add an `.env.local` at the root of the `frontend` folder,

  

```
NEXT_PUBLIC_API_URL=http://localhost:8080
```
3. Install the dependencies and run each project
```sh
# Frontend
$ cd frontend
$ npm install
$ npm run dev

# Backend
$ cd backend
$ npm install
$ npm start

```
  

## License

[GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)
