// Criando o carrinho como um modal lateral responsivo
    const cart = document.createElement("div");
    cart.id = "cart";
    cart.style.position = "fixed";
    cart.style.top = "0";
    cart.style.right = "-100%"; // Oculto por padrão
    cart.style.width = "400px";
    cart.style.maxWidth = "100%";
    cart.style.height = "100vh";
    cart.style.background = "#fff";
    cart.style.borderLeft = "2px solid #ddd";
    cart.style.padding = "15px";
    cart.style.boxShadow = "-3px 0px 10px rgba(0, 0, 0, 0.1)";
    cart.style.overflowY = "auto";
    cart.style.transition = "right 0.3s ease-in-out";
    cart.style.zIndex = "1000";
    document.body.appendChild(cart);

    // Título do carrinho
    const cartTitle = document.createElement("h2");
    cartTitle.textContent = "Meu Carrinho";
    cartTitle.style.textAlign = "center";
    cartTitle.style.marginBottom = "10px";
    cart.appendChild(cartTitle);

    // Lista de itens do carrinho
    const cartList = document.createElement("ul");
    cartList.style.listStyle = "none";
    cartList.style.padding = "0";
    cartList.style.marginBottom = "20px";
    cart.appendChild(cartList);

    // Exibição do total
    const totalDisplay = document.createElement("p");
    totalDisplay.classList.add("total");
    totalDisplay.style.fontWeight = "bold";
    totalDisplay.style.textAlign = "center";
    cart.appendChild(totalDisplay);

    // Botão de fechar carrinho
    const closeButton = document.createElement("button");
    closeButton.textContent = "Fechar Carrinho";
    closeButton.style.display = "block";
    closeButton.style.width = "100%";
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "15px";
    closeButton.style.background = "#d9534f";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "18px";
    closeButton.style.borderRadius = "5px";
    closeButton.style.position = "sticky";
    closeButton.style.bottom = "0";
    closeButton.style.left = "0";
    closeButton.addEventListener("click", () => {
        cart.style.right = "-100%"; // Fecha o carrinho
    });
    cart.appendChild(closeButton);

    // Selecionando botões e contador do carrinho
    const cartCount = document.getElementById("cart-count");
    const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
    const cartButton = document.querySelector(".button-footer");

    let cartItems = [];
    let cartTotal = 0;

    // Adicionar itens ao carrinho
    addToCartBtns.forEach(button => {
        button.addEventListener("click", (e) => {
            const productName = e.currentTarget.getAttribute("data-name");
            const productPrice = parseFloat(e.currentTarget.getAttribute("data-price"));

            // Adicionar item ao array do carrinho
            cartItems.push({ name: productName, price: productPrice });
            cartTotal += productPrice;

            // Atualizar carrinho
            updateCart();
        });
    });

    // Atualizar exibição do carrinho
    function updateCart() {
        cartList.innerHTML = ''; // Limpa a lista antes de atualizar

        cartItems.forEach((item, index) => {
            const li = document.createElement("li");
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";
            li.style.padding = "10px";
            li.style.borderBottom = "1px solid #ddd";
            li.style.fontSize = "16px";

            const itemText = document.createElement("span");
            itemText.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            li.appendChild(itemText);

            // Botão para remover item
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.style.border = "none";
            removeBtn.style.background = "transparent";
            removeBtn.style.cursor = "pointer";
            removeBtn.style.color = "#d9534f";
            removeBtn.style.fontSize = "18px";

            removeBtn.addEventListener("click", () => removeItem(index));

            li.appendChild(removeBtn);
            cartList.appendChild(li);
        });

        totalDisplay.textContent = `Total: R$ ${cartTotal.toFixed(2)}`;
        cartCount.textContent = cartItems.length;
    }

    // Remover item do carrinho
    function removeItem(index) {
        cartTotal -= cartItems[index].price;
        cartItems.splice(index, 1);
        updateCart();
    }

    // Exibir o carrinho com efeito de slide
    cartButton.addEventListener("click", () => {
        cart.style.right = cart.style.right === "0px" ? "-100%" : "0px";
    });

    // Ajustes de responsividade
    function adjustCartForMobile() {
        if (window.innerWidth <= 480) {
            cart.style.width = "100vw"; // Ocupa toda a tela em celulares
            cart.style.borderLeft = "none";
        } else {
            cart.style.width = "400px"; // Padrão para desktops
            cart.style.borderLeft = "2px solid #ddd";
        }
    }

    // Detectar mudança de tamanho da tela
    window.addEventListener("resize", adjustCartForMobile);
    adjustCartForMobile();
