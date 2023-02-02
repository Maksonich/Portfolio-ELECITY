///show products cart
function productsBlock (sku){
       let item = document.querySelector("template")
       let cloneItem =  item.content.cloneNode(true);
       cloneItem.querySelector(".nameProduct").innerHTML = sku.nameProduct;
       cloneItem.querySelector(".image-product img").setAttribute("src", `./images/product/${sku.imageProduct}`);
       getBadgeProduct(sku.sale , ".sale-prod", cloneItem)
       getBadgeProduct(sku.new , ".new", cloneItem)
       getBadgeProduct(sku.present , ".present", cloneItem)
       let currentPrice; 
       if (sku.sale){
              currentPrice = sku.price - ((sku.price / 100) * Number(sku.sale.match(/\d+/)) )
              cloneItem.querySelector(".new-price").innerHTML =  currentPrice + " ₴";
              cloneItem.querySelector(".old-price").innerHTML = sku.price + " ₴";
       }else{
       cloneItem.querySelector(".new-price").innerHTML = sku.price + " ₴";
       }
       if(sku.availability){
              cloneItem.querySelector(".btn-buy").innerHTML = "Купить"
       } else {
              cloneItem.querySelector(".btn-buy").innerHTML = "Нет в наличии";
              cloneItem.querySelector(".btn-buy").classList.add("not-availability");
              cloneItem.querySelector(".btn-buy").classList.remove("btn-buy");
       }
       let otherInformation = cloneItem.querySelector(".other-information")
       otherInformation.querySelector(".brand-sku").innerHTML = sku.brand;
       otherInformation.querySelector(".color").innerHTML = sku.color;
       otherInformation.querySelector(".energy").innerHTML = sku.energyConsumption;
       otherInformation.querySelector(".code-product").innerHTML = sku.codeProduct;


       // let raiting = cloneItem.querySelectorAll("raiting__star");
       // for ( let i = 0; i < raiting.length;i++){
       //       raiting[i].setAttribute('checked', 'checekd')
       // }
       // let otherInformation = document.createElement("template");

       // raitingProduct(sku.raiting)
             
              
       

       // cloneItem.append(otherInformation)
       cloneItem.querySelector(".review .amount-review").innerHTML = sku.comments;
       return cloneItem;
}
//  function raitingProduct( raiting){ 
//        let raitBlock = document.querySelectorAll(".product-block .raiting__group")
//        // console.log(raiting)
//        for (let i = 0 ; i < raitBlock.length;i++){
//              console.log(raitBlock[i])
//        }
      
       
//  }

///show products block
products.forEach(sku =>{
    let productsBuy = productsBlock(sku)
    document.querySelector(".product-block ul").append(productsBuy);
})
products.forEach(sku =>{
    let productsBuy = productsBlock(sku)
    document.querySelector(".product-block-two ul").append(productsBuy);

})
/////////////////
// products.forEach(sku =>{
//        let productsBuy = productsBlock(sku)


//        console.log(productsBuy)
//showQuantityProductsOnPage(document.querySelector(".product-block ul"),8,productsBuy)


//    })
//////////////////
// function showQuantityProductsOnPage (arr, quantitySku,resultFunk ){
//        for (let i = 0; i < quantitySku; i++) {
//               arr.append(resultFunk);
//        }
// }
/////////////////////////////////////////////////////////////////////////
//scroll top button
let scrolled;
let timer;
document.querySelector("#scroll_top").addEventListener("click", function(){
       let scrolled = window.pageYOffset;
       console.log(scrolled)
       scrollToTop();
       function scrollToTop (){
              if(scrolled > 0){
                     window.scrollTo(0, scrolled)
                     scrolled = scrolled - 100;
                     timer = setTimeout(scrollToTop, 5);
              } else {
                     clearTimeout(timer);
                     window.scrollTo(0,0);
              }
       }
})
/////////////
//show more information about product
document.querySelector(".product-block").addEventListener("click", function openQuickView(event){

       event.preventDefault()
       if(event.target.classList.contains("quickView")){
              document.querySelector(".popup_catalog-quick-view").classList.add("open");
              document.querySelector("#wrapper").classList.add("popup");
              
              viewMoreInfoProduct(event.target.closest(".main-product"))
       }
})
document.querySelector(".popup_catalog-quick-view .blocker").addEventListener("click", function closeModalWindLoginPers() {
       document.querySelector(".popup_catalog-quick-view").classList.remove("open");
         document.querySelector("#wrapper").classList.remove("popup");
})

