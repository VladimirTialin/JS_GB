

dataProducts.forEach(element => {
    const cardBox = document.querySelector('.card');

    const purchases = document.createElement('div');
    purchases.classList.add('card__purchases');

    const product = document.createElement('div');
    product.classList.add('card__product');

    const imageContent = document.createElement('img');
    imageContent.src = element.image;

    const content = document.createElement('div');
    content.classList.add('card__content');

    const h1El = document.createElement('h1');
    h1El.classList.add('card__head');
    h1El.textContent = element.title;

    const textBoxEl = document.createElement('div');
    textBoxEl.classList.add('card__text');

    const textElPrice = document.createElement('p');
    textElPrice.textContent = `Price: `;

    const price = document.createElement('span');
    price.classList.add('card__text_price');
    price.textContent = `$${element.price}`;

    const textElColor = document.createElement('p');
    textElColor.textContent = `Color: ${element.color}`;

    const textElSize = document.createElement('p');
    textElSize.textContent = `Size: ${element.size}`;

    const quantity = document.createElement('p');
    quantity.classList.add('card__text_quantity');
    quantity.textContent = `Quantity: `;

    const countProduct = document.createElement('input');
    countProduct.type = 'number';
    countProduct.setAttribute('value', element.quantity);
    countProduct.classList.add('card__text_count');

    const addToCart = document.createElement('button');
    addToCart.classList.add('card__button');
    addToCart.textContent = 'Add to Cart'
    addToCart.setAttribute('data-id', element.id);

    cardBox.appendChild(purchases);
    purchases.appendChild(product);
    product.append(imageContent);
    purchases.appendChild(content);
    content.appendChild(h1El);
    content.appendChild(textBoxEl);
    textBoxEl.appendChild(textElPrice);
    textElPrice.appendChild(price);
    textBoxEl.appendChild(textElColor);
    textBoxEl.appendChild(textElSize);
    textBoxEl.appendChild(quantity);
    textBoxEl.appendChild(addToCart);
    quantity.appendChild(countProduct);


});

function addToCart(productId) {
    const product = dataProducts.find(item => item.id === parseInt(productId));
    if (product) {
        const productItem = dataProducts.filter(x => x.id === parseInt(productId));
        console.log(productItem);
        const cardBox = document.querySelector('.cart-list');
        cardBox.classList.add('center');

        const purchases = document.createElement('div');
        purchases.classList.add('cart-list__purchases');

        const product = document.createElement('div');
        product.classList.add('cart-list__product');

        const imageContent = document.createElement('img');
        imageContent.src = productItem[0].image;

        const content = document.createElement('div');
        content.classList.add('cart-list__content');

        const h1El = document.createElement('h1');
        h1El.classList.add('cart-list__head');
        h1El.textContent = productItem[0].title;

        const textBoxEl = document.createElement('div');
        textBoxEl.classList.add('cart-list__text');

        const textElPrice = document.createElement('p');
        textElPrice.textContent = `Price: `;

        const price = document.createElement('span');
        price.classList.add('cart-list__text_price');
        price.textContent = `$${productItem[0].price}`;

        const textElColor = document.createElement('p');
        textElColor.textContent = `Color: ${productItem[0].color}`;

        const textElSize = document.createElement('p');
        textElSize.textContent = `Size: ${productItem[0].size}`;

        const quantity = document.createElement('p');
        quantity.classList.add('cart-list__text_quantity');
        quantity.textContent = `Quantity: `;

        const countProduct = document.createElement('input');
        countProduct.type = 'number';
        countProduct.setAttribute('value', productItem[0].quantity);
        countProduct.classList.add('cart-list__text_count');

        const close = document.createElement('a');
        close.href = "#";
        close.textContent = 'X';
        close.classList.add('cart-list__close');

        cardBox.appendChild(purchases);
        purchases.appendChild(product);
        product.append(imageContent);
        purchases.appendChild(content);
        content.appendChild(h1El);
        content.appendChild(textBoxEl);
        textBoxEl.appendChild(textElPrice);
        textElPrice.appendChild(price);
        textBoxEl.appendChild(textElColor);
        textBoxEl.appendChild(textElSize);
        textBoxEl.appendChild(quantity);
        quantity.appendChild(countProduct);
        purchases.appendChild(close);
    }

};

document.addEventListener('click', (event) => {
    if (event.target &&
        event.target.classList.contains('card__button')) {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    }
    else if (event.target &&
        event.target.classList.contains('cart-list__close')) {
        const purchases = document.querySelector('.cart-list__purchases');  
        purchases.remove();
    }
});