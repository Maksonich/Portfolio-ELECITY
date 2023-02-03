let productsListSctring = localStorage.getItem("myProdBuyLocal");
let productsList = JSON.parse(productsListSctring);


//list shop products
function showListShop(elems){
    let sumWithDiscount = 0;
    let sumWithoutDiscount = 0;
    

    for (const elem of elems){
        let items = document.querySelector(".list-shop template");
        let cloneItem = items.content.cloneNode(true);
        
        sumWithDiscount  += parseInt(elem.newPrice.match(/\d+/))
        if (elem.oldPrice.match(/\d+/)){
            sumWithoutDiscount += parseInt(elem.oldPrice.match(/\d+/)) 
        } else{
            sumWithoutDiscount += parseInt(elem.newPrice.match(/\d+/)) 
        }
        cloneItem.querySelector(".name-product-shop").innerHTML = elem.nameProduct;
        cloneItem.querySelector(".newPrice").innerHTML = elem.newPrice;
        cloneItem.querySelector(".oldPrice").innerHTML = elem.oldPrice;
        cloneItem.querySelector(".product-code span").innerHTML = elem.code;
        cloneItem.querySelector(".img-product-shop img").setAttribute("src", `${elem.addressIMG}`);
        // addAndMinusQuantityOfUnits (cloneItem)
        document.querySelector(".list-shop").append(cloneItem)
        
    }
    let discount = sumWithoutDiscount - sumWithDiscount;
    localStorage.setItem("sumBuy", sumWithDiscount)
    blockTotalSum(sumWithoutDiscount,sumWithDiscount,discount)
}
showListShop(productsList);
//////removeCart
// function addAndMinusQuantityOfUnits (li){
 
//     // document.querySelector(".addQuantity").addEventListener("click", function(event){
//     //     let quantity = li.querySelector(".addQuantity .amount-sku").innerHTML
//     //     if(event.target.classList.contains("add")){
//     //         quantity++
//     //     }else if(event.target.classList.contains("add")){
//     //         quantity--
//     //     }
//     // })

  
   
//     li.querySelector(".addQuantity .minus a")
//     li.querySelector(".addQuantity .add a")


