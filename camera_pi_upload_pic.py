#!/usr/bin/env python
import os, sys

from cloudinary.uploader import upload
from cloudinary.utils    import cloudinary_url
from cloudinary.api      import delete_resources_by_tag, resources_by_tag

# config
os.chdir(os.path.join(os.path.dirname(sys.argv[0]), '.'))

def dump_response(response):
    print("Upload response:")
    for key in sorted(response.keys()):
        print("  %s: %s" % (key, response[key]))

def upload_file():
    print("--- Uploading a local file with custom public ID: msts_hmw_fridge_contents")
    response = upload("/home/pi/fruit.jpg",
        public_id = "msts_hmw_fridge_contents",
        categorization = "aws_rek_tagging",
        eager = ["t_ne", "t_nw", "t_se", "t_sw"]
    )
    dump_response(response)

upload_file()
