// character.js
class Character {
    constructor(health, drunkness) {
      this.health = health;
      this.drunkness = drunkness;
    }
  
    gainHealth(amount) {
      this.health += amount;
    }
  
    loseHealth(amount) {
      this.health -= amount;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  
    gainDrunkness(amount) {
      this.drunkness += amount;
    }
  
    loseDrunkness(amount) {
      this.drunkness -= amount;
      if (this.drunkness < 0) {
        this.drunkness = 0;
      }
    }
  }
  
  const player = new Character(100, 0);
  
  function updateCharacterInfo(healthValueElement, drunknessValueElement) {
    healthValueElement.textContent = player.health;
    drunknessValueElement.textContent = player.drunkness;
  }
  
  export { player, updateCharacterInfo };
  
  
  