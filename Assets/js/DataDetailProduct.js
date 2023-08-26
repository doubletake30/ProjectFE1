document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (productId) {
        fetch('/ALL/Json/products.json')
            .then(response => response.json())
            .then(products => {
                const product = products.find(item => item.id === productId);
                if (product) {
                    updateProductDetails(product);
                } else {
                    console.error('Sản phẩm không tồn tại');
                }
            })
            .catch(error => console.error('Lỗi khi tải hoặc xử lý dữ liệu:', error));
    } else {
        console.error('Không cung cấp ID sản phẩm trong URL');
    }
});

function updateProductDetails(product) {
    const productNameElement = document.querySelector('.detailProduct__body--CardProductContainer-moreDetail-name');
    const productPriceElement = document.querySelector('.detailProduct__body--CardProductContainer-moreDetail-price');
    const productImageElement = document.querySelector('.product_image');
  
    productNameElement.textContent = product.name;
    productPriceElement.textContent = product.price;
    productImageElement.src = product.imageSrc;
}
