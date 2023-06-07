// NAAM PRIJS EN PLAATJE LATEN ZIEN
fetch('./json/drank-products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementsByClassName('product');
    
    for (let i = 0; i < 12; i++) {
        
        let productName = data.products[i].name;
        let productPrice = data.products[i].price;
        let productImg = data.products[i].img;
        
        let listItem = productList[i].children;

        let nameElement = listItem[1];
        let priceElement = listItem[2];
        let imgElement = listItem[0];

        nameElement.innerText = productName;
        priceElement.innerText = "€" + productPrice;
        imgElement.src = productImg;
        }
    })

// CHECKBOX FILTERS
const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

function updateFilter() {
  const selectedFilters = [];

  filters.forEach(function(filter) {
    if (filter.checked) {
      selectedFilters.push(filter.id);
    }
    
  });

  const filteredProducts = [];

  products.forEach(function(product) {
    const soort = product.getAttribute('data-soort');
    const hoeveelheid = product.getAttribute('data-hoeveelheid');
    const merk = product.getAttribute('data-merk');

    if (
      selectedFilters.includes(soort) ||
      selectedFilters.includes(hoeveelheid) ||
      selectedFilters.includes(merk) ||
      selectedFilters.length === 0
    ){
      product.style.display = "flex";
    }
    else{
        product.style.display = "none";
    }
  });
}

filters.forEach(function(filter) {
  filter.addEventListener('change', updateFilter);
});