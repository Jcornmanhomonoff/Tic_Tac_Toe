API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/"

curl "${API}${URL_PATH}"\
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "id": 18812,
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'

echo

# {"user":{"id":1587,"email":"j@gmail.com","token":"BAhJIiUwZmIwYmJhMTcwOTE3NGQwMjU5YzhjYjFhZGQwNTBkMwY6BkVG--a22161c97d02ec230769677d2379fbbbeaad6c00"}}
