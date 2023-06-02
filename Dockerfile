FROM node:20-alpine as builder

RUN mkdir -p /usr/src/

COPY . /usr/src/

WORKDIR /usr/src/

RUN npx build




