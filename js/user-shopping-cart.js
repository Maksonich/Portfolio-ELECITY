let productsListSctring = localStorage.getItem("myProdBuyLocal");
let productsList = JSON.parse(productsListSctring);

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
        document.querySelector(".list-shop").append(cloneItem)


        
       
       
    }
    let discount = sumWithoutDiscount - sumWithDiscount;
    blockTotalSum(sumWithoutDiscount,sumWithDiscount,discount)
}
showListShop(productsList);

function blockTotalSum(totalSum,withDiscount,totaldiscount){
    
    document.querySelector(".total-sku span").innerHTML = localStorage.getItem("cartAmountBuy") + " шт"
    document.querySelector(".total-sum .num").innerHTML = withDiscount + " ₽"
    document.querySelector(".total-sum-without-discount").innerHTML = totalSum + " ₽"
    document.querySelector(".total-discount").innerHTML = totaldiscount + " ₽"

    if(totalSum < 50000){
        document.querySelector(".price-delivery").innerHTML = "3000 ₽"
    }


    var date = new Date();
    date.setDate(date.getDate() + 3);

    document.querySelector(".date .day").innerHTML = date.getDate() +"."
    document.querySelector(".date .mounth").innerHTML = date.getMonth()+ 1 +"."
    document.querySelector(".date .year").innerHTML = date.getFullYear()

    
    
    
    console.log()

}


