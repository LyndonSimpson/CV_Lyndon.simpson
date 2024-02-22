// character.js
class Character {
  constructor(health, drunkness) {
    this.maxHealth = 100; // Assuming 100 is the max health
    this.maxDrunkness = 100; // Assuming 100 is the max drunkness
    this.health = health;
    this.drunkness = drunkness;
  }
  
    gainHealth(amount) {
      this.health += amount;
      this.health = Math.min(this.health, this.maxHealth);
      updateCharacterStats(); // Update the UI
    }
  
    loseHealth(amount) {
      this.health -= amount;
      this.health = Math.max(this.health, 0);
      updateCharacterStats(); // Update the UI
    }
  
    // Call updateCharacterStats() after the drunkness changes
    gainDrunkness(amount) {
      this.drunkness += amount;
      this.drunkness = Math.min(this.drunkness, this.maxDrunkness);
      updateCharacterStats(); // Update the UI
    }
  
    loseDrunkness(amount) {
      this.drunkness -= amount;
      this.drunkness = Math.max(this.drunkness, 0);
      updateCharacterStats(); // Update the UI
    }
  }
  
  const player = new Character(100, 0);

  function updateCharacterStats() {
    const healthPercentage = (player.health / player.maxHealth) * 100;
    const drunknessPercentage = (player.drunkness / player.maxDrunkness) * 100;

    const healthBar = document.getElementById('health-value');
    const drunknessBar = document.getElementById('drunkness-value');

    healthBar.style.width = `${healthPercentage}%`;
    drunknessBar.style.width = `${drunknessPercentage}%`;

    if (player.drunkness >= 100) {
        document.body.classList.add('drunkness-sway');
    } else {
        document.body.classList.remove('drunkness-sway');
    }
}

// Call this function whenever the health or drunkness stats need to be updated
updateCharacterStats();

  function getColorBasedOnDrunkness(drunknessLevel) {
    let color;
    if (drunknessLevel <= 20) {
        color = '#00ff00'; // Neon Green : #00ff00
    } else if (drunknessLevel <= 40) {
        color = '#00BFFF'; // Electric Blue
    } else if (drunknessLevel <= 60) {
        color = '#FF00FF'; // Neon Pink
    } else if (drunknessLevel <= 80) {
        color = '#FFFF33'; // Bright Yellow
    } else {
        color = '#9400D3'; // Neon Purple
    }
    return color;
  } 

  // Example: Make the drunkness value flicker when drunkness is high
function updateHealthDisplay() {
  const healthValueElement = document.getElementById("drunkness-value");
  healthValueElement.textContent = player.drunkness;

  if (player.drunkness > 60) { // Assuming the total drunkness is 100
      healthValueElement.classList.add("flickering-text");
  } else {
      healthValueElement.classList.remove("flickering-text");
  }
}
  
  function updateCharacterInfo(healthValueElement, drunknessValueElement) {
    healthValueElement.textContent = player.health;
    drunknessValueElement.textContent = player.drunkness;

    // Determine the color based on drunkness level
    const color = getColorBasedOnDrunkness(player.drunkness);

    // Update the CSS variable
    document.documentElement.style.setProperty('--neon-color', color);

    updateHealthDisplay();
  }
  
  export { player, updateCharacterInfo };
  
  
  