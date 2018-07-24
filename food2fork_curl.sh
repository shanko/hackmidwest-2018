#!/bin/bash

KEY=$1
curl -X GET -H 'Cache-Control: no-cache' -H 'Postman-Token: 3bef835b-5415-417f-aca2-8fc2b0d97383' "http://food2fork.com/api/search?q=apple&key=$KEY"

