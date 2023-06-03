FROM node:20-alpine as builder

RUN mkdir -p /usr/src/
COPY . /usr/src/
WORKDIR /usr/src/
RUN npm install
RUN npx nuxi build

FROM node:20-alpine
RUN mkdir -p /usr/src/
COPY --from=builder /usr/src/.output /usr/local/kassette-transformer
WORKDIR /usr/local/kassette-transformer

ENTRYPOINT ["node", "server/index.mjs"]


