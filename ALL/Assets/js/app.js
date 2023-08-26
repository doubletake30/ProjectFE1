// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
  });
  
  function fetchProducts() {
    fetch('/ALL/Json/products.json')
      .then(response => response.json())
      .then(products => {
        const listProductContainer = document.querySelector('.list_product');
  
        products.forEach(product => {
          const liProduct = document.createElement('li');
          liProduct.className = 'li_product';
  
          const productContainer = document.createElement('div');
          productContainer.className = 'product__container';
  
          const productLink = document.createElement('a');
          productLink.href = `/ALL/Page/DetailProduct.html?id=${product.id}`; 
          productLink.className = 'product__link';

  
          const productImage = document.createElement('img');
          productImage.src = product.imageSrc;
          productImage.alt = '';
          productImage.className = 'product__image';
  
          const productInforButtonContainer = document.createElement('div');
          productInforButtonContainer.className = 'product_infor_button__container';
  
          const productInforContainer = document.createElement('div');
          productInforContainer.className = 'product_infor__container';
  
          const productInforLink = document.createElement('a');
          productInforLink.href = `/ALL/Page/DetailProduct.html?id=${product.id}`; 
          productInforLink.className = 'product_infor';
  
          const inforContainer = document.createElement('div');
          inforContainer.className = 'infor_container';
  
          const nameContainer = document.createElement('div');
          nameContainer.className = 'name_container';
  
          const productName = document.createElement('p');
          productName.className = 'product_name';
          productName.textContent = product.name;
  
          const priceContainer = document.createElement('div');
          priceContainer.className = 'price_container';
  
          const productPrice = document.createElement('p');
          productPrice.className = 'product_price';
          productPrice.textContent = product.price;

          const addButtonContainer = document.createElement('div');
          addButtonContainer.className = 'button__container';

          const addButton = document.createElement('button');
          addButton.className = 'product_button';
          addButton.innerHTML = '<span class="product_button__title">Add to Cart</span>';

  
          nameContainer.appendChild(productName);
          priceContainer.appendChild(productPrice);
          inforContainer.appendChild(nameContainer);
          inforContainer.appendChild(priceContainer);
          productInforLink.appendChild(inforContainer);
          productInforContainer.appendChild(productInforLink);
          productInforButtonContainer.appendChild(productInforContainer);
          addButtonContainer.appendChild(addButton);
          productInforButtonContainer.appendChild(addButtonContainer);
          productLink.appendChild(productImage);
          productContainer.appendChild(productLink);
          productContainer.appendChild(productInforButtonContainer);
          liProduct.appendChild(productContainer);


          listProductContainer.appendChild(liProduct);
        });
      })
      .catch(error => console.error('Lỗi khi tải hoặc xử lý dữ liệu:', error));
  }
  document.addEventListener('DOMContentLoaded', () => {
    const categoryButton = document.querySelector('.category__button');
    const categoryListOptionContainer = document.getElementById('categoryListOptionContainer');
    const listContainerLi = document.querySelector('.list_container>li');

    categoryButton.addEventListener('click', () => {
        if (categoryListOptionContainer.style.display === 'block') {
            categoryListOptionContainer.style.display = 'none';
            listContainerLi.style.paddingBottom = '0';
        } else {
            categoryListOptionContainer.style.display = 'block';
            listContainerLi.style.paddingBottom = '20px';
        }
    });
});

  