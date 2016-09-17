FROM node:6

CMD ["node", "/app/dist/index.js"]
EXPOSE 8080

ENV APP_DIR /app
RUN mkdir -p $APP_DIR
COPY . $APP_DIR
WORKDIR $APP_DIR
RUN npm rebuild
