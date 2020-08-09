FROM node:10

WORKDIR /app

ADD . . 

RUN npm install

ENV NODE_ENV=production
ENV PORT=3000

CMD [ "npm", "start"]

EXPOSE ${PORT}

