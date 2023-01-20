
function productsBlock (sku){
      let item = document.querySelector("template ")
       let cloneItem =  item.content.cloneNode(true);
       cloneItem.querySelector(".nameProduct").innerHTML = sku.nameProduct;
       cloneItem.querySelector(".image-product img").setAttribute("src", `./images/product/${sku.imageProduct}`);
       getBadgeProduct(sku.sale , ".sale-prod", cloneItem)
       getBadgeProduct(sku.new , ".new", cloneItem)
       getBadgeProduct(sku.present , ".present", cloneItem)
       let currentPrice; 
       if (sku.sale){
              currentPrice = sku.price - ((sku.price / 100) * Number(sku.sale.match(/\d+/)) )
              cloneItem.querySelector(".new-price").innerHTML =  currentPrice + " ₽";
              cloneItem.querySelector(".old-price").innerHTML = sku.price;
       }else{
       cloneItem.querySelector(".new-price").innerHTML = sku.price + " ₽";
       }
       if(sku.availability){
              cloneItem.querySelector(".btn-buy").innerHTML = "Купить"
       } else {
              cloneItem.querySelector(".btn-buy").innerHTML = "Нет в наличии";
              cloneItem.querySelector(".btn-buy").classList.add("not-availability");
              cloneItem.querySelector(".btn-buy").classList.remove("btn-buy");
       }
       cloneItem.querySelector(".review .amount-review").innerHTML = sku.comments;
       return cloneItem;
}

products.forEach(sku =>{
    let productsBuy = productsBlock(sku)
    document.querySelector(".product-block ul").append(productsBuy);
})
products.forEach(sku =>{
    let productsBuy = productsBlock(sku)
    document.querySelector(".product-block-two ul").append(productsBuy);;
})


// function getBadgeProduct (nameBadge, element, elemStyle){
       // if(nameBadge){
       // return   elemStyle.querySelector(element).innerHTML = nameBadge;
       // }else{
       // return   elemStyle.querySelector(element).style.display = "none"
       // }
// }
//////under advertising block products
// function underBlockProducts(){
//        for (let i = 0; i < products.length; i++){
//               console.log(products[i])
//        }
// }
// underBlockProducts ()
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
// function amountItemProducts(amount, blockProducts) {
//        for (let i = 0; i < amount; i++) {
//               document.querySelector(blockProducts).append(productsBlock());
//        }
// };
// amountItemProducts(4,".product-block-two ul")

document.querySelector(".product-block").addEventListener("click", function openQuickView(event){
       if(event.target.id = "#quickView"){
              document.querySelector(".popup_catalog-quick-view").classList.add("open");
              document.querySelector("#wrapper").classList.add("popup");
       }
})


////////
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

document.querySelector(".additional-info-product .view-all").addEventListener("click" , function (){
       document.querySelector(".view-all").classList.add("none")
       let listShow = document.querySelectorAll(".info-about-product.none")
       for(const item of listShow){
              item.classList.remove("none")
       }
})

