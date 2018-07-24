#!/bin/bash

KEY=$1
curl -s -X GET -H 'Cache-Control: no-cache' "http://food2fork.com/api/search?q=apple&key=$KEY"

