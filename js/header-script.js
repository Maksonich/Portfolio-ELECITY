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
////////////// pop-up header autorization
document.querySelector("#authorization").addEventListener("click", function(){
    document.querySelector(".pop-up_input").classList.toggle("active");
})
///////////////////////////////////////////////////////////////////////////////// login Account header click && timer

function loginPersonesAccount (){
    let number = document.querySelector("#enterNumber")
    let buttonError = document.querySelector("#error")
    let yourNumber = document.querySelector("#your-number")
    let reg = /[0-9]{9}$/;
    let regVer = /[1]{4}$/
    let verification = document.querySelector("#verification");
    let enter = document.querySelector("#enter-verify");
    let timerEnterNumber ;


    document.querySelector("#loginAccount").addEventListener("click", function(){
           document.querySelector(".popup_catalog-loginAccount").classList.add("open");
           document.querySelector("#wrapper").classList.add("popup");
           number.focus()
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
    
    buttonError.addEventListener("click", function (){
    if (reg.test(number.value)) {
          
           verification.focus()
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
                  number.value = ""
                  number.style.border = "1px solid red";
                  number.placeholder = "не корректный номер";
                  number.style.PlaceholderColor = "red"
                  buttonError.innerHTML = "Повторить отправку";
    }
    
    })

    enter.addEventListener("click", function  enterPersonalAccountUsers(){
           if (regVer.test(verification.value)){
                  number.value =""
                  verification.value = ""
                  window.location.href = './personal-account.html';
           } else{
                  verification.value = ""
                  verification.style.border = "1px solid red";
                  document.querySelector("#info-verify").innerHTML = "неправильный пароль"
                  document.querySelector("#info-verify").style.color = "red"
           }
    
    })

    number.addEventListener("change" , function inputValid(){
           
    })
    
  
    
}
loginPersonesAccount()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// start button all category
//menu all category
function showAllCategory (){

    let buttonAllCategory = document.querySelector(".all-category")
    buttonAllCategory.addEventListener('click', function (){
       buttonAllCategory.classList.toggle("active");
    document.querySelector(".all-category-menu").classList.toggle("active");
    })

    const mainMenuAllCategory = document.querySelectorAll(".name-category a");
//     const mainMenuAllCategory = document.querySelectorAll("[data-filter-product]");
    const AllMenuAllCategory = document.querySelectorAll(".category-info");

    for (let i = 0; i < mainMenuAllCategory.length;i++){
       let elemli = mainMenuAllCategory[i]
       // elemli.addEventListener("mouseover", showSubcategory)
       let elemShow = AllMenuAllCategory[i]
              
          elemli.addEventListener("mouseover", function () {
                     // console.log(e.target)
                  AllMenuAllCategory[i].classList.add("active")
                  
           })
           elemli.addEventListener("mouseout", function (){
                  AllMenuAllCategory[i].classList.remove("active")
           })
              // console.log(elemShow.dataset.filProd)



       // function  showSubcategory(){
       //        if(elemli.dataset.filterProduct === elemShow.dataset.filProd){
       //               elemShow.classList.add("active");
                    
       //        }


       // }
    }

       
       
       // showSubcategory()
}
showAllCategory()