function  viewMoreInfoProduct(element){   
       let blockProduct = document.querySelector("#view-more-info");
       blockProduct.querySelector(".naming-product").innerHTML = element.querySelector(".nameProduct").innerHTML;
      
       let offer = element.querySelector(".special-offer")
       showBadgeProduct(offer.querySelector(".sale-prod"), blockProduct.querySelector(".sale-prod"))
       showBadgeProduct(offer.querySelector(".new"), blockProduct.querySelector(".new"))
       showBadgeProduct(offer.querySelector(".present"), blockProduct.querySelector(".present"))
       
       if (!element.querySelector(".btn-buy")){
              blockProduct.querySelector(".availability span").innerHTML = "Нет в наличии";
              blockProduct.querySelector(".availability span").style.color  = "red";
              blockProduct.querySelector(".availability img").style.display = "none";
              blockProduct.querySelector(".buttons-buy .btn-buy").classList.add("not-availability");
              blockProduct.querySelector(".buttons-buy .btn-buy").innerHTML = "Нет в наличии";


       }else {
              blockProduct.querySelector(".availability span").innerHTML = "В наличие";
              blockProduct.querySelector(".availability img").style.display = "";
              blockProduct.querySelector(".availability span").style.color  = "#1E1E1E";
              blockProduct.querySelector(".buttons-buy .btn-buy").classList.remove("not-availability");
              blockProduct.querySelector(".buttons-buy .btn-buy").innerHTML = "Купить";
       }
       blockProduct.querySelector(".new-price").innerHTML = element.querySelector(".new-price").innerHTML;
       blockProduct.querySelector(".old-price").innerHTML = element.querySelector(".old-price").innerHTML;
       blockProduct.querySelector(".code").innerHTML = element.querySelector(".code-product").innerHTML;
       
       let imgAtrr = element.querySelector(".image-product img").getAttribute("src")
       blockProduct.querySelector(".big-photo-product img").setAttribute("src", `${imgAtrr}`)
       for (itemImg of blockProduct.querySelectorAll(".photo-ptoducts img")){
             
              itemImg.setAttribute("src", `${imgAtrr}`)
       } 

}
function showBadgeProduct(elem, usblock){
       if (elem.innerHTML){
              usblock.innerHTML  = elem.innerHTML
              usblock.style.display = ""
       } else{
              usblock.style.display = "none"
       }
}
////////switch big photo
document.querySelector("ul.little-photo").addEventListener("click", function openQuickView(event){
       
       if(event.target.tegName = "li"){
              // let li = event.target.closest("li")
              // for (const i of li){
              //        i.classList.remove("active-photo")
              // }
              let newValue =  event.target.getAttribute("src")
              document.querySelector(".big-photo-product img").setAttribute("src", newValue)
              // li.classList.add("active-photo")
              // console.log()
       }
       else{
              return
       }
     
})


