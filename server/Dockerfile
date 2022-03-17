FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN yarn
COPY ./ ./

EXPOSE 4000

CMD ["yarn", "run", "dev"]
