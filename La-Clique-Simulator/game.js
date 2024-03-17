const storyElement = document.getElementById("story");
const buttonsElement = document.getElementById("options");
const saveButton = document.getElementById("save-game");
const loadButton = document.getElementById("load-game");
const imageSectionElement = document.getElementById("image-section");
const healthValueElement = document.getElementById("health-value");
const drunknessValueElement = document.getElementById("drunkness-value");
import { player, updateCharacterInfo } from './character.js';
import {
  addItem,
  updateInventory
} from './inventory.js';

import gameStates1 from './levels/level1.js';
import gameStates2 from './levels/level2.js';
import gameStates3 from './levels/level3.js';
import gameStates4 from './levels/level4.js';
import gameStates5 from './levels/level5.js';
import gameStates6 from './levels/level6.js';
import gameStates7 from './levels/level7.js';
import gameStates8 from './levels/level8.js';
import gameStates9 from './levels/level9.js';
import gameStates10 from './levels/level10.js';
import gameStates11 from './levels/level11.js';
import gameStates12 from './levels/level12.js';
import gameStates13 from './levels/level13.js';
import gameStates14 from './levels/level14.js';
import gameStates15 from './levels/level15.js';
const gameStates = [...gameStates1, ...gameStates2, ...gameStates3, ...gameStates4, ...gameStates5, ...gameStates6, ...gameStates7, ...gameStates8, ...gameStates9, ...gameStates10, ...gameStates11, ...gameStates12, ...gameStates13, ...gameStates14, ...gameStates15];

saveButton.addEventListener("click", saveGame);
loadButton.addEventListener("click", loadGame);

// Call the updateInventory function when the game starts
updateInventory();

let currentState = 0;
imageSectionElement.classList.add("show-image"); // show the image for intro state (state 0)

function saveGame() {
  localStorage.setItem("textRpgGameState", JSON.stringify(currentState));
}

function loadGame() {
  const savedState = JSON.parse(localStorage.getItem("textRpgGameState"));
  if (savedState !== null) {
    currentState = savedState;
    updateStory();
  }
}

// Function to dynamically determine the next state based on current conditions
function getNextState(option) {
  if (typeof option.nextState === 'function') {
    return option.nextState(); // If nextState is a function, call it to get the current dynamic value
  }
  return option.nextState; // Otherwise, return the nextState directly
}

function chooseOption(index) {
  const option = gameStates[currentState].options[index];
  const nextState = getNextState(option); // Use the new function here
  currentState = nextState;

  if (currentState != null) {
    imageSectionElement.classList.add("show-image");
  }

  // Execute any additional actions defined for the chosen option
  if (option.onChoose) {
    option.onChoose();
  }

  updateStory();
  updateCharacterInfo(healthValueElement, drunknessValueElement);
}

function typeWriterEffect(element, text, delay) {
  element.classList.add("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, delay);
    } else {
      element.classList.remove("typewriter");
    }
  }

  type();
}


// for looping music
let currentMusic = "";
const audioElement = new Audio();
audioElement.loop = true; // Enable looping

// update music function for updating music depending on state
function updateMusic(musicPath) {
  if (currentMusic !== musicPath) {
    currentMusic = musicPath;
    audioElement.src = musicPath;
    audioElement.play();
  }
}

function updateStory() {
  const gameState = gameStates[currentState];
  storyElement.textContent = "";
  typeWriterEffect(storyElement, gameState.story, 30);
  buttonsElement.innerHTML = "";

  gameState.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.addEventListener("click", () => chooseOption(index));
    buttonsElement.appendChild(button);
  });

  // Update the image source based on the current game state
  const gameImage = document.getElementById("game-image");
  gameImage.src = gameState.image;

  // update the music depending on the state
  if (gameState.music) {
    updateMusic(gameState.music);
  }

  // Once the initial story and game state are set, hide the loading screen.
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
}

// Get the modal
var modal = document.getElementById('item-modal');

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName('close-button')[0];

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Use setTimeout to simulate a loading delay
// to revert to no loading screen, just replace all this function with a simple
// other function : 'updateStory();'
document.addEventListener('DOMContentLoaded', (event) => {
  // Simulate loading time and hide the loading screen after 3 seconds
  setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
          loadingScreen.style.display = 'none';
      }
      
      // Since the game is now ready, update the story and other initial game settings
      updateStory(); // Ensure this is inside the setTimeout so it executes after the loading screen hides

      // Any other actions you want to delay until after the loading screen is hidden
  }, 2500); // Delay of 3000 milliseconds
});

// Add the initParticles function
function initParticles() {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 40, // this was at 50 (number of nodes)
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ff00"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2, // this was at 0
          color: "#00ff00" // changed to neon green
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "./public/sunset.jpg", // not showing
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ff00", // changed to neon green color
        opacity: 0.8, // changed from lower opacity (0.4)
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  });
}

// Call the initParticles function
initParticles();

export { healthValueElement, drunknessValueElement };

