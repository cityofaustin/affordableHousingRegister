#!/usr/bin/env bash
echo "-- Entrypoint Executed (docker-entrypoint.sh)"
echo "--    APPLICATION_NAME:   ${APPLICATION_NAME}"
echo "--    CWD:                ${PWD}"
echo "--    MYSQL:              ${DATABASE_URL}"
exec "$@"
