FROM node AS build

WORKDIR /src

COPY package*.json ./

RUN npm install --verbose

COPY . .

FROM node

WORKDIR /src

COPY --from=build /src /src

EXPOSE 3000

CMD ["sh", "-c", "npm run seed && npm run dev"]
