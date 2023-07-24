FROM node:19.9.0-alpine3.18 as builder

ENV SHELL=sh
ENV ENV=prd

RUN mkdir -p /usr/src/
COPY . /usr/src/
WORKDIR /usr/src/
RUN rm -rf node_modules/ .nuxt .output

RUN yarn install
RUN npm install
RUN wget -qO- https://get.pnpm.io/install.sh | sh -
RUN source prd && pnpm install

ENTRYPOINT ["npm", "run", "dev"]


