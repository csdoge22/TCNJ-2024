// Your JavaScript code goes here

function insertItem() {
  const output = document.getElementById('output');
  const container = document.getElementById('container');

  // Extracting information from the clicked slot
  const slotId = event.target.id;
  const itemName = slotId.charAt(0).toUpperCase() + slotId.slice(1); // Capitalizing the first letter
  const imageUrl = `images/${slotId}.jpg`; // Assuming the images follow a naming convention
  const description = `Recyclable ${itemName.toLowerCase()} items.`;

  // Insert item logic
  output.innerHTML = `Item Inserted: ${itemName}`;
  addDeleteButton(itemName, imageUrl, description);
  addToCart(itemName, imageUrl, description);
  showViewCartButton();
}

// Rest of your existing functions (addDeleteButton, deleteItem, removeDeleteButton, addToCart, removeFromCart, clearCart, checkCartEmpty, resetMachine, removeDeleteButtons, showCart, hideCart)

// Event listeners for slot clicks
document.addEventListener('DOMContentLoaded', function() {
  const plasticSlot = document.getElementById('plastic');
  const glassSlot = document.getElementById('glass');
  const metalSlot = document.getElementById('metal');
  const paperSlot = document.getElementById('paper');

  plasticSlot.addEventListener('click', insertItem);
  glassSlot.addEventListener('click', insertItem);
  metalSlot.addEventListener('click', insertItem);
  paperSlot.addEventListener('click', insertItem);
});
