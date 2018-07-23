# hackmidwest 2018

This project was submitted as an entry in the [Hack Midwest 2018] (https://hackmidwest.com/) competition in KC. It was awarded the first prize for "Best Use of Cloudinary API".

## What's in my fridge?
- Use [Google Voice Kit] (https://aiyprojects.withgoogle.com/voice/) to command the web enabled camera to "Take A Picture" of the items in the fridge
- Upload the picture taken to [Cloudinary] (https://cloudinary.com/) where it is sliced and diced and image recognition of each item done
- Notify the fridge owner via [Twilio] (https://www.twilio.com) text, that a new picture has been taken
- Collect recipes from [Food2Fork] (http://food2fork.com/) which use the food items identified in the picture
- Show all the items along with their images and recipes on the mobile app (iPad)

## Tech stack:
- [Google AIY Voice Kit] (https://aiyprojects.withgoogle.com/voice/) using [Google Assistant API] (https://developers.google.com/assistant/sdk/overview)
- [Raspberry Pi] (https://www.raspberrypi.org/) Camera [Module] (https://www.raspberrypi.org/products/camera-module-v2/)
- [Cloudinary API] (https://cloudinary.com/) to upload and analyze the picture taken
- [Twilio] (https://www.twilio.com) API to notify the owner
- [Food2Fork] (http://food2fork.com/)  Recipes API to gather the recipes using the items identified
- Ruby / Sinatra [app] (https://github.com/shanko/hackmidwest) hosted on [Heroku] (https://coolfridge.herokuapp.com/photo) to serve the JSON payloads from various APIs
- [Ionic UI] (https://ionicframework.com/)

