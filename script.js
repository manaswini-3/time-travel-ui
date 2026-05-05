const slider = document.getElementById("slider");
const yearDisplay = document.getElementById("yearDisplay");
const content = document.getElementById("content");
const log = document.getElementById("log");
const glitchText = document.getElementById("glitchText");
const soundBtn = document.getElementById("soundBtn");

let soundOn = false;
const beep = new Audio("https://www.soundjay.com/button/sounds/button-16.mp3");

const thoughts = [
  "this looks kinda broken 😅",
  "okay this feels normal",
  "why is future like this...",
  "hmm not bad actually"
];

const glitches = [
  "system error...",
  "loading future...",
  "time unstable ⚠️",
  "reality glitch"
];

function addLog(year) {
  const li = document.createElement("li");
  li.innerText = "went to " + year;
  log.appendChild(li);
}

soundBtn.onclick = () => {
  soundOn = !soundOn;
};

slider.addEventListener("input", () => {
  const year = slider.value;
  yearDisplay.innerText = "Year: " + year;

  const body = document.body;

  setTimeout(() => {
    body.className = "";

    if (year < 2000) {
      body.classList.add("old");
      content.innerText = "feels like early internet days...";
      glitchText.innerText = "";
    } 
    else if (year < 2040) {
      body.classList.add("modern");
      content.innerText = "this is what we use daily.";
      glitchText.innerText = "";
    } 
    else {
      body.classList.add("future");
      content.innerText = "not sure if i like this future 😄";

      glitchText.innerText =
        glitches[Math.floor(Math.random() * glitches.length)];
    }

    content.innerText += "\n" + thoughts[Math.floor(Math.random() * thoughts.length)];

    if (soundOn) {
      beep.play();
    }

    addLog(year);

  }, 180);
});