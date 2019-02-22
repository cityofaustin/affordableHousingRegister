#
# Express API Server
#

FROM node:10-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

# Creates and browses-to the /app dir
WORKDIR /app

# Add bash and python
RUN apk update && apk upgrade && \
    apk add --update bash python python-dev py-pip build-base mysql-client curl


# Environment
ENV PORT ${PORT:-3001}
EXPOSE $PORT

# Let's copy the app into that folder
COPY "$PWD/package.json" /app

RUN npm install pm2 -g

# Let's install all dependencies
RUN npm install -d

COPY  "$PWD" /app
COPY  "$PWD/docker/docker-entrypoint.sh" /app/docker-entrypoint.sh


ENTRYPOINT ["./docker-entrypoint.sh"]

# Let's run the app!
CMD [ "pm2-runtime", "-i", "4", "start", "bin/www" ]
