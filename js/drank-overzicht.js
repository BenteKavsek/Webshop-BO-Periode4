// NAAM PRIJS EN PLAATJE LATEN ZIEN
fetch('./json/drank-products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementsByClassName('product');
    
    for (let i = 0; i < 12; i++) {
        
        let productName = data.products[i].name;
        let productPrice = data.products[i].price;
        let productImg = data.products[i].img;

        console.log(productName);
        console.log(productPrice);
        console.log(productImg);
        
        let listItem = productList[i].children;

        let nameElement = listItem[1];
        let priceElement = listItem[2];
        let imgElement = listItem[0];

        nameElement.innerText = productName;
        priceElement.innerText = "€" + productPrice;
        imgElement.src = productImg;
        }
})


// CHECKBOX FILTERS OPHALEN
const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

// FUNCTION OM LIST TE MAKEN WELKE CHECKED ZIJN
function updateFilter() {
  const selectedFilters = [];
  
  
  
  filters.forEach(function(filter) {
    if (filter.checked) {
      selectedFilters.push(filter.id);
      const active_filters = document.getElementsByClassName('active-filters');
    
      console.log(active_filters);
      console.log(selectedFilters);
    
      active_filters.innerText = "Product filters: " + selectedFilters;
    }
    
    // ACTIEVE FILTERS LIJSTJE
    
  });
  
// PRODUCTEN VERGELIJKEN MET FILTERS
  products.forEach(function(product) {
    const soort = product.getAttribute('data-soort');
    const hoeveelheid = product.getAttribute('data-hoeveelheid');
    const merk = product.getAttribute('data-merk');
    
    if(
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


// ALS ER IETS VERANDERD BIJ DE FILTERS ROEP FUNCTIE AAN 
filters.forEach(function(filter) {
  filter.addEventListener('change', updateFilter);
});


// FILTERS DROPDOWN MENUTJE
function showFilters_soort() {
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < 8; i++) {
    if(options[i].style.display === "none"){
      options[i].style.display = "flex";
    }
    else{
      options[i].style.display = "none"
    }
  }
}

function showFilters_hoeveelheid() {
  var options = document.getElementsByClassName("option");
  for (var i = 8; i < 13; i++) {
    if(options[i].style.display === "none"){
      options[i].style.display = "flex";
    }
    else{
      options[i].style.display = "none"
    }
  }
}

function showFilters_merk() {
  var options = document.getElementsByClassName("option");
  for (var i = 13; i < 19; i++) {
    if(options[i].style.display === "none"){
      options[i].style.display = "flex";
    }
    else{
      options[i].style.display = "none"
    }
  }
}

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";
  setTimeout(function() {
    hidePopup();
  }, 1500);
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
