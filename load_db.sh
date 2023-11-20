#!/bin/bash

API_ENDPOINT="http://localhost:3000/api/signup"

generate_fake_data() {
  name="User$((RANDOM % 1000))"
  age=$((RANDOM % 80 + 18))
  email="user${RANDOM}@user.com"
  password="123"
  isAdmin=false

  echo "{
    \"name\": \"$name\",
    \"age\": $age,
    \"email\": \"$email\",
    \"password\": \"$password\",
    \"isAdmin\": $isAdmin
  }"
}

NUM_REQUESTS=5

for ((i=1; i<=$NUM_REQUESTS; i++)); do
  echo "Enviando request $i..."
  data=$(generate_fake_data)

  curl -X POST \
    "$API_ENDPOINT" \
    -H 'Content-Type: application/json' \
    -d "$data"

  echo "Request $i completo."
  echo ""
done

echo "Envio de requests completo."
