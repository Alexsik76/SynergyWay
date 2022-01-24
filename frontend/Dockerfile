FROM node:13.12.0-alpine as build
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY ./ ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]