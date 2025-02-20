/*Задание
1. Получите данные по адресу https://fakestoreapi.com/products.
2. Создайте файл data.js.
3. В файле data.js создайте переменную dataJSON, которая будет
хранить эти данные в формате JSON.
4. Создайте вторую переменную data, в которой сохраните данные в
формате массива на основе dataJSON.
5. Создайте файл index.html.
6. Подключите data.js в index.html.
7. Сформируйте контент из данных (картинка, заголовок, описание,
цена и кнопка “Add to Cart”).
8. Добавьте данный контент в верстку в виде списка ul и li.
9. Добавьте стили при необходимости (по желанию).*/

data.forEach(element => {
    const productList=document.querySelector('#product-list');
    
    const product=document.createElement('li');
    product.classList.add('product');

    const productImg=document.createElement('img');
    productImg.classList.add('product__img');

    const h1El=document.createElement('h1');
    productImg.classList.add('product__head');

    const textEl=document.createElement('p');
    productImg.classList.add('product__text');

    const price=document.createElement('p');
    price.classList.add('product__price');

    const button=document.createElement('button');
    button.textContent='Add to Cart';
    button.classList.add('product__button');

    productList.appendChild(product);

    product.appendChild(productImg);
    productImg.src=element.image;
    
    product.appendChild(h1El);
    h1El.textContent=element.title;

    product.appendChild(textEl);
    textEl.textContent=element.description;

    product.appendChild(price);
    price.textContent= ` Price: ${element.price} $`;

    product.appendChild(button);

});
