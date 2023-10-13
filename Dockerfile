FROM node:16-alpine
WORKDIR /backend
COPY . /backend
RUN npm install
EXPOSE 3002
CMD ["npm", "start"]
