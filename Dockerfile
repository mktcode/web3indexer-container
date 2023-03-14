FROM node:18.14.1-alpine
WORKDIR /app
RUN apk update && apk upgrade && \
	apk add --no-cache bash git
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]