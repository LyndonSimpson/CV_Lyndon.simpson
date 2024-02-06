// for this to work, need to delete old typewritter and update story function
// and add this whole bloc underneath here (with the initial variable declared too)


let typingTimeoutId = null;

function updateStory() {
  const gameState = gameStates[currentState];
  storyElement.textContent = "";

  // Clear previous timeout if any and reset the text content
  if (typingTimeoutId) {
    clearTimeout(typingTimeoutId);
    storyElement.textContent = "";
  }

  // Disable buttons before starting typewriter effect
  buttonsElement.innerHTML = "";
  gameState.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.disabled = true; // Initially disable the button
    button.addEventListener("click", () => chooseOption(index));
    buttonsElement.appendChild(button);
  });

  typeWriterEffect(storyElement, gameState.story, 30, () => {
    // Re-enable buttons after typewriter effect is complete
    Array.from(buttonsElement.children).forEach(button => button.disabled = false);
  });

  // Update the image source based on the current game state
  const gameImage = document.getElementById("game-image");
  gameImage.src = gameState.image;
}

function typeWriterEffect(element, text, delay, onComplete) {
  element.classList.add("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text[index++];
      typingTimeoutId = setTimeout(type, delay);
    } else {
      element.classList.remove("typewriter");
      typingTimeoutId = null;
      if (onComplete) onComplete();
    }
  }

  type();
}

updateStory();