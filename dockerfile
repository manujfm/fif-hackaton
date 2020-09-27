FROM node:10-alpine

ARG NODE_ENV=${NODE_ENV:-development}
# Create app directory
WORKDIR /usr/src/3000

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run start