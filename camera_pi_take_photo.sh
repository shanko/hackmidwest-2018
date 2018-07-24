raspistill --timeout 1000 -o fruit.jpg -q 5
sleep 2
export CLOUDINARY_URL=cloudinary://424175534579823:s7L6BdkXwPedZ6YmM3bAh1PD8AM@msts-smartfridge
/usr/bin/python /home/pi/upload_picture.py > /home/pi/junk.log 2> /home/pi/junk.err
