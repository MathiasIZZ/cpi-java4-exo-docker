FROM node:12-alpine AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# CONFIG NGINX FOR FRONT APPLICATION #

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ ./
