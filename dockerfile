FROM node:23-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
# build the node_modules
RUN npm install

COPY . .

RUN npx prisma generate
# build the dist folder
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev:docker" ]
