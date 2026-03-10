# build environment
FROM node:24-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY redirect-app/package.json ./
COPY redirect-app/package-lock.json ./
RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent
COPY ./redirect-app/ ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist/redirect-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
