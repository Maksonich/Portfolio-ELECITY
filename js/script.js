////////////// pop-up header autorization
document.querySelector("#authorization").addEventListener("click", function(){
    document.querySelector(".pop-up_input").classList.toggle("active");
})
//////////////open modal window select sity
function changeСities(){

       let wind = document.querySelector("#selectSity");
       wind.addEventListener("click", function(){
              document.querySelector(".popup_catalog-cities").classList.add("open");
              document.querySelector("#wrapper").classList.add("popup");   
       })

       let close =  document.querySelector(".popup_catalog-cities .blocker");
       close.addEventListener("click",  function closePopupSities(){
              document.querySelector(".popup_catalog-cities").classList.remove("open");
              document.querySelector("#wrapper").classList.remove("popup");  
       })

       let changeСity = document.querySelector(".list-cities")
       changeСity.addEventListener("click", function(e){
              wind.querySelector("a").innerHTML = e.target.innerHTML
              
              document.querySelector(".popup_catalog-cities").classList.remove("open");
              document.querySelector("#wrapper").classList.remove("popup");  
       })

}
changeСities()
//close black-window

///////////////////////////////////////////////////////////////////////////////// login Account header click && timer

function loginPersonesAccount (){

       let timerEnterNumber ;
       let login = document.querySelector("#loginAccount").addEventListener("click", function(){
              document.querySelector(".popup_catalog-loginAccount").classList.add("open");
              document.querySelector("#wrapper").classList.add("popup");
              timerEnterNumber = setInterval(timerStart , 1000);
              let timer = document.querySelector("#timer b")
              let time = 59
              
              function timerStart () {
                     const minutes = Math.floor(time / 60);
                     let seconds = time % 60;
                     seconds = seconds < 10 ? "0" + seconds:seconds;
                     timer.innerHTML = seconds
                     time--;
                     if (time === 0 ){
                            document.querySelector(".popup").classList.remove("open");
                            document.querySelector("#wrapper").classList.remove("popup");
                            document.querySelector("#enterNumber").value = ""
                            clearInterval(timerEnterNumber)
                     }
                     
              }
       })

       document.querySelector(".popup .blocker").addEventListener("click", function closeModalWindLoginPers() {
              document.querySelector(".popup").classList.remove("open");
              document.querySelector("#wrapper").classList.remove("popup");
              document.querySelector("#enterNumber").value = ""
              clearInterval(timerEnterNumber)
              
       })
       let number = document.querySelector("#enterNumber")
       let button = document.querySelector("#error")
       let yourNumber = document.querySelector("#your-number")
       let reg = /[0-9]{9}/;
       button.addEventListener("click", function (){
              if (reg.test(number.value)) {
                     console.log(number.value)
                     document.querySelector(".box-one").classList.add("close");
                     document.querySelector(".next-step").classList.add("active");
       
                     let timer = document.querySelector("#timerNextStep")
                     let time = 179
                     let timerEnterCodeMessage = setInterval(timeNextStep , 1000);
                            function timeNextStep(){
                                   const minutes = Math.floor(time / 60);
                                   let seconds = time % 60;
                                   seconds = seconds < 10 ? "0" + seconds:seconds;
                                   timer.innerHTML = `${minutes} : ${seconds}`
                                   time--;
                                   if (time === 0 ){
                                          document.querySelector(".popup").classList.remove("open");
                                          document.querySelector("#wrapper").classList.remove("popup");
                                          clearInterval(timerEnterCodeMessage)
                                   } 
                            }
                     yourNumber.textContent = " 380" + number.value;
              } else{       
                            
                            number.style.border = "1px solid red";
                            number.placeholder = "не корректный номер";
                            number.style.color = "red";
                            button.innerHTML = "Повторить отправку";
              }
       })


       number.addEventListener("change" , function inputValid(){
             
       })
       let enter = document.querySelector("enter");
       let verification = document.querySelector("#verification");
}
loginPersonesAccount()
// enter.addEventListener ("click", function (){
//        if (verification === 1111){
//             let link = document.createElement("a")
//             link.href = "./personal-account.html"
//             enter.append(link)
//        } else {
//               window.stop()
//        }
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// start button all category

 let buttonAllCategory = document.querySelector(".all-category")
 buttonAllCategory.addEventListener('click', function (){
       buttonAllCategory.classList.toggle("active");
       document.querySelector(".all-category-menu").classList.toggle("active");
       

})
//menu all category

const mainMenuAllCategory = document.querySelectorAll(".name-category");
const AllMenuAllCategory = document.querySelectorAll(".category-info");

for (let i = 0; i < mainMenuAllCategory.length;i++){
       let elemUl = mainMenuAllCategory[i]

       elemUl.addEventListener("mouseover", function () {
              AllMenuAllCategory[i].classList.add("active")
       })
       elemUl.addEventListener("mouseout", function (){
              AllMenuAllCategory[i].classList.remove("active")
       })
      
}
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
              coments : "12",
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
              coments : "13",
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
              coments : "12",
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
              coments : "13",
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
              coments : "13",
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
              coments : "13",
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
              coments : "13",
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
              coments : "12",
              newPrice : "",
              brandLogotype : "./images/icons/brand/Beko.png",
              аvailability: "Нет в наличии",
              present: false,
              availability: false
       },
]

for (let i = 0; i < products.length; i++){
       let item = document.querySelector("template ")
       let sku = products[i]
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
       cloneItem.querySelector(".review .amount-review").innerHTML = sku.coments;
       document.querySelector(".product-block ul").append(cloneItem)
}

function getBadgeProduct (nameBadge, element, elemStyle){
       if(nameBadge){
          return   elemStyle.querySelector(element).innerHTML = nameBadge;
       }else{
          return   elemStyle.querySelector(element).style.display = "none"
       }
}
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
