function insertItem(item, imageUrl, description, quantityInputId) {
  // Handle the insertion logic here
  const quantity = document.getElementById(quantityInputId).value;
  document.getElementById('output').innerHTML = `Item Inserted: ${item} (Quantity: ${quantity})`;
  addDeleteButton(item);
  addToCart(item, imageUrl, description, quantity);
  showViewCartButton();
}

function addDeleteButton(item) {
  const slotId = item.toLowerCase();
  const slotElement = document.getElementById(slotId);

  if (!slotElement.querySelector('.delete-button')) {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      deleteItem(item);
    };

    slotElement.appendChild(deleteButton);
  }
}

function deleteItem(item) {
  // Handle the deletion logic here
  document.getElementById('output').innerHTML = `Item Deleted: ${item}`;
  removeDeleteButton(item);
  removeFromCart(item);
}

function removeDeleteButton(item) {
  const slotId = item.toLowerCase();
  const slotElement = document.getElementById(slotId);
  const deleteButton = slotElement.querySelector('.delete-button');

  if (deleteButton) {
    deleteButton.remove();
  }
}

function removeFromCart(item) {
  const cartItems = document.getElementById('cart-items');
  const cartItem = Array.from(cartItems.children).find(itemElement => {
    return itemElement.querySelector('strong').textContent === item;
  });

  if (cartItem) {
    cartItem.remove();
  }

  checkCartEmpty();
}

function addToCart(item, imageUrl, description, quantity) {
  const cartItems = document.getElementById('cart-items');
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const itemInfo = document.createElement('div');
  const itemName = document.createElement('strong');
  itemName.textContent = item + ` (Quantity: ${quantity})`;
  const itemDescription = document.createElement('p');
  itemDescription.textContent = description;
  itemInfo.appendChild(itemName);
  itemInfo.appendChild(itemDescription);

  const itemImage = document.createElement('img');
  itemImage.src = imageUrl;
  itemImage.alt = item;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button-cart');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    deleteItem(item);
  };

  cartItem.appendChild(itemInfo);
  cartItem.appendChild(itemImage);
  cartItem.appendChild(deleteButton);
  cartItems.appendChild(cartItem);
}

function clearCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  checkCartEmpty();
}

function checkCartEmpty() {
  const viewCartButton = document.getElementById('view-cart');
  const cartItems = document.getElementById('cart-items');

  if (cartItems.children.length === 0) {
    viewCartButton.classList.add('hidden');
  }
}

function resetMachine() {
  // Handle reset logic here
  document.getElementById('output').innerHTML = '';
  removeDeleteButtons();
  clearCart();
  hideCart(); // Hide the cart when resetting the machine
}

function removeDeleteButtons() {
  const slots = document.querySelectorAll('.slot');
  slots.forEach(slot => {
    const deleteButton = slot.querySelector('.delete-button');
    if (deleteButton) {
      deleteButton.remove();
    }
  });
}

// New functions for showing/hiding cart
function showCart() {
  const vendingMachine = document.querySelector('.vending-machine');
  const cartContainer = document.getElementById('cart-container');
  vendingMachine.classList.add('hidden');
  cartContainer.classList.remove('hidden');
}

function hideCart() {
  const vendingMachine = document.querySelector('.vending-machine');
  const cartContainer = document.getElementById('cart-container');
  vendingMachine.classList.remove('hidden');
  cartContainer.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  const plasticSlot = document.getElementById('plastic');
  const glassSlot = document.getElementById('glass');
  const metalSlot = document.getElementById('metal');
  const paperSlot = document.getElementById('paper');

  plasticSlot.addEventListener('click', function () {
    insertItem('Plastic', 'images/pwb.jpg', 'Plastic Containers.', 'slot-quantity');
  });

  glassSlot.addEventListener('click', function () {
    insertItem('Glass', 'images/gb.jpg', 'Glass Bottles.', 'slot-quantity');
  });

  metalSlot.addEventListener('click', function () {
    insertItem('Metal', 'images/blankcan.jpg', 'Aluminum Cans.', 'slot-quantity');
  });

  paperSlot.addEventListener('click', function () {
    insertItem('Paper', 'images/CB.jpg', 'Cardboard.', 'slot-quantity');
  });
});

function newTest() {
  // Get the select element
  var selectElement = document.getElementById('selecting');

  // Get the selected option
  var selectedOption = selectElement.options[selectElement.selectedIndex].text;

  // Display the selected text
  document.getElementById('displayText').innerText = 'Selected: ' + selectedOption;
  buttonNew();
}

function storeState() {

  window.cartState = 0;
  localStorage.setItem(key, value);
  let value = localStorage.getItem(key);  
}
