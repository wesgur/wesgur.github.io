FROM node:10

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD . .

ENV NODE_ENV=production
ENV PORT=3000

CMD [ "npm", "start"]

EXPOSE ${PORT}
