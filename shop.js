let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    updateCart();  
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let cartItem = document.createElement("li");

        let itemImage = document.createElement("img");
        let imageName = item.name.toLowerCase().replace(/\s+/g, "-") + ".jpg";
        itemImage.src = "images/" + imageName;
        itemImage.alt = item.name;
        itemImage.style.width = "50px";
        itemImage.style.height = "50px";
        itemImage.style.marginRight = "10px";
        itemImage.style.borderRadius = "5px";

        let itemText = document.createElement("span");
        itemText.textContent = `${item.name} - ₹${item.price}`;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.style.padding = "5px";
        removeButton.style.cursor = "pointer";
        removeButton.addEventListener("click", function () {
            removeFromCart(index); 
        });

        cartItem.appendChild(itemImage);
        cartItem.appendChild(itemText);
        cartItem.appendChild(removeButton);

        total += item.price;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        let product = this.closest(".product");
        let name = product.getAttribute("data-name");
        let price = parseInt(product.getAttribute("data-price"));
        addToCart(name, price);
    });
});

document.getElementById("cart-button").addEventListener("click", function () {
    let cartSection = document.getElementById("cart");
    cartSection.style.display = (cartSection.style.display === "none" || cartSection.style.display === "") ? "block" : "none";
});