///////////add product in cart buy
function addInCartProducts (){
       let cartBuy = document.querySelector("#buy-list");
       let amountBuy = cartBuy.querySelector("#amountShoping");
       let quantityMany = document.querySelector("#amountPrice");
       let userArrowProduct = new Array();
       // localStorage.setItem("sumBuy", quantityMany.innerHTML)
       // localStorage.setItem("cartAmountBuy",amountBuy.innerHTML)
       document.querySelector(".product-block").addEventListener("click", function (event){
       
       if (event.target.classList.contains("btn-buy")) { 
              let itemProduct = event.target.closest(".main-product")
              amountBuy.innerHTML = ++amountBuy.innerHTML // пишем количество товаров в козине
              localStorage.setItem("cartAmountBuy", amountBuy.innerHTML)// записуем в память

              let priceProduct = parseInt(itemProduct.querySelector(".new-price").innerHTML.match(/\d+/)) //берем из продукта цену и только цыфры
              let res = priceProduct + Number(localStorage.getItem("sumBuy"))// вічисляем стоимость всех продуктов в корзине
              localStorage.setItem("sumBuy", res)// записіваем в память
              quantityMany.innerHTML = res + "₴"// віводим на єкран
              
              let objectProduct = new Object();
              
              let productCodeCardBuy = itemProduct.querySelector(".code-product").innerHTML;
              let nameProductCartBuy = itemProduct.querySelector(".nameProduct").innerHTML;
              let newPrice = itemProduct.querySelector(".new-price").innerHTML;
              let oldPrice = itemProduct.querySelector(".old-price").innerHTML;
              let addressIMG = itemProduct.querySelector(".image-product img").getAttribute("src");

                     // let quantityOfUnitsNum = 0
                     
                     // if (productCodeCardBuy === productCodeCardBuy) {
                     //        quantityOfUnitsNum++; 
                     //        return
                     // }
                    

                     objectProduct.code  = productCodeCardBuy;
                     objectProduct.nameProduct  = nameProductCartBuy;
                     objectProduct.newPrice  = newPrice ;
                     objectProduct.oldPrice  = oldPrice;
                     objectProduct.addressIMG  = addressIMG;   
                     // objectProduct.quantityOfUnits = quantityOfUnitsNum;

                     userArrowProduct.push(objectProduct);
                    
                     
                     
                      

                     
                     
       }
       let myBuyProducts = JSON.stringify(userArrowProduct)
       localStorage.setItem("myProdBuyLocal" , myBuyProducts);
       })
       document.querySelector(".product-block-two").addEventListener("click", function (event){
       
              if (event.target.classList.contains("btn-buy")) { 
                     let itemProduct = event.target.closest(".main-product")
                     amountBuy.innerHTML = ++amountBuy.innerHTML // пишем количество товаров в козине
                     localStorage.setItem("cartAmountBuy", amountBuy.innerHTML)// записуем в память
       
                     let priceProduct = parseInt(itemProduct.querySelector(".new-price").innerHTML.match(/\d+/)) //берем из продукта цену и только цыфры
                     let res = priceProduct + Number(localStorage.getItem("sumBuy"))// вічисляем стоимость всех продуктов в корзине
                     localStorage.setItem("sumBuy", res)// записіваем в память
                     quantityMany.innerHTML = res + "₴"// віводим на єкран
                     
                     let objectProduct = new Object();
                     
                     let productCodeCardBuy = itemProduct.querySelector(".code-product").innerHTML;
                     let nameProductCartBuy = itemProduct.querySelector(".nameProduct").innerHTML;
                     let newPrice = itemProduct.querySelector(".new-price").innerHTML;
                     let oldPrice = itemProduct.querySelector(".old-price").innerHTML;
                     let addressIMG = itemProduct.querySelector(".image-product img").getAttribute("src");
       
       
                     
                           
                            
       
                            objectProduct.code  = productCodeCardBuy;
                            objectProduct.nameProduct  = nameProductCartBuy;
                            objectProduct.newPrice  = newPrice ;
                            objectProduct.oldPrice  = oldPrice;
                            objectProduct.addressIMG  = addressIMG;   
                            
                            
                             userArrowProduct.push(objectProduct);
       
                            
                            
              }
              let myBuyProducts = JSON.stringify(userArrowProduct)
              localStorage.setItem("myProdBuyLocal" , myBuyProducts);
              })
       
}

addInCartProducts()
///////////////////////////////////////
//slidershow homepage main title
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//////////////////////////////////
// function getCgapterAndSubChapterProduct (){
//        let nameSearch;  
//        let nameSubsearch;
//          document.querySelector(".all-category-menu").addEventListener("click" , function(event){
              
//                 if (event.target.tagName == "A"){
//                        nameSearch = event.target.innerHTML
//                       localStorage.setItem("chapter", nameSearch)
                       
//                 }
                
//          }) 
       
//          for (const item of document.querySelectorAll(".category-info")){
//          item.addEventListener("click" , function(e){
//                   if (e.target.tagName == "A"){
                      
//                        nameSubsearch = e.target.innerHTML
//                        localStorage.setItem("subChapter", nameSubsearch)
                       
//                         }
//          }) }


//   }