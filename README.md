# hackmidwest 2018

This project was submitted as an entry in the [Hack Midwest 2018](https://hackmidwest.com/) competition in KC. It was awarded a prize for "Best Use of Cloudinary API".

## What's in my fridge?
- Command the web enabled camera to "Take A Picture" of the items in the fridge
- Upload the picture taken to the cloud, where it is sliced and diced and image recognition of each item done
- Notify the fridge owner via text, that a new picture has been taken
- Collect recipes which use the food items identified in the picture
- Show all the items along with their images and recipes on the mobile app

## Tech stack:
- [Google AIY Voice Kit](https://aiyprojects.withgoogle.com/voice/) using [Google Assistant API](https://developers.google.com/assistant/sdk/overview)
- [Raspberry Pi](https://www.raspberrypi.org/) Camera [Module](https://www.raspberrypi.org/products/camera-module-v2/)
- [Cloudinary API](https://cloudinary.com/) to upload and analyze the picture taken
- [Twilio](https://www.twilio.com) API to notify the owner
- [Food2Fork](http://food2fork.com/)  Recipes API to gather the recipes using the items identified
- Ruby / Sinatra [app](https://github.com/shanko/hackmidwest) hosted on [Heroku](https://coolfridge.herokuapp.com/photo) to serve the JSON payloads from various APIs
- [Ionic UI](https://ionicframework.com/)

## Set Up:
- Clone this git repo
- Get the IP address of the Camera pi (use the Fing app on Android/iPhone or connect the PI to keyboard/monitor)
- Get the IP address of the Voice  pi using the same method as above
- Ensure that both the Pi's can ssh into each other without needing to enter the password (copy the id_rsa.pub files as needed)
- Copy (scp) the files named camera_pi_*.*  from this repo on the Camera pi
- Copy (scp) the files named voice_pi_*.*   from thir repo on the Voice  pi
- Modify voice_pi_control_camera.sh file to edit the IP of the Camera Pi  
- Execute voice_pi_take_command.py on Voice pi ( $ python3 /home/pi/voice_pi_take_command.py )
- Test the setup by commanding the Voice Pi to "Take A Picture"
- Ensure that a picture is taken by the Camera Pi and stored in the file /home/pi/fruit.jpg
- Wait for about 30 seconds to a minute for the Camera Pi to upload this file to Cloudinary
- Start the Sinatra app by running '$ bundle exec ruby coolfridge.rb' (which by default should serve to port 4567)
- Point the Browser URL to: http://localhost:4567/photo
- Confirm that the JSON payload in the browser is current (the links should show the full image and all the 4 cropped images)
- Start the mobile app on the iPad (installed separately)
- Confirm that all the four images of the items in the fridge are displayed
- Install the Camera Pi inside the fridge so that it points to the items in the Fridge
- Ensure there is a light source in the fridge before closing it's door
- Repeat the process of testing by commanding the Voice Pi to take the picture again

## Trouble Shooting tips:
- Ensure that the Pi's IP addresses are correct
- Ensure that the Pi's can ssh into each other without needing to provide a password
- Ensure that exactly one instance of the voice_pi_take_command.py is running on Voice Pi (usually via .bashrc or cron)
- Ensure that the light source in the fridge when the door is closed is bright enough for a picture to be taken
- Ensure that the food items are strategically placed (this will need a lot of trial and error)
- Ensure that the fridge is NOT exposing the Camera Pi installed inside it to any conducting material (e.g. water, metal etc)

