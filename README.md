# What is this

Simple kids learning web app which change the background image/color on the key pressed.

all images are placed on `images/background` folder

_bg.json_ has mapping of those images and keys which fetched using mock API

# How it works

user press any key

on right side that key name will be appeared in white color with big font size

*   if this key is a number than background-color will change and that number of circle appears which key is pressed.
    for eg. if 3 is pressed than 3 circle will appears.

*   if this key is any alphabet than background Image will be changed to that background.
    for eg if user press A than background image will be changes to Apple.

# How to run

*   clone this repo or download the zip
    `git clone https://github.com/zymr-keshav/canvas.git`
*   navigate to the folder which have the repo (in my case it is canvas folder) through terminal
    `cd canvas`

-   run `npm install`
-   run `npm run server`

keep this terminal open ; note that output of this command will be as following

> node server
> JSON Server is running

open new terminal and

*   run `npm start`

Now open `http://localhost:8080` in the chrome browser

Note: all images are in _.jpg_ format only.
