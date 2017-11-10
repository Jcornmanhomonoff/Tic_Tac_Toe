#!/bin/bash

# EMAIL=pikachu PASSWORD=pikachu sh scripts/sign-in.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/1533"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=BAhJIiUwZWI1YTk3NWRjMmQwZDZhY2MyN2U0MGE3N2VlZWFhYgY6BkVG--3aa2d85d92bf926c0215268747c9a7aefcc8aa51" \
  --data '{
      "passwords": {
        "old": "'"${OLD}"'",
        "new": "'"${NEW}"'"
      }
  }'

echo
