
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyA7KPyZJTp0A_-poZxyyxvaWkfKoNwDPe0",
    authDomain: "ecommerce-marketing-preject.firebaseapp.com",
    projectId: "ecommerce-marketing-preject",
    storageBucket: "ecommerce-marketing-preject.firebasestorage.app",
    messagingSenderId: "163973377965",
    appId: "1:163973377965:web:1432510a7c0a8a66ef3b24"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getDatabase(app);
//   console.log(app)
//   console.log(analytics)

var login = document.getElementById("Login");

login.addEventListener("click", function(){
  var loginPage = document.querySelector(".login-page")
  loginPage.style.display = "block"
})

var loged = document.getElementById("loged-In");

loged.addEventListener("click", function(){
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  if(email.value == "" || password.value == ""){
    alert("Please Enter Your Email and Password")
  }else{
    alert("your Loged In Successfully")
    document.querySelector(".login-page").style.display = "none"
  }
})

// ============================================
// Selecting the cart icon and container
var cart = document.querySelector(".cart");
var body = document.querySelector("body");
var closeCart = document.querySelector(".close");
var listCard = document.querySelector(".listCart");
var cartCounter = document.querySelector(".cart span"); // Update cart count
var checkoutButton = document.querySelector(".CheckOut");

// Array to store cart items
var cartItems = [];

// Toggle cart visibility
cart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

// Add product to cart
const addToCart = (product) => {
  const existingProduct = cartItems.find((item) => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cartItems.push(product);
  }
  updateCartUI();
};

// Update cart UI dynamically
const updateCartUI = () => {
  listCard.innerHTML = ""; // Clear previous items
  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("item");
    cartItem.innerHTML = `
      <div class="image">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="name">${item.name}</div>
      <div class="totalPrice">Rs ${item.price}</div>
      <div class="quantity">
        <span class="minus">-</span>
        <span>${item.quantity}</span>
        <span class="plus">+</span>
      </div>
    `;
    listCard.appendChild(cartItem);

    // Add event listeners for quantity buttons
    cartItem.querySelector(".minus").addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
      }
      updateCartUI();
    });
    cartItem.querySelector(".plus").addEventListener("click", () => {
      item.quantity += 1;
      updateCartUI();
    });
  });

  // Update cart count
  cartCounter.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Fetch products and initialize app
const initApp = () => {
  const productElements = document.querySelectorAll(".trend");
  productElements.forEach((productElement) => {
    const product = {
      name: productElement.querySelector("p").textContent,
      price: parseInt(productElement.querySelector("h2").textContent.replace("RS. ", "").replace(" Only", "")),
      img: productElement.querySelector("img").src,
    };
    productElement.querySelector(".addcart").addEventListener("click", () => {
      addToCart(product);
      alert(`Added "${product.name}" to the cart!`);
    });
  });
};

initApp();

var submits = document.getElementById("Submit");

submits.addEventListener("click", function(){
  var names = document.getElementById("name")
  var passwords = document.getElementById("password")

  if(names.value == "" || passwords.value == ""){
    alert("Please Enter Your Email and Password")
  }else{
    alert("your connected Successfully")
  }
})


