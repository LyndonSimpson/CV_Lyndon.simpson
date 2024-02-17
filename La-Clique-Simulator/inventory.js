// inventory.js
const inventoryElement = document.getElementById("inventory-items");

let inventory = [];

function addItem(item) {
  inventory.push(item);
  updateInventory();
}

function removeItem(item) {
  const nameToRemove = item.name;
  const index = inventory.findIndex(inventoryItem => inventoryItem.name === nameToRemove);
  if (index > -1) {
    inventory.splice(index, 1);
    updateInventory();
  }
}

function updateInventory() {
  inventoryElement.innerHTML = ""; // Clear the current inventory display
  inventory.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");
    img.src = item.icon;
    img.alt = item.name;
    img.style.width = "50px"; // Adjust size as needed
    img.style.height = "auto";

    const text = document.createTextNode(` ${item.name}`);
    div.appendChild(img);
    div.appendChild(text);
    inventoryElement.appendChild(div);
  });
}

function getInventory() {
  return inventory;
}

export { addItem, removeItem, updateInventory, getInventory };
