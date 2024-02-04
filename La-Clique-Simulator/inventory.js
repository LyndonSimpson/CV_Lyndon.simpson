// inventory.js
const inventoryElement = document.getElementById("inventory-items");

let inventory = [];

function addItem(item) {
  inventory.push(item);
  updateInventory();
}

function removeItem(item) {
  const index = inventory.indexOf(item);
  if (index > -1) {
    inventory.splice(index, 1);
    updateInventory();
  }
}

function updateInventory() {
  inventoryElement.innerHTML = "";
  inventory.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    inventoryElement.appendChild(li);
  });
}

function getInventory() {
  return inventory;
}

export { addItem, removeItem, updateInventory, getInventory };
