#!/bin/bash

KEY=$1
curl -s -X POST -u "apikey:$KEY" --form "images_file=@public/fruit.jpg" \
  "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19"
echo ''
