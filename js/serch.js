//viev murk products
function viewMurkTable (){
document.querySelector(".table-view").addEventListener('click', function(){
    document.querySelector(".filter-product-list").classList.add("table");
    document.querySelector(".view-page").classList.add("table-active");
});
document.querySelector(".row-view").addEventListener('click', function(){
    document.querySelector(".filter-product-list").classList.remove("table");
    document.querySelector(".view-page").classList.remove("table-active");
});
}
viewMurkTable()
///////////////////////
//list products
function productsBlock (sku){
    let item = document.querySelector("template#row")
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
    
     getSkuBrand(sku.brand)

//      console.log(sku.price)
//      console.log(sku.brand)
     cloneItem.querySelector(".review .amount-review").innerHTML = sku.comments;
     return cloneItem;
}
products.forEach(sku =>{
  let productsBuy = productsBlock(sku)
  document.querySelector(".filter-product-list").append(productsBuy);
//   showListManufacturer(sku.brand)
})
////////////////////////////////
//input range price
function showRangeProgress (range,elem){
       let rangeElem = document.querySelector(range)
       document.querySelector(elem).textContent = rangeElem.value
       rangeElem.addEventListener("input", function(){
              document.querySelector(elem).textContent = rangeElem.value
       })
}
showRangeProgress("#rangePrice",".toRangePrice")
showRangeProgress("#rangeValue",".toRangeValue")
showRangeProgress("#rangeHeight",".toRangeHeight")
//////////////////
//brand list
function getSkuBrand (listBrand){
       let itemBrand = document.querySelector("template.brand-list-template")
       let cloneItemBrand =  itemBrand.content.cloneNode(true);
       
       cloneItemBrand.querySelector(".name").innerHTML = listBrand;
       cloneItemBrand.querySelector(".brand-check").setAttribute("name", listBrand)
       document.querySelector(".brand-list").append(cloneItemBrand);
       return cloneItemBrand
}

// function filterPrice ( elem){
       
//        let rangePrice = document.querySelector("#rangePrice")
//        rangePrice.addEventListener("input", function(){
//               if (elem < rangePrice){
//                      elem.style.display = "none"
//               }
//        })
       
// }

// function showListManufacturer (elem){
//        let ul = document.querySelector(".brand-list");
//        let li = document.querySelector("template.brand-list-template");
//        let liClone = li.content.cloneNode(true)
//        liClone.querySelector(".name").textContent = elem;
//        return ul.append(li)
// }