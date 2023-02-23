# notes
A simple CRUD React + Nest.js app for taking notes and saving them in a Postgres DB. Login with Google OAuth

## How to run locally

1. Spin up a postgres container  
```
docker run -p 5455:5432 \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_DB=postgres \
    -d postgres
```

2. Get a Google OAuth Client id and secret and insert them into `./client/.env.local` and `./server/.env.local`3.
3. `mv ./client/.env.local .client/.env; mv ./server/.env.local ./server/.env`
4. `cd server && npm run start:dev`
5  `cd client && npm run start`
6. Your app should be running on `localhost:3000`
