# FROM node:16.15.1

# ENV PORT=4000

# EXPOSE 4000

# WORKDIR /app

# COPY package.json .

# COPY .env .

# COPY . .

# RUN yarn

# RUN yarn typeorm migration:create src/migrations/initialMigration

# RUN yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts

# RUN yarn typeorm migration:run -d src/data-source.ts

# CMD ["yarn", "dev"]

FROM node:16.15.1
WORKDIR /app
COPY ./package.json /app/package.json
RUN yarn
COPY . ./app
ENV NODE_PATH ./backend/src
# RUN yarn typeorm migration:run src/data-source.ts