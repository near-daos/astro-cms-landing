FROM strapi/base:alpine

WORKDIR /app

COPY . .

RUN yarn install --production --frozen-lockfile
RUN yarn build

EXPOSE 1337

CMD ["yarn", "develop"]
