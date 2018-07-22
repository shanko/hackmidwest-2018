# hackmidwest 2018

What's in my fridge?
- Use Google Voice to command the web enabled camera to "Take A Picture" of the items in the fridge
- Upload the picture taken to Cloudinary where it is sliced and diced and image recognition of each item is done
- Notify the fridge owner via text, that a new picture has been taken
- Based the meta-data of each picture identified collect recipes which use the food items
- Show all the items along with their images and recipes on the mobile app (iPad)

Tech stack:
- Google AIY Voice Kit using Google Assistant API
- Raspberry Pi Camera Kit
- Cloudinary API to upload and analyze the picture taken
- Twilio API to notify the owner
- Recipes API to gather the recipes using the items identified
- Ruby / Sinatra app on Heroku to serve the JSON payloads
- Ionic UI

