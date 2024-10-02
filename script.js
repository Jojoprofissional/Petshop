function addToCart(event) {
    const product = event.target.parentNode;
    const productName = product.querySelector('h2').innerText;
    const productImage = product.querySelector('img').src;
    const productPrice = product.querySelector('p:nth-child(3)').innerText;
  
    // Cria um objeto para representar o produto
    const productData = {
      name: productName,
      image: productImage,
      price: productPrice
    };
  
    // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Adiciona o produto ao carrinho
    cart.push(productData);
  

  
    // Salva o carrinho atualizado de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const buyButtons = document.querySelectorAll('.buy-btn');
  
  buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });