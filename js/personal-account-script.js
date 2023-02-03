 
function allowEditNameUser (editElemClickP,editElemP,datalocal){
    let editElemClick = document.querySelector(editElemClickP)
    let editElem = document.querySelector(editElemP);
    editElemClick.addEventListener('click', function (){
            editElem.removeAttribute("readonly");
            editElem.focus();
            editElem.classList.add("active-edit")
            editElem.nextElementSibling.style.display = "block"
            editElemClick.style.color = "#1E1E1E"
            
    })
    editElem.nextElementSibling.addEventListener('click', function (e){
            // e.preventDefault()
            editElem.setAttribute("readonly","readonly");
            editElem.blur();
            editElem.classList.remove("active-edit")
            editElem.nextElementSibling.style.display = ""
            editElemClick.style.color = "rgba(67, 127, 200, 1)"
            localStorage.setItem(datalocal, editElem.value)
    })
}   
allowEditNameUser("#editNameClick","#editName","userName")
allowEditNameUser("#editAddressClick","#editAddress" ,"userAddress")
allowEditNameUser("#editMailClick","#editMail","userMailAddress")
allowEditNameUser("#editNumberClick","#editNumber","userNumber")
/////////////


// // dateStr.querySelector("span.date").innerHTML = yourDay;
// dateStr.querySelector(".mounth").innerHTML = nameMounth;


let tab = function () {
        let tabNav = document.querySelectorAll('.tabs-nav__item'),
            tabContent = document.querySelectorAll('.tab'),
            tabName;
       
        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
            
        });
    
        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }
    
        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
            })
        }
    
    };
 tab();
 ////////////////////////////////
 //my shop list
let listUserDatas = localStorage.getItem("userDataConfirmationShop")
let ArrUserOrder = JSON.parse(listUserDatas)
let listShopStr = localStorage.getItem("ConfirmationList")
let listShopConfirm = JSON.parse(listShopStr)


if (listShopConfirm.length == "0"){
    document.querySelector(".quantity-order").style.display = "none"
} else {
    document.querySelector(".quantity-order").textContent = listShopConfirm.length;
}
function showListConfirmationShops(arrowProducts, arrowDataBuyer){
    let blockOrders = document.querySelector("template.ord-user")
    let cloneBlockOrd = blockOrders.content.cloneNode(true)

    let sumOrder = 0
    let ul = cloneBlockOrd.querySelector(".list-shop")
    for(let item of arrowProducts){
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h6 = document.createElement("h6");

        sumOrder += parseInt(item.newPrice.match(/\d+/))
       
        
        img.setAttribute("src", item.addressIMG)
        h6.innerHTML = item.nameProduct
        div.classList.add("img-prod")
        div.append(img)
        li.append(div)
        li.append(h6)
        
        ul.append(li)

    }


    let yourDate = new Date();
    let yourDay = yourDate.getDate();
    let yourMounth = yourDate.getMonth() +1;
    let nameMounth;
    switch (yourMounth){
        case 1:
        nameMounth = "Январь";
        break;
        case 2:
        nameMounth = "Февраль";
        break;
        case 3:
        nameMounth = "Март";
        break;
        case 4:
        nameMounth = "Апрель";
        break;
        case 5:
        nameMounth = "Май";
        break;
        case 6:
        nameMounth = "Июнь";
        break;
        case 7:
        nameMounth = "Июль";
        break;
        case 8:
        nameMounth = "Августа";
        break;
        case 9:
        nameMounth = "Сентября";
        break;
        case 10:
        nameMounth = "Сентября";
        break;
        case 11:
        nameMounth = "Октября";
        break;
        case 12:
        nameMounth = "Декабря";
        break;

    }
    cloneBlockOrd.querySelector(".date-status").innerHTML = yourDay;
    cloneBlockOrd.querySelector(".mounth-status").innerHTML = nameMounth;

    
    cloneBlockOrd.querySelector(".sum-order").innerHTML = sumOrder + "₴";
   
    let buyer = cloneBlockOrd.querySelector(".buyer-data")
    for(let userData of arrowDataBuyer){
        buyer.querySelector(".name").innerHTML ="<b>Получатель  </b> - " + userData.userName
        buyer.querySelector(".last").innerHTML = userData.userLastName
        buyer.querySelector(".number").innerHTML = "<b>Мобильный номер получателя </b> - +380" + userData.userNumber
        buyer.querySelector(".mail").innerHTML = "<b>Электронная почта получателя </b> - " + userData.userMail
        buyer.querySelector(".city").innerHTML ="<b>Город получателя</b>   - " + userData.userCity
        buyer.querySelector(".address").innerHTML ="<b>Адрес получателя</b>   - " + userData.userAddress
        buyer.querySelector(".delivery-your-address").innerHTML ="<b>Заказ по адресу</b>   - " +  userData.ourAddress
        buyer.querySelector(".user-comments").innerHTML = userData.commentsUser
        buyer.querySelector(".additionalServices1").innerHTML = userData.inpAdditionalServices

        console.log(userData)
        cloneBlockOrd.querySelector(".delivery-date").textContent = "Доставка " + userData.dateDelivery
        cloneBlockOrd.querySelector(".payment-method").textContent = userData.methodPayment
        cloneBlockOrd.querySelector(".method-delivery").textContent = userData.methodDelivery
    }
    document.querySelector(".tab-1 .opted-block").prepend(cloneBlockOrd)
}
   
showListConfirmationShops(listShopConfirm,ArrUserOrder)