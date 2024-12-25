// Snowflake creation
function createSnowflakes() {
  const snowContainer = document.querySelector(".snow");
  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.animationDuration = Math.random() * 5 + 3 + "s"; // random falling speed
    snowflake.style.animationDelay = Math.random() * 5 + "s"; // random start delay
    snowflake.style.opacity = Math.random(); // random opacity
    snowContainer.appendChild(snowflake);
  }
}

// Initialize snowflakes
createSnowflakes();

// Card flip function
let flipped = false; // Track the flip state

document.querySelector("#flipCard").addEventListener("click", function () {
  const cardInner = document.querySelector(".card-inner");

  // Toggle flip state
  if (flipped) {
    cardInner.style.transform = "rotateY(0deg)"; // Front side
  } else {
    cardInner.style.transform = "rotateY(180deg)"; // Back side
  }

  flipped = !flipped; // Update flip state
});

// Play/Stop music
const playStopButton = document.getElementById("playStopButton");
const audio = document.getElementById("christmasAudio");

playStopButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playStopButton.textContent = "Stop";
  } else {
    audio.pause();
    playStopButton.textContent = "Play";
  }
});

// Show heart on image click
const imageContainer = document.getElementById("imageContainer");
const heart = document.getElementById("heart");

imageContainer.addEventListener("click", function () {
  heart.style.opacity = 1; // Make heart visible
  heart.style.animation = "fall 2s forwards"; // Trigger falling animation
});
