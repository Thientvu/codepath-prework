# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Thien Toan Vu

Time spent: 9 hours spent in total

Link to project: (https://glitch.com/edit/#!/jeweled-guiltless-text?path=README.md%3A38%3A0)

## Required Functionality

The following **required** functionality is complete:

* [Yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Yes] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Yes] Game buttons each light up and play a sound when clicked. 
* [Yes] Computer plays back sequence of clues including sound and visual cue for each button
* [Yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Yes] User wins the game after guessing a complete pattern
* [Yes] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Yes] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Yes] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Yes] More than 4 functional game buttons
* [Yes] Playback speeds up on each turn
* [Yes] Computer picks a different pattern each time the game is played
* [Yes] Player only loses after 3 mistakes (instead of on the first mistake)
* [Yes] Game button appearance change goes beyond color (e.g. add an image)
* [Yes] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Yes] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [No] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Yes](http://g.recordit.co/mgOT9YREqa.gif)
![Yes](http://g.recordit.co/AqKsKlV6Mv.gif)
![Yes](http://g.recordit.co/IZyNKwq8wN.gif)
![Yes](http://g.recordit.co/8LQrIE5lN1.gif)
![Yes](http://g.recordit.co/ftIIeSc7zi.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
+ https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
+ https://www.w3schools.com/howto/howto_js_countdown.asp
+ https://www.w3schools.com/js/js_htmldom_html.asp
+ https://www.will-myers.com/articles/adding-a-background-image-to-a-button-in-squarespace-plus-a-few-other-cool-effects
+ https://www.codegrepper.com/code-examples/javascript/js+random+int

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
+ One of the challenges I encountered in creating this submission was how to create a countdown timer to limit the amount of time the player had
while attempting to make a guess. Until that point in the assignment, I’d learned about "<"p></p">", and I knew that I had to use it to create a countdown timer.
My initial thought was to use "<"p>60</p">", which would display 60 seconds on the screen. After that, all I needed to do left was 
figuring out how to decrement the default value of 60 after each second. However, the problem was I didn’t know how to change the value inside a paragraph.
I started doing research on how to use setInterval and clearInterval methods as suggested in the prompt of the assignment. I learned that the setInterval() method
can be used to continue calling a function at specified intervals until the clearInterval() method is called. This was a major help since at this point,
the “how to keep decrementing the default countdown value after each second” problem had been solved. Then I did a little more research on how to modify
the value inside a paragraph tag, I found “document.getElementById("demo").innerHTML” and I knew this was the information I’d been missing. 
“document.getElementById("demo").innerHTML” allowed me to replace the content inside a paragraph tag by its id. My final solution to this problem was
I created two functions startCountdown() and stopCountdown(). startCountdown() replaced the value inside the targeted paragraph with the current value of the countdown and 
kept decrementing it after each 1000 ms when the function would be called again by setInterval(). stopCountdown() stopped the countdown using clearInterval() and 
set the value inside the paragraph back to the default value. I also set the default value of the countdown to be 15 instead of 60. The solution came out to work as I wanted it.
I’m glad that I decided to implement this additional feature because I learned something new from doing so

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
+ How do I make my game (my website) available to other people? I would love to show my friends this game that I made.
+ How does the section of code below work?
    + var AudioContext = window.AudioContext || window.webkitAudioContext;
    + var context = new AudioContext();
    + var o = context.createOscillator();
    + var g = context.createGain();
    + g.connect(context.destination);
    + g.gain.setValueAtTime(0, context.currentTime);
    + o.connect(g);
    + o.start(0);
+ What is the difference between id and class attribute?
+ What does the “head” section do?
     + <head>
     +   <meta charset="utf-8" />
     +   <meta name="viewport" content="width=device-width, initial-scale=1" />
     +   <link rel="icon" href="https://glitch.com/favicon.ico" />
     +   <title>Hello world!</title>
     +   <!-- import the webpage's stylesheet -->
     +   <link rel="stylesheet" href="/style.css" />
     +   <!-- import the webpage's javascript file -->
     +   <script src="/script.js" defer></script>
     + </head>

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
+ If I had a few more hours to work on this project, I would spend them working on the appearance of the game and
the customization of the game. Some of the things that I want to do are changing the background of the game, 
changing the shape of the buttons, letting the user change the sounds of the buttons, letting the user
modify the speed of the game after each pattern is shown, letting the user choose how many buttons they want,
recording the time the user takes to finish the game as well as having a list to show top scores, and having many difficulty levels.  



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Thien Toan Vu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.