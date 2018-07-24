#!/usr/bin/env python3
import os
import time

import aiy.audio
import aiy.cloudspeech
import aiy.voicehat

def main():
    recognizer = aiy.cloudspeech.get_recognizer()
    recognizer.expect_phrase('turn off the light')
    recognizer.expect_phrase('turn on the light')
    recognizer.expect_phrase('blink')
    recognizer.expect_phrase('photo')
    recognizer.expect_phrase('video')
    recognizer.expect_phrase('repeat')

    button = aiy.voicehat.get_button()
    led = aiy.voicehat.get_led()
    aiy.audio.get_recorder().start()

    while True:
        print('Press the button and speak')
        button.wait_for_press()
        print('Listening...')
        text = recognizer.recognize()
        start = time.time()
        if not text:
            print('Sorry, I did not hear you.')
        else:
            print('You said "', text, '"')
            if 'turn on the light' in text:
                led.set_state(aiy.voicehat.LED.ON)
            elif 'turn off the light' in text:
                led.set_state(aiy.voicehat.LED.OFF)
            elif 'blink' in text:
                led.set_state(aiy.voicehat.LED.BLINK)
            elif 'photo' in text:
                os.system("/home/pi/hackathon.sh photo")
                done = time.time()
                print("took photo in {sec} seconds".format(sec=round(done-start,2)))
            elif 'video' in text:
                os.system("/home/pi/hackathon.sh video")
                done = time.time()
                print("took video in {sec} seconds".format(sec=round(done-start,2)))
            elif 'repeat' in text:
                to_repeat = text.replace('repeat', '', 1)
                aiy.audio.say(to_repeat)
            elif 'goodbye' in text:
                break


if __name__ == '__main__':
    main()
