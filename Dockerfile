FROM node:20-alpine as builder

RUN mkdir -p /usr/src/
COPY . /usr/src/
WORKDIR /usr/src/
RUN npm install

FROM node:20-alpine
RUN mkdir -p /usr/src/
COPY --from=builder /usr/src/ /usr/
WORKDIR /usr/src/

CMD ["npm run"]  


