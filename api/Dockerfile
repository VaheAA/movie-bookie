FROM node AS build

WORKDIR /src

COPY package*.json ./

RUN npm install --verbose

COPY . .

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

FROM node

WORKDIR /src

COPY --from=build /src /src

EXPOSE 3000

CMD ["sh", "-c", "npm run build && npm run seed && npm start"]
