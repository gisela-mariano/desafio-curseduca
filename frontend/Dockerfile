FROM node:16.15.1
WORKDIR /app
COPY ./package.json /app/package.json
RUN yarn
COPY . ./app
ENV NODE_PATH ./frontend/src
CMD ["yarn", "start"]