//     console.log(li.querySelector(".addQuantity .add a"))
//     console.log(li.querySelector(".addQuantity .minus a"))
//     console.log(li.querySelector(".addQuantity .add a"))
// }
function removeProductCart(){
   
    // for (const button of btnRemove){
    document.addEventListener("click", function removeItemProductCart(event){
            

           if(event.target.classList.contains("remove-product")){
            let cartAmountBuy = localStorage.getItem("cartAmountBuy")
            let minusCartAmountBuy = --cartAmountBuy
            localStorage.setItem("cartAmountBuy", minusCartAmountBuy)
            document.querySelector("#amountShoping", minusCartAmountBuy)
           console.log(event.target.classList.contains("remove-product"))


            let button = event.target
            button.closest("li").remove()
            location.reload()
                for(let i = 0; i < productsList.length;i++){
                   
                    if(button.closest("li").querySelector(".product-code span").innerHTML === productsList[i].code){
                        productsList.splice([i], 1)
                        let confirmedPurchases = JSON.stringify(productsList);
                        localStorage.setItem("myProdBuyLocal", confirmedPurchases);
                        
                    }
                }
           }
            
           
    })
       
        // console.log(button.closest("li").querySelector(".product-code span").innerHTML)
    // }
}
removeProductCart()
//show actual total sum
function blockTotalSum(totalSum,withDiscount,totaldiscount){
    
    document.querySelector(".total-sku span").innerHTML = localStorage.getItem("cartAmountBuy") + " шт"
    document.querySelector(".total-sum .num").innerHTML = withDiscount + " ₴"
    
    document.querySelector(".total-sum-without-discount").innerHTML = totalSum + " ₴"
    document.querySelector(".total-discount").innerHTML = totaldiscount + " ₴"

    if(totalSum < 50000){
        document.querySelector(".price-delivery").innerHTML = "3000 ₴"
    }


    var date = new Date();
    date.setDate(date.getDate() + 3);

    document.querySelector(".date .day").innerHTML = date.getDate() +"."
    document.querySelector(".date .mounth").innerHTML = date.getMonth()+ 1 +"."
    document.querySelector(".date .year").innerHTML = date.getFullYear()

    
    

}
//method delivery
document.querySelector(".method-delivery").addEventListener("change", function(){
    let check = document.querySelectorAll("[name='methodDelivery']")
    
    for (const item of check){
        if(item.checked){
            item.parentElement.parentElement.classList.add("check-active")
            item.nextElementSibling.removeAttribute("disabled")
            console.log()
        } else{
            item.parentElement.parentElement.classList.remove("check-active")
            item.nextElementSibling.setAttribute("disabled" , "")
        }
    }
})
////////////////
function formSubmission(){
    let regEx = new RegExp()
    regEx.mobiReg = /^[0-9]{9}$/;
    regEx.mailREg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    regEx.userName = /^[а-яА-Я]+$/;
    regEx.userCity = /^[а-яА-Я]+$/;
    let submForm = false;

    let formBlock = document.querySelector(".main-info"); 

    let inpName = formBlock.querySelector("#userName");
    let inpNumber = formBlock.querySelector("#userNumber");
    let inpCity = formBlock.querySelector("#cityUser");
    let inpMail = formBlock.querySelector("#userMail");
    let inpLastName = formBlock.querySelector("#userLastName");
    let inpAddress = formBlock.querySelector("#userAddress");


    
    formBlock.addEventListener("input", function (event){
        if(event.target.classList.contains("ent")){
           
            if(regEx.mobiReg.test(inpNumber.value)){
                inpNumber.style.border = "1px solid green"
            }else{
                inpNumber.style.border = "1px solid red"
              
            }
            
            if(regEx.userName.test(inpName.value)){
                inpName.style.border = "1px solid green"
            }else{
                inpName.style.border = "1px solid red"
            }
            
            if(regEx.userCity.test(inpCity.value)){
                inpCity.style.border = "1px solid green"
            }else{
                inpCity.style.border = "1px solid red"
            }
            
            if(regEx.mailREg.test(inpMail.value)){
                inpMail.style.border = "1px solid green"
            }else{
                inpMail.style.border = "1px solid red"
            }
            
            if(regEx.userName.test(inpLastName.value)){
                inpLastName.style.border = "1px solid green"
            }else{
                inpLastName.style.border = "1px solid red"
            }
            
            if(inpAddress.value){
                inpAddress.style.border = "1px solid green"
            }else{
                inpAddress.style.border = "1px solid red"
            }


        }
        let inputs = document.querySelectorAll(".ent")
        for(let i = 0; i < inputs.length; i++){ 
            if(inputs[i].value){
               return submForm = true
            }
            else{
                inputs[i].style.border = "1px solid red"
                return submForm = false
            }
        }
       
    })

    let userDataArr = new Array()
    document.querySelector(".confirm-btn a").addEventListener("click" , function(){

        if(submForm){
            let userDatas = new Object()


            let inpDelivery = document.querySelectorAll("[name='methodDelivery']")
            for (var i = 0; i < inpDelivery.length; i++) {
                if (inpDelivery[i].type == "radio" && inpDelivery[i].checked) {
                    userDatas.methodDelivery = inpDelivery[i].value;
                    userDatas.dateDelivery = inpDelivery[i].nextElementSibling.value

                    if(inpDelivery[1]){
                        let inpOurAddress = document.querySelectorAll("[name='ourAddress']")
                        for (var j = 0; j < inpOurAddress.length; j++) {
                            if (inpOurAddress[j].type == "radio" && inpOurAddress[j].checked) {
                                userDatas.ourAddress = inpOurAddress[j].value;
                            } 

                        }
                    }else if (inpDelivery[0]){
                        userDatas.ourAddress = inpDelivery[0].firstElementChild.value       
                    }

                }
            }
            
            
            let inpMethodPayment= document.querySelectorAll("[name='method-payment']");
            for (var i = 0; i < inpMethodPayment.length; i++) {
                if (inpMethodPayment[i].type == "radio" && inpMethodPayment[i].checked) {
                    userDatas.methodPayment = inpMethodPayment[i].value
                }
            }
            let inpAdditionalServices = document.querySelectorAll("input.additionalServices");
            let arrayAdditionalServices
            for (var i = 0; i < inpAdditionalServices.length; i++) {
                if (inpAdditionalServices[i].type == "radio" && inpAdditionalServices[i].checked) {
                    arrayAdditionalServices = inpAdditionalServices[i].value
                    userDatas.inpAdditionalServices = arrayAdditionalServices
                }
            }
            userDatas.commentsUser = document.querySelector("#Form-comment").value
           
            let confirmationListShop = productsList;
            let confirmationListShopStr = JSON.stringify(confirmationListShop)
            localStorage.setItem("ConfirmationList", confirmationListShopStr)
            localStorage.removeItem("myProdBuyLocal");

           
            userDatas.userName = inpName.value
            userDatas.userLastName = inpLastName.value
            userDatas.userAddress = inpAddress.value
            userDatas.userMail = inpMail.value
            userDatas.userNumber = inpNumber.value
            userDatas.userCity = inpCity.value

            userDataArr.push(userDatas)
            let userDatasStr = JSON.stringify(userDataArr)
            localStorage.setItem("userDataConfirmationShop", userDatasStr)
            localStorage.setItem("cartAmountBuy" , "0")
            localStorage.setItem("sumBuy" , "0")
            formBlock.parentElement.submit()

           
            
        }
    })
   
  
   
}
formSubmission()









document.querySelector("#Form-comment").addEventListener("input", function (){
    console.log( document.querySelector("#Form-comment").value)
})
