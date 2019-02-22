#!/usr/bin/env bash

set -o errexit

if [ "$REBUILD" == "on" ]; then
    docker build --no-cache -f ./docker/Dockerfile -t ahdh-register .
    docker-compose -f ./docker/docker-compose.local.yml up --build
else
    docker build -f ./docker/Dockerfile -t ahdh-register .
    docker-compose -f ./docker/docker-compose.local.yml up
fi
