#!/usr/bin/env python3
"""Run a recognizer using the Google Assistant Library.

The Google Assistant Library has direct access to the audio API, so this Python
code doesn't need to record audio. Hot word detection "OK, Google" is supported.

It is available for Raspberry Pi 2/3 only; Pi Zero is not supported.
"""

import logging
import platform
import subprocess
import sys
import threading
import os
import time

import aiy.assistant.auth_helpers
from aiy.assistant.library import Assistant
import aiy.audio
import aiy.voicehat
from google.assistant.library.event import EventType

logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] %(levelname)s:%(name)s:%(message)s"
)

def power_off_pi():
    aiy.audio.say('Good bye!')
    subprocess.call('sudo shutdown now', shell=True)


def reboot_pi():
    aiy.audio.say('See you in a bit!')
    subprocess.call('sudo reboot', shell=True)


def say_ip():
    ip_address = subprocess.check_output("hostname -I | cut -d' ' -f1", shell=True)
    aiy.audio.say('My IP address is %s' % ip_address.decode('utf-8'))

def repeat_speech(text):
    aiy.audio.say('You said repeat')

def process_event(assistant, event):
    status_ui = aiy.voicehat.get_status_ui()
    start = time.time()
    if event.type == EventType.ON_START_FINISHED:
        status_ui.status('ready')
        if sys.stdout.isatty():
            print('Say "OK, Google" then speak, or press Ctrl+C to quit...')

    elif event.type == EventType.ON_CONVERSATION_TURN_STARTED:
        status_ui.status('listening')

    elif event.type == EventType.ON_RECOGNIZING_SPEECH_FINISHED and event.args:
        print('You said:', event.args['text'])
        text = event.args['text'].lower()
        if text == 'power off':
            assistant.stop_conversation()
            power_off_pi()
        elif text == 'reboot':
            assistant.stop_conversation()
            reboot_pi()
        elif text == 'ip address':
            assistant.stop_conversation()
            say_ip()
        elif text == 'who is alisher':
            assistant.stop_conversation()
            aiy.audio.say("Alisher Sadikov is the number one coffee consumer at M S T S")
        elif text == 'who is shawshank':
            assistant.stop_conversation()
            aiy.audio.say("Shashank Datei is a senior architect at M S T S")
        elif text == 'who is jyoti':
            assistant.stop_conversation()
            aiy.audio.say("Jyoti Mittal is the QA Architect at M S T S")
        elif text == 'who is dk':
            assistant.stop_conversation()
            aiy.audio.say("Dimitar Krastev is a great ping poing player at M S T S")
        elif text == 'who is kevin':
            assistant.stop_conversation()
            aiy.audio.say("Kevin Montanez is one of the best hackathoners at M S T S")
        elif text == "what's in my fridge":
            assistant.stop_conversation()
            os.system("/home/pi/hackathon.sh photo") 
            done = time.time()
            print("Took photo in {sec} seconds".format(sec=round(done-start,2)))
            aiy.audio.say("Done")
        elif text == 'take a picture':
            assistant.stop_conversation()
            os.system("/home/pi/hackathon.sh photo") 
            done = time.time()
            print("Took photo in {sec} seconds".format(sec=round(done-start,2)))
            aiy.audio.say("Done")

    elif event.type == EventType.ON_END_OF_UTTERANCE:
        status_ui.status('thinking')

    elif (event.type == EventType.ON_CONVERSATION_TURN_FINISHED
          or event.type == EventType.ON_CONVERSATION_TURN_TIMEOUT
          or event.type == EventType.ON_NO_RESPONSE):
        status_ui.status('ready')

    elif event.type == EventType.ON_ASSISTANT_ERROR and event.args and event.args['is_fatal']:
        sys.exit(1)

def main():
    if platform.machine() == 'armv6l':
        print('Cannot run hotword demo on Pi Zero!')
        exit(-1)

    credentials = aiy.assistant.auth_helpers.get_assistant_credentials()
    with Assistant(credentials) as assistant:
        for event in assistant.start():
            process_event(assistant, event)


if __name__ == '__main__':
    main()
