FROM node:20-alpine as builder

RUN mkdir -p /usr/src/

RUN COPY . /usr/src/

WORKDIR /usr/src/

RUN npx build




