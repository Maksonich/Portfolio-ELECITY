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
       // cloneItemBrand.querySelector(".brand-check").setAttribute("onclick", `filterSelection('${listBrand}')`)
       document.querySelector(".brand-list").append(cloneItemBrand);
       
       return cloneItemBrand
}
///////////////////////////////////////////////////////////
//показываем загловок поиска и раздел поиска
let chapter = localStorage.getItem("сhapter");

document.querySelector("#chapterLink a").innerHTML = chapter + "  /"
let subChapter = localStorage.getItem("subChapter");

document.querySelector("#serch-page a b").innerHTML = subChapter;
document.querySelector("h3.search-name").innerHTML = subChapter;

document.querySelector(".brand-filter .quantity").innerHTML = "(" + products.length +")"
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//filter price products
function fillterPriceProducts (){
       let priceSku = document.querySelectorAll(".current-price .new-price");
       let range = document.querySelector("#rangePrice");

       range.addEventListener("change" , function (){
              createTegsList(range.value)
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
//filter brand
function filterBrandList (){

let ListProducts = document.querySelectorAll(".item-products-sku")
let inputCheck = document.querySelectorAll(".brand-check")
       document.querySelector(".brand-list").addEventListener("click", function (event){
              
              // if(event.target.classList.contains("brand-check")){
              //        let nameBrand = event.target.getAttribute("name")
              //        for (const itemProduct of ListProducts){
              //                let brandList = itemProduct.querySelector(".brand-sku").textContent
              //                itemProduct.style.display = "no"
              //                if(brandList === nameBrand){
              //                      itemProduct.style.display = "block"
              //                }
                            
              //        }
                    

              // }

              console.log()
              createTegsList(event.target.getAttribute("name"))
             for (let i = 0; i < inputCheck.length;i++){
                     ListProducts[i].style.display = "none"
                     
                     if (inputCheck[i].checked){
                            
                            // if( inputCheck[i].getAttribute("name") === ListProducts[i].querySelector(".brand-sku").innerHTML)
                            for (const itemProduct of ListProducts){
                                   let sku = itemProduct.querySelector(".brand-sku").innerHTML
                                   if( inputCheck[i].getAttribute("name") === sku){
                                          itemProduct.style.display = "block" 

                                   }
                            //       ListProducts[i].style.display = "block"  
                            }
                           
                            
                            // console.log(inputCheck[i].getAttribute("name"))

                            // console.log(ListProducts[i].querySelector(".brand-sku").innerHTML)
                            
                            
                     }
             }

       })
      
}

filterBrandList()
function createTegsList(element){
       let tegsLi = document.createElement("li");
       if(Number(element)){
              tegsLi.innerHTML = "до " + element
      
       } else {
              tegsLi.innerHTML = element
       }
       

       document.querySelector("ul.tegs").append(tegsLi)
       
}

///////////////////////////////////////////////
function addInCartProductsSearch(){
       let cartBuy = document.querySelector("#buy-list");
       let amountBuy = cartBuy.querySelector("#amountShoping");
       let quantityMany = document.querySelector("#amountPrice");
       let userArrowProduct = new Array();
       document.querySelector(".filter-product-list").addEventListener("click", function (event){
       
       if (event.target.classList.contains("btn-buy")) { 
              let itemProduct = event.target.closest(".item-products-sku")
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
addInCartProductsSearch()
///////////////////////////////////









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
