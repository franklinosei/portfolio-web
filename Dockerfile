# FROM node as build
# WORKDIR /web
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx
# COPY --from=build /web/build /usr/share/nginx/html


FROM node as build
WORKDIR /web
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# FROM nginx
# COPY --from=build /web/build /usr/share/nginx/html

FROM nginx:stable-alpine
COPY --from=build /web/build /usr/share/nginx/html
COPY --from=build /web/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]