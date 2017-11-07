API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/"

curl "${API}${URL_PATH}"\
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo

# {"user":{"id":1533,"email":"jim@gmail.com","token":"BAhJIiU2NmE2Mjc3Yjc5MzU2NTRlYWIzZjNhMDIzOTY3NWUzMwY6BkVG--f5754c22ce8eef2a0be60c8cd6e478da18d0e530"}}
