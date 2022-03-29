// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of

//Global Variables
var pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0;
var gamePlaying = false;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var numOfMistakes = 0;
var time = 0;
var countdown = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  numOfMistakes = 0;
  time = 15;
  countdown = setInterval(startCountdown, 1000);

  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.floor(Math.random() * 6) + 1;
    console.log("Element " + (i + 1) + ": " + pattern[i]);
  }

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  stopCountdown();
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function playTone(btn, len) {
  var audio = document.getElementById("myAudio" + btn);
  audio.currentTime = 0;
  audio.volume = 0.5;
  audio.play();
  setTimeout(function () {
    pauseMyAudio(btn);
  }, len);
}

function playMyAudio(btn) {
  var audio = document.getElementById("myAudio" + btn);
  audio.currentTime = 0.2;
  audio.volume = 0.8;
  audio.play();
}

function pauseMyAudio(btn) {
  document.getElementById("myAudio" + btn).pause();
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime -= 20;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won.");
}

function warning() {
  alert(
    "Try a different button where you made the mistake. Don't start over. You have " +
      (3 - numOfMistakes) +
      " attempts left"
  );
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
        time = 15;
      }
    } else guessCounter++;
  } else {
    if (numOfMistakes == 2) loseGame();
    else {
      numOfMistakes++;
      warning();
    }
  }
}

function startCountdown() {
  document.getElementById("clock").innerHTML = time;
  time--;
  if (time == 0) loseGame();
}

function stopCountdown() {
  clearInterval(countdown);
  document.getElementById("clock").innerHTML = 15;
}
