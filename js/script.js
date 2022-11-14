////////////// pop-up header autorization
let buttonuAthorization = document.querySelector("#authorization").addEventListener("click", function(){
    document.querySelector(".pop-up_input").classList.toggle("active");
})
//////////////open modal window select sity
let wind = document.querySelector("#selectSity");
wind.addEventListener("click", function(){
       document.querySelector(".popup_catalog-cities").classList.add("open");
       document.querySelector("#wrapper").classList.add("popup");   
})
// let close =  document.querySelector(".popup .blocker");
// close.addEventListener("click", function(){
//         document.querySelector(".popup_catalog-cities").classList.remove("open");
//        document.querySelector("#wrapper").classList.remove("popup");  
// })

//close black-window

let block =  document.querySelector(".popup .blocker");
block.addEventListener("click", function() {
       document.querySelector(".popup").classList.remove("open");
       document.querySelector("#wrapper").classList.remove("popup");
       
})

///////////////////////////////////////////////////////////////////////////////// login Account header click && timer
let login = document.querySelector("#loginAccount").addEventListener("click", function(){
       document.querySelector(".popup_catalog-loginAccount").classList.add("open");
       document.querySelector("#wrapper").classList.add("popup");

       let timer = document.querySelector("#timer b")
       let time = 59
       setInterval(timerStart , 1000)
       function timerStart () {
              const minutes = Math.floor(time / 60);
              let seconds = time % 60;
              seconds = seconds < 10 ? "0" + seconds:seconds;
              timer.innerHTML = seconds
              time--;
              if (time === 0 ){
                     document.querySelector(".popup").classList.remove("open");
                     document.querySelector("#wrapper").classList.remove("popup");
              } //else if (block()){
                    //нужно написать прекращение фукции  таймстарт
              // }
              
       }
})

let number = document.querySelector("#enterNumber")
let button = document.querySelector("#error")
let yourNumber = document.querySelector("#your-number")
button.addEventListener("click", function (){
      if (number.value !== undefined && number.value !== NaN && number.value !== "") {
         console.log(number.value)
         document.querySelector(".box-one").classList.add("close");
         document.querySelector(".next-step").classList.add("active");

         let timer = document.querySelector("#timerNextStep")
         let time = 179
         setInterval(timeNextStep , 1000)
              function timeNextStep(){
                     const minutes = Math.floor(time / 60);
                     let seconds = time % 60;
                     seconds = seconds < 10 ? "0" + seconds:seconds;
                     timer.innerHTML = `${minutes} : ${seconds}`
                     time--;
                     if (time === 0 ){
                            document.querySelector(".popup").classList.remove("open");
                            document.querySelector("#wrapper").classList.remove("popup");
                     } //else if (block()){
                     //        //нужно написать прекращение фукции  таймстарт
                     // }
              }
         yourNumber.textContent = number.value;
      } else{
              number.style.border = "1px dashed red"
              number.value = "Введите номер телефона"
              number.style.color = "red"
      }
      
})

let enter = document.querySelector("enter")
let verification = document.querySelector("#verification")

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
