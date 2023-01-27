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
//      cloneItem.dataset.price = sku.price
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
     let otherInformation = cloneItem.querySelector(".other-information")
       otherInformation.querySelector(".brand-sku").innerHTML = sku.brand;
       otherInformation.querySelector(".color").innerHTML = sku.color;
       otherInformation.querySelector(".energy").innerHTML = sku.energyConsumption;
       otherInformation.querySelector(".code-product").innerHTML = sku.codeProduct;

     getSkuBrand(sku.brand)
 
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
///////////////////////////////////////////////////////////
//показываем загловок поиска и раздел поиска
let chapter = localStorage.getItem("сhapter");
// chapter = chapter.replace('(', '') ;
document.querySelector("#chapterLink a").innerHTML = chapter + "  /"
console.log(chapter)

let subChapter = localStorage.getItem("subChapter");
// subChapter  = subChapter.replace('(', '') ;
document.querySelector("#serch-page a b").innerHTML = subChapter;
document.querySelector("h3.search-name").innerHTML = subChapter;
/////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
//filter price products
function fillterPriceProducts (){
       let priceSku = document.querySelectorAll(".current-price .new-price");
       let range = document.querySelector("#rangePrice");

       range.addEventListener("change" , function (){
              priceSku.forEach(sku =>{
                     if ( range.value < parseInt(sku.innerHTML.match(/\d+/))){
                            sku.closest(".item-products-sku").classList.add("sku-none")
                     } else{
                            sku.closest(".item-products-sku").classList.remove("sku-none")
                     }
                     
              })
       })
       
      
}
fillterPriceProducts()
//////////////////////////////////////////////////
//сортировка єлементов по возрастанию цены  и по убыванию
function sortingByPriceAscending (){
       let btnSort = document.querySelector("#sortProducts");
       
       let priceSku = document.querySelector("ul.filter-product-list");
       btnSort.addEventListener("change", function(){

              if (btnSort.value == "1"){
                     const elements = document.querySelectorAll('.item-products-sku');
                     const sorted = [...elements].sort((a, b) => {
                     const priceElA = a.querySelector(".new-price");
                     const priceElB = b.querySelector(".new-price");
                     const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
                     return getPrice(priceElA) - getPrice(priceElB);
                     });
                     const resultEl = document.querySelector(".filter-product-list");
                     resultEl.innerHTML = null;
                     sorted.forEach(el => resultEl.appendChild(el));
              }else if (btnSort.value == "2"){
                     const elements = document.querySelectorAll('.item-products-sku');
                     const sorted = [...elements].sort((a, b) => {
                            const priceElA = a.querySelector(".new-price");
                            const priceElB = b.querySelector(".new-price");
                            const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
                            return getPrice(priceElA) - getPrice(priceElB);
                     });
                     const resultEl = document.querySelector(".filter-product-list");
                     resultEl.innerHTML = null;
                     sorted.forEach(el => resultEl.prepend(el));
              } else if (btnSort.value == "0"){
                    //написать функцию сортирующую по умолчанию
              }
       })
}
sortingByPriceAscending ()
/////////////

// function showListManufacturer (elem){
//        let ul = document.querySelector(".brand-list");
//        let li = document.querySelector("template.brand-list-template");
//        let liClone = li.content.cloneNode(true)
//        liClone.querySelector(".name").textContent = elem;
//        return ul.append(li)
// }

// function searchShapter (){
//        let str = document.querySelector("#serch-page a b")
//        if (!str){
//               document.querySelector(".list-search-products").style.display = "none"
//        }
// }