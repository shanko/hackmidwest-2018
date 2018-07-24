#!/bin/bash

echo "Got:'"$1"'"

camera_pi_ip="10.119.107.128"

if [[ "$1" ==  "photo" ]]; then
  ssh pi@camera_pi_ip /home/pi/camera_pi_take_photo.sh
elif [[ "$1" ==  "video" ]]; then
  ssh pi@camera_pi_ip raspivid -vf -hf -o fruit.h264 -t 3000
fi

scp pi@camera_pi_ip:/home/pi/fruit.jpg ./fruit.jpg
