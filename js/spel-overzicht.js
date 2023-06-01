fetch('./json/products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementsByClassName('product');
    
    for (let i = 0; i < 12; i++) {
        
        let productName = data.products[i].name;
        let productPrice = data.products[i].price;
        // let productImg = data.products[i].img;
          
        
        let listItem = productList[i].children;

        let nameElement = listItem[1];
        let priceElement = listItem[2];
        // let imgElement = listItem[0];

        nameElement.innerText = productName;
        priceElement.innerText = productPrice;
        // imgElement.src= productImg;
        }
})