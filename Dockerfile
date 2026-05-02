FROM ubuntu

RUN apt update

RUN apt install curl --yes

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

ENV NVM_DIR=/root/.nvm

RUN . "$NVM_DIR/nvm.sh" && nvm install 24 \
 && ln -s "$NVM_DIR/versions/node/$(nvm version 24)/bin/node" /usr/local/bin/node \
 && ln -s "$NVM_DIR/versions/node/$(nvm version 24)/bin/npm"  /usr/local/bin/npm

# FROM node:lts-alpine3.22

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN . "$NVM_DIR/nvm.sh" && npm run build

EXPOSE 3000

CMD ["node", "./dist/index.cjs"]