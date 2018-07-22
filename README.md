# hackmidwest 2018

What's in my fridge?
- Use Google Voice to cammand the web enabled camera to Take A Picture of the items in the fridge
- Upload the picture taken to Cloudinary where it is sliced and diced and image recognition of each item is done
- Notify the fridge owner using Twilio API, that a new picture has been taken
- Gather the meta-data of each picture identified
- Submit it to recipes API to get all recipes based on the items
- Show all the items and display the images in the mobile appa (on iPad)

Tech stack:
- Google Voice Kit using Google Assistant API
- Raspberry Pi Camera Kit
- Cloudinary API to upload and analyze the picture taken
- Twilio API to notify the owner
- Recipes API to gather the recipes using the items identified
- Ruby / Sinatra app on Heroku to serve the JSON payloads
- Ionic UI

