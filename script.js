// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Load products into the product list
function loadProducts() {
  const productList = document.getElementById('product-list');
  
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.onclick = () => addToCart(product);
    
    li.appendChild(addButton);
    productList.appendChild(li);
  });
}

// Load the shopping cart from session storage
function loadCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear the cart list before reloading
  
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Add a product to the shopping cart
function addToCart(product) {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
  // Add the product to the cart array
  cart.push(product);
  
  // Save the updated cart back to session storage
  sessionStorage.setItem('cart', JSON.stringify(cart));
  
  // Reload the cart display
  loadCart();
}

// Clear the shopping cart
function clearCart() {
  sessionStorage.removeItem('cart');
  loadCart();
}

// Event listener to clear the cart
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

// Initial load
window.onload = () => {
  loadProducts();
  loadCart();
};

