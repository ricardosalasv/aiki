FROM node:16.14.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING true
ENV NODE_ENV development

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install
RUN npm install react-scripts@5.0.0 -g
RUN npm install -S react-router-dom
RUN npm install axios

COPY . /app/

CMD ["npm", "start"]