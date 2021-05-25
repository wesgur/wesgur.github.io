FROM node:14

WORKDIR /app

ADD package.json .

RUN npm install
RUN npm rebuild node-sass --force

ADD . .

ENV NODE_ENV=production
ENV PORT=3000

CMD [ "npm", "start"]

EXPOSE ${PORT}

