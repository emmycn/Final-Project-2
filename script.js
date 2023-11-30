
dresses = [
  {
    "code": "D01",
    "dress_name": "Aden Gown",
    "description": "The stunning Aden gown, elegantly sculpted from double stretch crepe for a stunning, body-hugging allure.",
    "price": 500,
    "image": "images/2nd page/pic1.jpg",
    "sizes": [40, 41, 42, 42.5]
  },
  {
    "code": "D02",
    "dress_name": "Emma Gown",
    "description": "Glory, a stunning bridal gown in raw silk",
    "price": 600,
    "image": "images/2nd page/pic2.jpg",
    "sizes": [38,40, 41, 42, 42.5]
  },
  {
    "code": "D03",
    "dress_name": "Lily Gown",
    "description": "A stunning bridal gown in raw silk and lace",
    "price": 600,
    "image": "images/2nd page/pic3.jpg",
    "sizes": [38,40, 41, 42, 42.5]
  },
  {
    "code": "D04",
    "dress_name": "Grace Gown",
    "description": "A stunning bridal gown in raw silk and lace",
    "price": 600,
    "image": "images/2nd page/pic4.jpg",
    "sizes": [38,40, 41, 42, 42.5]
  },
  {
    "code": "D05",
    "dress_name": "Anastasiia Gown",
    "description": "A stunning bridal gown in raw silk and lace",
    "price": 600,
    "image": "images/2nd page/pic5.jpg",
    "sizes": [38,40, 41, 42, 42.5]
  },
  {
    "code": "D06",
    "dress_name": "Hazel Gown",
    "description": "A stunning bridal gown in raw silk and lace",
    "price": 600,
    "image": "images/2nd page/pic6.jpg",
    "sizes": [38,40, 41, 42, 42.5]
  },
  {
    "code": "D07",
    "dress_name": "Issa Gown",
    "description": "A stunning bridal gown in raw silk and lace",
    "price": 600,
    "image": "images/2nd page/pic7.jpg",
    "sizes": [38,40, 41, 42, 42.5]
  },
  {
    "code": "D08",
    "dress_name": "Sophie Gown",
    "description": "A stunning bridal gown in raw silk and lace",
    "price": 600,
    "image": "images/2nd page/pic8.jpg",
    "sizes": [38, 40, 41, 42, 42.5]
  },
]

// Function to append a product to the HTML
function appendProductToHTML(product) {
  const container = document.getElementById("products-container");

  // Create a new div to hold the product information
  const productDiv = document.createElement("div");

    // Set the innerHTML of the productDiv with the product details
    productDiv.innerHTML = `
        <img class="product-img" src="${product.image}" alt="${product.description}">
        <p class="dress-name" >${product.dress_name}</p>
        <h2>Description: ${product.description}</h2>
        <p>Price: $${product.price}</p>
        <p>Sizes: ${product.sizes.join(', ')}</p>
        <button class="add-to-cart-btn" onclick="addToCart('${product.dress_code}')">Add to Cart</button>
    `;

    // Append the productDiv to the container
    container.appendChild(productDiv);
}

 // Function to handle adding to the cart (you can customize this part)
 function addToCart(dressCode) {
  // Add your logic for adding the item to the cart
  alert(`Added ${dressCode} to the cart!`);
 }

// Iterate through the array of dresses and append each one to the HTML
dresses.forEach(function(dress) {
    appendProductToHTML(dress);
}); 







const dloc = window.location.href;
const dsplt = dloc.split("?");
const sanitize = dsplt[1].split("=");


const dlen = sanitize.length;
const FinString = "";


for (const i = 1; i < dlen; i++) {
  FinString = FinString + sanitize[i];
}

const dressCode = window.atob(FinString);

var selectedDress = dresses.find(dress => dress.code === dressCode);

if (selectedDress) {
  var dressDetailsHTML = `
    <h3>${selectedDress.dress_name}</h3>
    <p>${selectedDress.description}</p>
    <p>Price: $${selectedDress.price}</p>
    <p>Sizes: ${selectedDress.sizes.join(', ')}</p>
    <img src="${selectedDress.image}" alt="${selectedDress.dress_name}">
  `;
  document.getElementById("dressDetails").innerHTML = dressDetailsHTML;
} else {
  document.getElementById("dressDetails").innerHTML = "Dress not found.";
}







/* function onLoad

const hamburger = document.querySelector(".burger-container");
const navMenu = document.querySelector(".navbar");

burger-container.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
 */

/* function toggleNav() {
    const nav = document.getElementById('navbarburger');
    nav.classList.toggle('change');

} */


/* function toggleParagraphs(paragraphsId) {
  const paragraphs = document.getElementById(paragraphsId);
  paragraphs.style.display = (paragraphs.style.display === 'none') ? 'block' : 'none';

  // Toggle the 'underline' class on the button
  if (paragraphs.style.display === 'block') {
    button.classList.add('underline');
} else {
    button.classList.remove('underline');
}

} */
