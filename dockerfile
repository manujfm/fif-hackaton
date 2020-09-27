FROM node:10-alpine

ARG NODE_ENV=${NODE_ENV:-development}
# Create app directory
WORKDIR /usr/src/123auth

COPY . .

# all necesary to build bcrypt
RUN apk --no-cache add --virtual builds-deps build-base python

RUN npm install
RUN npm run build

EXPOSE 8080

CMD npm run start-app
