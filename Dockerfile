FROM node:20-alpine as builder

RUN mkdir -p /usr/src/

RUN COPY ./ /usr/src/kassette-transformer

WORKDIR /usr/src/kassette-transformer

RUN npx build




