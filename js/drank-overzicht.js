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
        priceElement.innerText = productPrice;
        imgElement.src= productImg;
        }
})

// FILTERS WERKEND MAKEN MET VEEL TE VEEL CODE
let allProducts = document.getElementsByClassName("product");
let filters = document.getElementsByClassName("filter");

// FILTERS PER SOORT:

  // BITTER
let bitterFilter = document.getElementById("checkbox-bitter");
bitterFilter.onchange = function(){
  if(bitterFilter.checked === true){
      for (let i = 0; i < allProducts.length; i++){
          if (allProducts[i].dataset.soort === "Bitter"){
              allProducts[i].style.display = "flex";
          }}}
    
  else{
      for (let i = 0; i < allProducts.length; i++){
          if (allProducts[i].dataset.soort === "Bitter"){
              allProducts[i].style.display = "none";
          }}}}

  // COCKTAILS
let cocktailFilter = document.getElementById("checkbox-cocktails");
cocktailFilter.onchange = function(){
  if(cocktailFilter.checked === true){
      for (let i = 0; i < allProducts.length; i++){
          if (allProducts[i].dataset.soort === "Cocktails"){
              allProducts[i].style.display = "flex";
          }}}
    
  else{
      for (let i = 0; i < allProducts.length; i++){
          if (allProducts[i].dataset.soort === "Cocktails"){
              allProducts[i].style.display = "none";
          }}}}


  // MIXLIKEUR
  let mixlikeurFilter = document.getElementById("checkbox-mixlikeur");
  mixlikeurFilter.onchange = function(){
    if(mixlikeurFilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Mixlikeur"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Mixlikeur"){
                allProducts[i].style.display = "none";
            }}}}


  // TEQUILA
  let tequilaFilter = document.getElementById("checkbox-tequila");
  tequilaFilter.onchange = function(){
    if(tequilaFilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Tequila"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Tequila"){
                allProducts[i].style.display = "none";
            }}}}


  // WODKA
  let wodkaFilter = document.getElementById("checkbox-wodka");
  wodkaFilter.onchange = function(){
    if(wodkaFilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Wodka"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Wodka"){
                allProducts[i].style.display = "none";
            }}}}


  // FLAVOURED WODKA
  let flavouredWodkaFilter = document.getElementById("checkbox-flavoured-Wodka");
  flavouredWodkaFilter.onchange = function(){
    if(flavouredWodkaFilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Flavoured-Wodka"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Flavoured-Wodka"){
                allProducts[i].style.display = "none";
            }}}}

  // RUM
  let RumFilter = document.getElementById("checkbox-Rum");
  RumFilter.onchange = function(){
    if(RumFilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Rum"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Rum"){
                allProducts[i].style.display = "none";
            }}}}

  // FLAVOURD RUM
  let flavouredRumFilter = document.getElementById("checkbox-flavoured-Rum");
  flavouredRumFilter.onchange = function(){
    if(flavouredRumFilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Flavoured-Rum"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.soort === "Flavoured-Rum"){
                allProducts[i].style.display = "none";
            }}}}

// FILTERS PER HOEVEELHEID:

  // 150 CL
  let honderdVijftigCLfilter = document.getElementById("checkbox-150CL");
  honderdVijftigCLfilter.onchange = function(){
    if(honderdVijftigCLfilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "150CL"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "150CL"){
                allProducts[i].style.display = "none";
            }}}}

  // 100 CL
  let honderdCLfilter = document.getElementById("checkbox-100CL");
  honderdCLfilter.onchange = function(){
    if(honderdCLfilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "100CL"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "100CL"){
                allProducts[i].style.display = "none";
            }}}}

  // 70 CL
  let zeventigCLfilter = document.getElementById("checkbox-70CL");
  zeventigCLfilter.onchange = function(){
    if(zeventigCLfilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "70CL"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "70CL"){
                allProducts[i].style.display = "none";
            }}}}


  // 50 CL
  let vijftigCLfilter = document.getElementById("checkbox-50CL");
  vijftigCLfilter.onchange = function(){
    if(vijftigCLfilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "50CL"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "50CL"){
                allProducts[i].style.display = "none";
            }}}}

  // 35 CL
  let vijfenDertigCLfilter = document.getElementById("checkbox-35CL");
  vijfenDertigCLfilter.onchange = function(){
    if(vijfenDertigCLfilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "35CL"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.hoeveelheid === "35CL"){
                allProducts[i].style.display = "none";
            }}}}

// FILTERS VOOR MERKEN

  // ABSOLUT
  let absolutfilter = document.getElementById("checkbox-absolut");
  absolutfilter.onchange = function(){
    if(absolutfilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Absolut"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Absolut"){
                allProducts[i].style.display = "none";
            }}}}

  // BACARDI
  let bacardifilter = document.getElementById("checkbox-bacardi");
  bacardifilter.onchange = function(){
    if(bacardifilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Bacardi"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Bacardi"){
                allProducts[i].style.display = "none";
            }}}}

  // COPPA COCKTAILS
  let coppafilter = document.getElementById("checkbox-coppaCocktails");
  coppafilter.onchange = function(){
    if(coppafilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Coppa-Cocktails"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Coppa-Cocktails"){
                allProducts[i].style.display = "none";
            }}}}

  // SIERRA
  let sierrafilter = document.getElementById("checkbox-sierra");
  sierrafilter.onchange = function(){
    if(sierrafilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Sierra"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Sierra"){
                allProducts[i].style.display = "none";
            }}}}

  // SMIRNHOFF
  let smirnhofffilter = document.getElementById("checkbox-smirnhoff");
  smirnhofffilter.onchange = function(){
    if(smirnhofffilter.checked === true){
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Smirnhoff"){
                allProducts[i].style.display = "flex";
            }}}
      
    else{
        for (let i = 0; i < allProducts.length; i++){
            if (allProducts[i].dataset.merk === "Smirnhoff"){
                allProducts[i].style.display = "none";
            }}}}