FROM node:18

WORKDIR /usr/src/app

RUN npm install -g prisma@3

COPY package*.json ./

RUN npm install

COPY . .

RUN prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
