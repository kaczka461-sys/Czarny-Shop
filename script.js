let cart = [];

function addToCart(name) {
  cart.push(name);
  document.getElementById("cartCount").innerText = cart.length;
}

function openCart() {
  document.getElementById("cart").classList.remove("hidden");
  renderCart();
}

function closeCart() {
  document.getElementById("cart").classList.add("hidden");
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}
