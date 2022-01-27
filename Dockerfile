# pull official base image
FROM node:16.13.2-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN CI=''

RUN npm install 
# RUN npm install react-scripts@3.4.1 -g --silent --force
RUN npm install draft-js 
RUN npm install styled-components
RUN npm install html-react-parser

# add app
COPY . ./

# start app
RUN npm run build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]