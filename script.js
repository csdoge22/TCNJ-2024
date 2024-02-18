function insertItem(item, imageUrl, description) {
  // Handle the insertion logic here
  document.getElementById('output').innerHTML = `Item Inserted: ${item}`;
  addDeleteButton(item, imageUrl, description);
  addToCart(item, imageUrl, description);
  showViewCartButton();
}

function showViewCartButton() {
  const viewCartButton = document.getElementById('view-cart');
  viewCartButton.classList.remove('hidden');
}

function addDeleteButton(item, imageUrl, description) {
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

function addToCart(item, imageUrl, description) {
  const cartItems = document.getElementById('cart-items');
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const itemInfo = document.createElement('div');
  const itemName = document.createElement('strong');
  itemName.textContent = item;
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

// Your JavaScript code goes here

function insertItem(name, imageSrc, description) {
  console.log(`Inserting item: ${name}`);
  // Add your logic for inserting items here
}

document.addEventListener('DOMContentLoaded', function() {
  const plasticSlot = document.getElementById('plastic');
  const glassSlot = document.getElementById('glass');
  const metalSlot = document.getElementById('metal');
  const paperSlot = document.getElementById('paper');

  plasticSlot.addEventListener('click', function() {
    insertItem('Plastic', 'images/pwb.jpg', 'Recyclable plastic items.');
  });

  glassSlot.addEventListener('click', function() {
    insertItem('Glass', 'images/glass.jpg', 'Recyclable glass items.');
  });

  metalSlot.addEventListener('click', function() {
    insertItem('Metal', 'images/metal.jpg', 'Recyclable metal items.');
  });

  paperSlot.addEventListener('click', function() {
    insertItem('Paper', 'images/paper.jpg', 'Recyclable paper items.');
  });
});

function insertItem(){
  window.location.assign('https://www.example.com');
}