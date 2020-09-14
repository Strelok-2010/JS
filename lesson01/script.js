const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mous', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProductItem = (title = 'product', price = 0) => {
    return`
    <div class="product-item">
      <h3>${title}</h3>
      <p>${price}</p>
      <button class="by-btn"> Добавить в корзину </button>
    </div>`;
}
const renderProductList = (list = [{title: 'product', price: 0}]) => {
    const productList = list.map(({title,price}) => renderProductItem(title, price));
    document.querySelector('.product-list').innerHTML = productList.join('');
    // Если в метод join в качестве необязательного параметра разделителя мы указываем любой символ (либо не указываем вообще), то между элементами будет выводится символ/запятая (по умолчанию). В данном случае сепаратор указан пустым, ничего не выводится.
}

renderProductList(products);

