## Manual Installation:
 - Install nodejs
 - clone the repository
 - Run: `npm install`
 - Start a database
    - `docker run -d -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres`
    (or)
    - go to neon.tech and start a db there
 - change the DATABASE_URL credentails in .env file according to your need
 - Run: `npx prisma migrate dev --skip-generate`
 - Run: `npx prisma generate`
 - Run: `npm run build`
 - Run: `npm run start`

## Docker installation:
 # Running both the postgres & the project in containers individually and connected via network:
  - Install docker
  - Create a network
    - `docker network create postgres_network`
  - (optional) Create a volume
    - `docker volume create postgres_volume`
  - Start the postgres image
    - `docker run -d --name postgresdb -v postgres_volume:/var/lib/postgres/data --network postgres_network -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres`
  - Build the postgres_app image
    - `docker build --network=host -t postgres_app .`
  - Start the postgres_app image
    - `docker run --network postgres_network -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgresdb:5432/mydb?schema=public -p 3000:3000 postgres_app`

## Docker compose Installation: