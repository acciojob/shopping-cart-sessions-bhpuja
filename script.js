// Sample Product Data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM Elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Load Cart from Session Storage
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render Product List
function renderProducts() {
  productList.innerHTML = ""; // Clear existing products
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.onclick = () => addToCart(product);
    li.appendChild(addToCartBtn);
    productList.appendChild(li);
  });
}

// Render Cart
function renderCart() {
  cartList.innerHTML = ""; // Clear existing cart
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

  // Update session storage
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Add Product to Cart
function addToCart(product) {
  cart.push(product);
  renderCart();
}

// Remove Product from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Clear Cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  renderCart();
});

// Initialize
renderProducts();
renderCart();

