const menu = document.getElementById("menu")
const btnFooter = document.getElementById("button-footer")
const cartModal = document.getElementById("modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("endereco")
const addressAviso = document.getElementById("endereco-aviso")

btnFooter.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

closeModalBtn.addEventListener("click", function() {
    cartModal.style.display = "none"
})
