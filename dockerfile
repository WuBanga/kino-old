FROM node:lts as builder

WORKDIR /app
COPY . .
RUN --mount=type=secret,id=API_KEY \
  cp /run/secrets/API_KEY /app/.env
RUN npm install
RUN npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

ENTRYPOINT [ "nginx", "-g","daemon off;" ]