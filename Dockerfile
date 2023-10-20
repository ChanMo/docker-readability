FROM node:16-slim

WORKDIR /app

RUN npm install express @mozilla/readability jsdom node-fetch@2

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
