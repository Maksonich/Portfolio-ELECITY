/////////////////////////////////////////////////////////////////
//product info
let products = [
       {
              nameProduct : "Холодильник BEKO RCSK 250M00 W",
              brand : "BEKO",
              funcProduct : "снизу",
              color : "белый / металл",
              dimensions: "54x60x158 см 	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " 2",
              amountDoor: "2",
              indication: "открытой двери–звуковая",
              imageProduct: "Beko.png",
              new : "Новинка",
              sale : "-20%",
              codeProduct :"54567474",
              price : 14300 ,
              newPrice : "",
              grade: "",
              comments : "12",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "В наличии",
              present:false,
              availability: true
       },
       {
              nameProduct : "Водонагреватель Electrolux EWH 80 Formax",
              brand : "Electrolux",
              funcProduct : "снизу",
              color : "белый / металл",
              dimensions: "54x60x158 см--- 	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " -",
              amountDoor: "-",
              indication: "-",
              imageProduct: "boiler-ELECTROLUX.png",
              new : "Новинка",
              sale : "-20%",
              codeProduct :"54567475",
              price : 18000,
              newPrice : "",
              comments : "13",
              grade: "5",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "В наличии",
              present:false,
              availability: true
       },
       {
              nameProduct : "Стиральная машина LG F-1096TD3",
              brand : "LG",
              funcProduct : "снизу",
              color : " металл",
              dimensions: "54x60x158 см --	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " 1",
              amountDoor: "1",
              indication: "звуковая/по окончанию стирки",
              imageProduct: "washing-mashin.png",
              new : false,
              sale : "-20%",
              codeProduct :"54567476",
              price : 18000,
              grade: "0",
              comments : "12",
              newPrice : "",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "Нет в наличии",
              present: false,
              availability: true
       },
       {
              nameProduct : "Микроволновая печь WHIRLPOOL AMW 730 IX",
              brand : " WHIRLPOOL",
              funcProduct : "-",
              color : " металл",
              dimensions: "54x60x158 см 	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " 1",
              amountDoor: "1",
              indication: "открытой двери–звуковая",
              imageProduct: "microvawe_whirlpool.png",
              new : "Новинка",
              sale : "-20%",
              codeProduct :"54567477",
              price : 20300,
              grade: "5",
              comments : "13",
              newPrice : "",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "В наличие",
              present:"Подарок",
              availability: true
       },
       {
              nameProduct : "Телефизор BLACKTON 2402B",
              brand : " BLACKTON",
              funcProduct : "-",
              color : "черный",
              dimensions: "54x60x158 см -	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " ",
              amountDoor: "",
              imageProduct: "tv-BLACKTON.png",
              indication: "-",
              new : "Новинка",
              sale : "-20%",
              codeProduct :"54567477",
              price : 10000,
              grade: "5",
              comments : "13",
              newPrice : "",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "В наличие",
              present:false,
              availability: true
       },
       {
              nameProduct : "Микроволновая печь Hansa AMG20BFH",
              brand : "Hansa",
              funcProduct : "-",
              color : "черный",
              dimensions: "54x60x158 см -	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " ",
              amountDoor: "",
              indication: "-",
              imageProduct: "microvave.png",
              new : "Новинка",
              sale : "-20%",
              codeProduct :"54567477",
              price : 15300,
              grade: "5",
              comments : "13",
              newPrice : "",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "В наличие",
              present:false,
              availability: true
       },
       {
              nameProduct : "Холодильник Electrolux EWH 80 Formax",
              brand : "Electrolux",
              funcProduct : "-",
              color : "белый",
              dimensions: "54x60x158 см -	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " 1",
              amountDoor: "1",
              indication: "-",
              imageProduct: "Beko.png",
              new : "Новинка",
              sale : false,
              codeProduct :"54567477",
              price :18000 ,
              grade: "5",
              comments : "13",
              newPrice : "",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "В наличие",
              present:false,
              availability: true
       },
       {
              nameProduct : "Стиральная машина LG F-1096TD3",
              brand : "LG",
              funcProduct : "снизу",
              color : " металл",
              dimensions: "54x60x158 см --	",
              energyConsumption: "класс A (301 кВтч/год)",
              amountCameras: " 1",
              amountDoor: "1",
              indication: "звуковая/по окончанию стирки",
              imageProduct: "washing-mashin.png",
              new : false,
              sale : "-20%",
              codeProduct :"54567476",
              price : 18000, 
              grade: "0",
              comments : "12",
              newPrice : "",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "Нет в наличии",
              present: false,
              availability: false
       },
]
// for (let i = 0; i < products.length; i++){
//        let item = document.querySelector("template ")
//        let sku = products[i]
//        let cloneItem =  item.content.cloneNode(true);

//        cloneItem.querySelector(".nameProduct").innerHTML = sku.nameProduct;
//        cloneItem.querySelector(".image-product img").setAttribute("src", `./images/product/${sku.imageProduct}`);
//        getBadgeProduct(sku.sale , ".sale-prod", cloneItem)
//        getBadgeProduct(sku.new , ".new", cloneItem)
//        getBadgeProduct(sku.present , ".present", cloneItem)
//        let currentPrice; 
//        if (sku.sale){
//               currentPrice = sku.price - ((sku.price / 100) * Number(sku.sale.match(/\d+/)) )
//               cloneItem.querySelector(".new-price").innerHTML =  currentPrice + " ₽";
//               cloneItem.querySelector(".old-price").innerHTML = sku.price;
//        }else{
//        cloneItem.querySelector(".new-price").innerHTML = sku.price + " ₽";
//        }
//        if(sku.availability){
//               cloneItem.querySelector(".btn-buy").innerHTML = "Купить"
//        } else {
//               cloneItem.querySelector(".btn-buy").innerHTML = "Нет в наличии";
//               cloneItem.querySelector(".btn-buy").classList.add("not-availability");
//               cloneItem.querySelector(".btn-buy").classList.remove("btn-buy");
//        }
//        cloneItem.querySelector(".review .amount-review").innerHTML = sku.coments;
//        document.querySelector(".product-block ul").append(cloneItem)
// }

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
function getBadgeProduct (nameBadge, element, elemStyle){
       if(nameBadge){
       return   elemStyle.querySelector(element).innerHTML = nameBadge;
       }else{
       return   elemStyle.querySelector(element).style.display = "none"
       }
}
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