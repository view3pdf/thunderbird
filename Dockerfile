#Sample Dockerfile for NodeJS Apps

FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /Pakxiiauis8dhdcvvcbcvbcvbvccbnm

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
