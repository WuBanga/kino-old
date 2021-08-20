FROM node:lts as builder

WORKDIR /app
COPY . .
RUN echo $API_KEY > .env
RUN echo $API_KEY
RUN --mount=type=secret,id=API_KEY \
  cat /run/secrets/API_KEY
RUN cat .env
RUN npm install
RUN npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

ENTRYPOINT [ "nginx", "-g","daemon off;" ]