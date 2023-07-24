FROM node:16.20.1 as builder

RUN mkdir -p /usr/src/
COPY . /usr/src/
WORKDIR /usr/src/
RUN rm -rf node_modules/ .nuxt .output

RUN npm install
RUN npm run build

FROM node:16.20.1
RUN groupadd -r kassette -g 435
RUN useradd -u 435 -r -g kassette -s /sbin/nologin -c "Docker image user" kassette
RUN mkdir /opt/kassette-ai
COPY --from=builder /usr/src/.output /opt/kassette-ai/kassette-transformer
RUN chown -R kassette:kassette /opt/kassette-ai/
USER kassette

WORKDIR /opt/kassette-ai/kassette-transformer



ENTRYPOINT ["node", "server/index.mjs"]


