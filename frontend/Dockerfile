FROM node:13.12.0-alpine as build
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY ./ ./
RUN npm run build

FROM bitnami/nginx:latest
COPY --from=build /app/frontend/build /app
COPY default.conf /opt/bitnami/nginx/conf/server_blocks/
CMD ["nginx", "-g", "daemon off;"]